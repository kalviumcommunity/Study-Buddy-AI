const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const authMiddleware = require('../middleware/authMiddleware');
const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/', authMiddleware, async (req, res) => {
    try {
        const { title, content } = req.body;
        const userId = req.user.id;
        const embeddingResponse = await openai.embeddings.create({
            model: 'text-embedding-ada-002',
            input: content
        });
        const embedding = embeddingResponse.data[0].embedding;
        const note = new Note({ userId, title, content, embedding });
        await note.save();
        res.status(201).json(note);
    } catch (err) {
        res.status(500).json({ error: 'Failed to upload note', details: err.message });
    }
});

router.post('/question', authMiddleware, async (req, res) => {
        // Function calling: check for math/calculation queries
        const mathRegex = /^\s*(\d+\s*[\+\-\*\/]\s*\d+)\s*$/;
        if (mathRegex.test(question)) {
            try {
                // Evaluate the math expression safely
                // Only supports simple expressions like "12 + 7"
                const result = eval(question);
                return res.json({
                    aiAnswer: {
                        Answer: `The result of ${question} is ${result}.`,
                        Summary: `Result: ${result}`,
                        Example: `${question} = ${result}`
                    }
                });
            } catch {
                return res.json({ aiAnswer: { Answer: 'Invalid math expression.', Summary: '', Example: '' } });
            }
        }
    try {
        const { question } = req.body;
        // TODO: Retrieve relevant notes using embeddings + vector search
        // TODO: Generate AI answer (Answer, Summary, Example)
        const userId = req.user.id;
        // 1. Generate embedding for the question
        const embeddingResponse = await openai.embeddings.create({
            model: 'text-embedding-ada-002',
            input: question
        });
        const questionEmbedding = embeddingResponse.data[0].embedding;

        // 2. Retrieve all notes for the user
        const notes = await Note.find({ userId });

        // 3. Compute cosine similarity between question embedding and each note embedding
        function cosineSimilarity(a, b) {
            let dot = 0.0;
            let normA = 0.0;
            let normB = 0.0;
            for (let i = 0; i < a.length; i++) {
                dot += a[i] * b[i];
                normA += a[i] * a[i];
                normB += b[i] * b[i];
            }
            return dot / (Math.sqrt(normA) * Math.sqrt(normB));
        }

        let bestNote = null;
        let bestScore = -1;
        for (const note of notes) {
            if (note.embedding && note.embedding.length === questionEmbedding.length) {
                const score = cosineSimilarity(questionEmbedding, note.embedding);
                if (score > bestScore) {
                    bestScore = score;
                    bestNote = note;
                }
            }
        }

        // 4. Use OpenAI GPT to generate structured answer if a relevant note is found
        if (bestNote) {
            // Prepare prompt for GPT
            const prompt = `You are a helpful study assistant. Using the following note, answer the user's question in JSON format with three fields: "Answer" (detailed explanation), "Summary" (1-2 line summary), and "Example" (simple example).\n\nNote: ${bestNote.content}\n\nQuestion: ${question}\n\nRespond in JSON.`;
            const completion = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are a helpful study assistant.' },
                    { role: 'user', content: prompt }
                ],
                temperature: 0.7
            });
            // Parse the response
            let aiResponse;
            try {
                aiResponse = JSON.parse(completion.choices[0].message.content);
            } catch (e) {
                aiResponse = { Answer: completion.choices[0].message.content, Summary: '', Example: '' };
            }
            res.json({
                relevantNote: {
                    title: bestNote.title,
                    content: bestNote.content,
                    similarity: bestScore
                },
                aiAnswer: aiResponse
            });
        } else {
            res.json({ message: 'No relevant notes found.' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to answer question', details: err.message });
    }
});

module.exports = router;
