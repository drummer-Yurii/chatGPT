import exppress from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import { openai } from '../index.js';

dotenv.config();
const router = exppress.Router();

router.post("/text", async (teq, res) => {
    try {
        const { text, activeChatId } = req.body;
        console.log('text', text);
        res.status(200).json({ text });
    } catch (error) {
        console.error("error", error);
        res.status(500).json({ error: error.message });
    }
});

export default router;