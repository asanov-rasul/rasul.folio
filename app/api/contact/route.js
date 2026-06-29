import { NextResponse } from "next/server";

const TELEGRAM_API_URL = "https://api.telegram.org/bot";

function normalizeField(value) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return NextResponse.json(
      { error: "Telegram не настроен. Добавьте TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в .env.local." },
      { status: 500 }
    );
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Некорректные данные формы." }, { status: 400 });
  }

  const name = normalizeField(body.name);
  const email = normalizeField(body.email);
  const message = normalizeField(body.message);

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Заполните имя, email и сообщение." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Укажите корректный email." }, { status: 400 });
  }

  if (message.length > 3000) {
    return NextResponse.json({ error: "Сообщение слишком длинное." }, { status: 400 });
  }

  const text = [
    "<b>Новое сообщение с портфолио</b>",
    "",
    `<b>Имя:</b> ${escapeHtml(name)}`,
    `<b>Email:</b> ${escapeHtml(email)}`,
    "",
    `<b>Сообщение:</b>\n${escapeHtml(message)}`
  ].join("\n");

  const telegramResponse = await fetch(`${TELEGRAM_API_URL}${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true
    })
  });

  if (!telegramResponse.ok) {
    return NextResponse.json({ error: "Telegram не принял сообщение." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
