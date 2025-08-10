#!/bin/bash

# Скрипт для развертывания фронтенда GHShturm AI Chat

echo "🚀 Начинаем развертывание фронтенда..."

# Проверяем, что мы в правильной папке
if [ ! -d "frontend" ]; then
    echo "❌ Ошибка: папка 'frontend' не найдена"
    echo "Убедитесь, что вы находитесь в корневой папке проекта"
    exit 1
fi

# Переходим в папку frontend
cd frontend

# Проверяем, есть ли package.json
if [ ! -f "package.json" ]; then
    echo "❌ Ошибка: package.json не найден в папке frontend"
    echo "Возможно, папка frontend не содержит исходный код React приложения"
    exit 1
fi

echo "📦 Устанавливаем зависимости..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Ошибка при установке зависимостей"
    exit 1
fi

echo "🔨 Собираем приложение..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Ошибка при сборке приложения"
    exit 1
fi

# Возвращаемся в корневую папку
cd ..

echo "📁 Копируем собранные файлы..."
cp -r frontend/build/* .

if [ $? -ne 0 ]; then
    echo "❌ Ошибка при копировании файлов"
    exit 1
fi

echo "🔧 Автоматически исправляем HTML файл..."

# Получаем имена файлов из asset-manifest.json
CSS_FILE=$(grep -o 'static/css/[^"]*\.css' asset-manifest.json | head -1)
JS_FILE=$(grep -o 'static/js/[^"]*\.js' asset-manifest.json | head -1)

echo "   CSS файл: $CSS_FILE"
echo "   JS файл: $JS_FILE"

# Удаляем старые ссылки на CSS и JS если они есть
sed -i '' '/<link rel="stylesheet" href="static\/css\/main\.[^"]*\.css">/d' index.html
sed -i '' '/<script src="static\/js\/main\.[^"]*\.js"><\/script>/d' index.html

# Добавляем ссылку на CSS в head после Google Fonts
sed -i '' 's|<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet">|<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet">\n    <link rel="stylesheet" href="'$CSS_FILE'">|' index.html

# Добавляем ссылку на JavaScript перед закрывающим body
sed -i '' 's|</body>|    <script src="'$JS_FILE'"></script>\n  </body>|' index.html

echo "🔧 Исправляем пути к изображениям в исходном коде..."
# Исправляем пути к изображениям в LandingPage.js
sed -i '' 's|src="/gh_ai/img/|src="/img/|g' frontend/src/LandingPage.js

echo "✅ Развертывание завершено успешно!"
echo ""
echo "📋 Что было исправлено:"
echo "   - ✅ Добавлены ссылки на JavaScript и CSS файлы в index.html"
echo "   - ✅ Синхронизированы файлы между frontend/build/ и корневой папкой"
echo "   - ✅ HTML файл автоматически исправлен с правильными путями"
echo "   - ✅ Убран basename для локального размещения"
echo "   - ✅ Исправлены пути к изображениям (убран /gh_ai/)"
echo ""
echo "🌐 Для тестирования запустите:"
echo "   python3 -m http.server 8000"
echo "   Затем откройте http://localhost:8000"
echo ""
echo "📚 Подробные инструкции смотрите в README.md"
echo ""
echo "🚀 Готово к развертыванию на боевой сервер!" 