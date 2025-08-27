const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const authMiddleware = require('../middleware/authMiddleware');
const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Upload notes (protected)
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { title, content } = req.body;
        const userId = req.user.id;
        // Generate embedding using OpenAI
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

// Ask question (protected)
router.post('/question', authMiddleware, async (req, res) => {
    try {
        const { question } = req.body;
        // TODO: Retrieve relevant notes using embeddings + vector search
        // TODO: Generate AI answer (Answer, Summary, Example)
        res.json({
            Answer: 'This is a placeholder answer.',
            Summary: 'This is a summary.',
            Example: 'This is an example.'
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to answer question' });
    }
});

module.exports = router;
