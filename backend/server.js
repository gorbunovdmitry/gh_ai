const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { google } = require('googleapis');
const app = express();

app.use(cors());
app.use(express.json());
app.options('/api/chat', cors());
app.options('*', cors());

// === Google Sheets Setup ===
const SHEET_ID = process.env.GOOGLE_SHEET_ID;
let sheetsClient;

async function getSheetsClient() {
  if (sheetsClient) return sheetsClient;
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS_JSON),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  sheetsClient = google.sheets({ version: 'v4', auth });
  return sheetsClient;
}

// === Gemini API Setup ===
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + GEMINI_API_KEY;

const SYSTEM_PROMPT = '';

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;
  const promptCount = req.body.promptcount;
  if (!userMessage) return res.status(400).json({ reply: 'Нет сообщения' });

  const fullPrompt = userMessage;

  let aiReply = '';
  try {
    // 1. Запрос к Gemini
    const geminiRes = await axios.post(GEMINI_API_URL, {
      contents: [{ parts: [{ text: fullPrompt }] }]
    });
    aiReply = geminiRes.data.candidates?.[0]?.content?.parts?.[0]?.text || 'Нет ответа от AI';
  } catch (e) {
    console.error('Gemini error:', e?.response?.data || e.message);
    aiReply = 'Ошибка AI: ' + (e?.response?.data?.error?.message || e.message);
  }

  // 2. Запись в Google Sheets
  try {
    // Получаем дату и время по Москве
    const moscowDate = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Moscow' }));
    const dateTimeStr = moscowDate.toISOString().replace('T', ' ').substring(0, 19); // "YYYY-MM-DD HH:MM:SS"
    const sheets = await getSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'A:D',
      valueInputOption: 'RAW',
      requestBody: { values: [[dateTimeStr, promptCount, userMessage, aiReply]] },
    });
  } catch (e) {
    console.error('Sheets error:', e?.response?.data || e.message);
  }

  res.json({ reply: aiReply });
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Backend started on port ${PORT}`)); 