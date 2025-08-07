# 🚀 Деплой на Render - Пошаговая инструкция

## Шаг 1: Подготовка аккаунта Render

1. **Зарегистрируйтесь на [Render](https://render.com/)**
   - Перейдите на https://render.com/
   - Нажмите "Get Started for Free"
   - Войдите через GitHub аккаунт

## Шаг 2: Создание нового Web Service

1. **В Dashboard Render нажмите "New +"**
2. **Выберите "Web Service"**
3. **Подключите ваш GitHub репозиторий:**
   - Выберите репозиторий: `gorbunovdmitry/gh_ai`
   - Нажмите "Connect"

## Шаг 3: Настройка Web Service

### Основные настройки:
- **Name:** `gh-ai-backend` (или любое другое имя)
- **Environment:** `Node`
- **Region:** Выберите ближайший к вам регион
- **Branch:** `main`
- **Root Directory:** оставьте пустым (весь репозиторий)
- **Build Command:** `cd backend && npm install`
- **Start Command:** `cd backend && npm start`

### План:
- **Free** (для начала)

## Шаг 4: Настройка переменных окружения

В разделе "Environment Variables" добавьте:

### Обязательные переменные:
```
GEMINI_API_KEY=AIzaSyDxEz1hxLj6UFHqywQbhIJF1Lq4NjQE3Kg
GOOGLE_SHEET_ID=ваш_google_sheet_id
GOOGLE_CREDENTIALS_JSON={"type":"service_account",...} # весь JSON
PORT=10000
NODE_ENV=production
```

### Как добавить переменные:
1. Нажмите "Add Environment Variable"
2. Введите ключ и значение
3. Повторите для всех переменных

## Шаг 5: Настройка Google Sheets

### Создание Google Cloud проекта:
1. Перейдите на [Google Cloud Console](https://console.cloud.google.com/)
2. Создайте новый проект
3. Включите Google Sheets API

### Создание Service Account:
1. Перейдите в "IAM & Admin" → "Service Accounts"
2. Нажмите "Create Service Account"
3. Заполните данные:
   - Name: `gh-ai-sheets`
   - Description: `Service account for GH AI backend`
4. Нажмите "Create and Continue"
5. Роли: `Editor`
6. Нажмите "Done"

### Скачивание ключей:
1. Нажмите на созданный Service Account
2. Перейдите на вкладку "Keys"
3. Нажмите "Add Key" → "Create new key"
4. Выберите "JSON"
5. Скачайте файл

### Создание Google таблицы:
1. Создайте новую Google таблицу
2. Поделитесь с email из Service Account (с правами редактора)
3. Скопируйте ID таблицы из URL

## Шаг 6: Заполнение переменных окружения

### GEMINI_API_KEY:
```
AIzaSyDxEz1hxLj6UFHqywQbhIJF1Lq4NjQE3Kg
```

### GOOGLE_SHEET_ID:
```
1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
```
(замените на ваш реальный ID)

### GOOGLE_CREDENTIALS_JSON:
Вставьте весь JSON из скачанного файла Service Account:
```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "your-private-key-id",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "your-service-account@your-project.iam.gserviceaccount.com",
  "client_id": "your-client-id",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/your-service-account%40your-project.iam.gserviceaccount.com"
}
```

## Шаг 7: Деплой

1. **Нажмите "Create Web Service"**
2. **Дождитесь завершения деплоя** (обычно 2-5 минут)
3. **Скопируйте URL вашего сервиса** (например: `https://gh-ai-backend.onrender.com`)

## Шаг 8: Тестирование

### Проверка API:
```bash
curl -X POST https://your-app-name.onrender.com/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Привет", "promptcount":1}'
```

### Проверка Google Sheets:
1. Откройте вашу Google таблицу
2. Убедитесь, что сообщения записываются

## Шаг 9: Обновление Frontend

Обновите `frontend/.env`:
```env
REACT_APP_BACKEND_URL=https://your-app-name.onrender.com
```

## 🔧 Устранение проблем

### Ошибка "Build failed":
- Проверьте, что все зависимости указаны в `package.json`
- Убедитесь, что Node.js версия >= 18

### Ошибка "Environment variables":
- Проверьте, что все переменные окружения добавлены
- Убедитесь, что JSON для Google Sheets корректный

### Ошибка CORS:
- В `backend/server.js` уже настроен CORS для всех доменов

### Ошибка Google Sheets:
- Проверьте права доступа Service Account к таблице
- Убедитесь, что Google Sheets API включен

## 📊 Мониторинг

В Render Dashboard вы можете:
- Видеть логи приложения
- Мониторить использование ресурсов
- Настраивать автодеплой при изменениях в git

## 💰 Стоимость

- **Free план:** 750 часов в месяц
- **После превышения:** $7/месяц
- **Рекомендация:** Переходите на платный план для продакшена

---

**Готово! Ваш backend теперь работает на Render! 🎉** 