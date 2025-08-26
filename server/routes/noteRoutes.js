const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Upload notes
router.post('/', async (req, res) => {
    try {
        const { userId, title, content } = req.body;
        // TODO: Generate embedding for content
        const embedding = []; // Placeholder
        const note = new Note({ userId, title, content, embedding });
        await note.save();
        res.status(201).json(note);
    } catch (err) {
        res.status(500).json({ error: 'Failed to upload note' });
    }
});

// Ask question
router.post('/question', async (req, res) => {
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
