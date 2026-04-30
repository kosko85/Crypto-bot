const http = require('http');

const TELEGRAM_TOKEN = '8718494594:AAH86z-kDUm7XSnoKl6U6rFNWZPEmtShl9Q';
const CHAT_ID = '1968840283';

async function sendTelegram(message) {
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
  const body = JSON.stringify({ chat_id: CHAT_ID, text: message, parse_mode: 'HTML' });
  
  const { default: fetch } = await import('node-fetch');
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/luxalgo') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        const event = data.event || data.strategy_event || 'SİNYAL';
        const ticker = data.ticker || 'BTCUSDT';
        const timeframe = data.timeframe || '';
        const price = data.price ? parseFloat(data.price).toLocaleString() : '';

        let​​​​​​​​​​​​​​​​
