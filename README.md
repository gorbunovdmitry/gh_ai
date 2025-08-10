# GHShturm AI Chat - Frontend

## Описание
React приложение для AI чата с различными режимами работы (стереотипы, инверсия, перенос).

## 🚀 Быстрое развертывание

### Вариант 1: GitHub Pages (рекомендуется)
```bash
cd frontend
npm install
npm run deploy
```
Приложение будет доступно по адресу: **https://gorbunovdmitry.github.io/gh_ai**

### Вариант 2: Локальное развертывание
```bash
# Сборка
cd frontend
npm install
npm run build

# Копирование файлов
cd ..
cp -r frontend/build/* .

# Запуск локального сервера
python3 -m http.server 8000
# Открыть http://localhost:8000
```

### Вариант 3: Для обычного сервера
1. Изменить `homepage` в `frontend/package.json`:
   ```json
   "homepage": "."
   ```
2. Пересобрать и скопировать файлы (см. Вариант 2)

## 📁 Структура проекта
```
GH_test/
├── index.html          # Главная HTML страница
├── static/             # Собранные статические файлы
│   ├── css/           # CSS стили
│   └── js/            # JavaScript бандлы
├── img/               # Изображения
├── frontend/          # Исходный код React приложения
│   ├── src/          # Исходные файлы
│   ├── public/       # Публичные файлы
│   └── package.json  # Зависимости и скрипты
└── backend/           # Backend API
```

## ✅ Что исправлено
- **Проблема идентифицирована**: приложение было настроено для GitHub Pages с `homepage: "/gh_ai"`
- **Решение 1**: использовать `npm run deploy` для GitHub Pages
- **Решение 2**: изменить `homepage` на `"."` для локального размещения
- **Файлы**: синхронизированы между `frontend/build/` и корневой папкой
- **HTML**: добавлены ссылки на CSS и JavaScript файлы
- **Роутинг**: настроен для работы без базового пути

## 🌐 Настройка веб-сервера

### Nginx
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/GH_test;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Apache (.htaccess)
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## 🧪 Проверка работоспособности

### Локально
```bash
python3 -m http.server 8000
# Открыть http://localhost:8000
```

### На сервере
1. Проверить доступность `index.html`
2. Проверить доступность JavaScript файлов в `static/js/`
3. Проверить доступность CSS файлов в `static/css/`
4. Проверить консоль браузера на наличие ошибок

## 🛣️ Структура роутинга
- `/` - Главная страница (LandingPage)
- `/stereotypes` - Чат со стереотипами (ChatPage)
- `/inversion` - Чат с инверсией (ChatPage)
- `/transfer` - Чат с переносом (ChatPage)

## 🔧 Технические детали
- React 18+
- React Router v6
- CSS модули
- Адаптивный дизайн
- Поддержка GitHub Pages (SPA redirect script)
- Google Analytics и Yandex.Metrika

## 📚 Дополнительные файлы
- `QUICK_FIX.md` - Быстрое исправление проблем
- `deploy.sh` - Скрипт автоматического развертывания
- `MIGRATION_GUIDE.md` - Руководство по миграции
- `RENDER_DEPLOY_GUIDE.md` - Развертывание на Render.com

## 🆘 Устранение неполадок

### Проблема: "react-scripts: command not found"
**Решение**: Выполнить `npm install` в папке `frontend`

### Проблема: Страница загружается, но приложение не работает
**Решение**: Проверить консоль браузера (F12) на наличие ошибок загрузки JS/CSS

### Проблема: Маршруты не работают
**Решение**: Убедиться, что веб-сервер настроен для SPA (try_files в nginx)

### Проблема: gh-pages deployment failed
**Решение**: Использовать ручное копирование файлов (Вариант 2) 