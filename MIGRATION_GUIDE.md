# 🚀 Инструкция по миграции проекта

## Шаг 1: Создание нового репозитория

1. Создайте новый репозиторий на GitHub
2. Скопируйте URL нового репозитория

## Шаг 2: Подготовка локального репозитория

```bash
# Инициализируйте git в текущей папке (если еще не инициализирован)
git init

# Добавьте все файлы
git add .

# Создайте первый коммит
git commit -m "Initial commit: Chat with Gemini AI"

# Добавьте удаленный репозиторий
git remote add origin <URL-ВАШЕГО-НОВОГО-РЕПОЗИТОРИЯ>

# Отправьте код
git push -u origin main
```

## Шаг 3: Настройка API ключей

### Google Gemini API
1. Перейдите на [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Создайте новый API ключ
3. Скопируйте ключ

### Google Sheets
1. Создайте новый проект в [Google Cloud Console](https://console.cloud.google.com/)
2. Включите Google Sheets API
3. Создайте Service Account:
   - Перейдите в "IAM & Admin" → "Service Accounts"
   - Нажмите "Create Service Account"
   - Скачайте JSON файл с ключами
4. Создайте Google таблицу
5. Поделитесь таблицей с email из Service Account (с правами редактора)
6. Скопируйте ID таблицы из URL

## Шаг 4: Настройка переменных окружения

### Backend
```bash
cd backend
cp .env.example .env
```

Отредактируйте `backend/.env`:
```env
GEMINI_API_KEY=ваш_новый_gemini_api_ключ
GOOGLE_SHEET_ID=ваш_новый_sheet_id
GOOGLE_CREDENTIALS_JSON={"type":"service_account",...} # весь JSON из скачанного файла
PORT=5002
```

### Frontend
```bash
cd frontend
cp .env.example .env
```

Отредактируйте `frontend/.env`:
```env
REACT_APP_BACKEND_URL=http://localhost:5002
REACT_APP_GA_TRACKING_ID=ваш_ga_id_или_оставьте_пустым
REACT_APP_YANDEX_METRIKA_ID=ваш_ym_id_или_оставьте_пустым
```

## Шаг 5: Обновление конфигурации для деплоя

### Обновите homepage в frontend/package.json:
```json
{
  "homepage": "https://ваш-username.github.io/ваш-репозиторий"
}
```

### Обновите аналитику (опционально):
В `frontend/public/index.html` замените:
- `G-VNG605KE2R` на ваш GA ID
- `96171108` на ваш Yandex.Metrika ID

## Шаг 6: Тестирование локально

```bash
# Backend
cd backend
npm install
npm start

# Frontend (в новом терминале)
cd frontend
npm install
npm start
```

Откройте http://localhost:3000 и протестируйте чат.

## Шаг 7: Деплой

### Backend (Railway/Heroku)
1. Создайте аккаунт на [Railway](https://railway.app/)
2. Подключите ваш GitHub репозиторий
3. В настройках проекта добавьте переменные окружения:
   - `GEMINI_API_KEY`
   - `GOOGLE_SHEET_ID`
   - `GOOGLE_CREDENTIALS_JSON`
   - `PORT`
4. Получите URL вашего backend

### Frontend (GitHub Pages)
1. Обновите `REACT_APP_BACKEND_URL` в `frontend/.env` на URL вашего backend
2. Деплой:
```bash
cd frontend
npm run deploy
```

## Шаг 8: Проверка

1. Откройте ваш сайт на GitHub Pages
2. Протестируйте чат
3. Проверьте, что сообщения записываются в Google Sheets

## 🔧 Устранение проблем

### Ошибка CORS
Убедитесь, что в `backend/server.js` правильно настроен CORS для вашего домена.

### Ошибка API ключей
Проверьте, что все переменные окружения правильно установлены.

### Ошибка Google Sheets
Убедитесь, что:
- Service Account имеет доступ к таблице
- JSON с учетными данными корректный
- Google Sheets API включен в проекте

## 📝 Важные замечания

- Никогда не коммитьте `.env` файлы
- Регулярно обновляйте API ключи
- Мониторьте использование API для контроля расходов
- Делайте резервные копии Google Sheets 