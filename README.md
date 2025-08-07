# Чат с Google Gemini AI

Веб-приложение для общения с ИИ-ассистентом Альфа-Банка по вопросам ЖКУ.

## 🚀 Быстрый старт

### 1. Клонирование репозитория
```bash
git clone <your-new-repo-url>
cd <your-project-name>
```

### 2. Настройка Backend

1. Перейдите в папку backend:
   ```bash
   cd backend
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Создайте файл `.env` на основе `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Заполните переменные окружения в `.env`:
   - `GEMINI_API_KEY` - ваш API ключ Google Gemini
   - `GOOGLE_SHEET_ID` - ID Google таблицы для логирования
   - `GOOGLE_CREDENTIALS_JSON` - JSON с учетными данными Google Service Account

5. Запустите сервер:
   ```bash
   npm start
   ```

### 3. Настройка Frontend

1. Перейдите в папку frontend:
   ```bash
   cd frontend
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Создайте файл `.env` на основе `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Обновите `REACT_APP_BACKEND_URL` в `.env` (если backend запущен не на localhost:5002)

5. Запустите приложение:
   ```bash
   npm start
   ```

6. Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 🔧 Настройка API ключей

### Google Gemini API
1. Перейдите на [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Создайте новый API ключ
3. Скопируйте ключ в `backend/.env`

### Google Sheets
1. Создайте новый проект в [Google Cloud Console](https://console.cloud.google.com/)
2. Включите Google Sheets API
3. Создайте Service Account и скачайте JSON файл
4. Создайте Google таблицу и поделитесь с email из Service Account
5. Скопируйте ID таблицы и JSON в `backend/.env`

## 📦 Деплой

### Backend (например, на Railway/Heroku)
1. Создайте аккаунт на [Railway](https://railway.app/) или [Heroku](https://heroku.com/)
2. Подключите ваш GitHub репозиторий
3. Добавьте переменные окружения в настройках проекта
4. Деплой произойдет автоматически

### Frontend (GitHub Pages)
1. Обновите `homepage` в `frontend/package.json`:
   ```json
   "homepage": "https://your-username.github.io/your-repo-name"
   ```

2. Обновите `REACT_APP_BACKEND_URL` в `.env` на URL вашего backend

3. Деплой:
   ```bash
   cd frontend
   npm run deploy
   ```

## 📁 Структура проекта

```
├── backend/           # Node.js сервер
│   ├── server.js      # Основной файл сервера
│   ├── package.json   # Зависимости backend
│   └── .env.example   # Пример переменных окружения
├── frontend/          # React приложение
│   ├── src/
│   │   ├── App.js     # Основной компонент
│   │   ├── Chat.css   # Стили чата
│   │   └── LimitPage.js # Страница лимита
│   ├── package.json   # Зависимости frontend
│   └── .env.example   # Пример переменных окружения
└── README.md          # Документация
```

## 🔒 Безопасность

- Никогда не коммитьте `.env` файлы
- Используйте переменные окружения для API ключей
- Ограничьте доступ к Google Sheets только необходимыми аккаунтами

## 📊 Аналитика

Приложение настроено для работы с:
- Google Analytics
- Yandex.Metrika

Обновите ID в `frontend/public/index.html` и `frontend/.env` при необходимости.

---

**Примечание:** Убедитесь, что все API ключи и URL настроены правильно перед деплоем. 