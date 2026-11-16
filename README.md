# Uiiiiiii !!!!!!!!!!!😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊

# Todo List — React + Bulletproof React Architecture

CRUD-приложение для управления задачами, организованное по модульной архитектуре **Bulletproof React**.

## Особенности работы с данными
- **Локальная разработка (`npm run dev` + `npm run server`):** приложение взаимодействует с локальным REST API (`db.json`) по HTTP (`GET`, `POST`, `PATCH`, `DELETE`).
- **Демо-версия (GitHub Pages):** в production-сборке автоматически переключается на `localStorage` браузера через `queryFn` в RTK Query.

## Стек технологий
- **React 19 + Vite + TypeScript 6**
- **Tailwind CSS v4**
- **Redux Toolkit (RTK Query + Slice)** — кэширование запросов, инвалидация тегов и фильтрация списка
- **Zod** — валидация форм
- **json-server (`db.json`)** — локальный REST API для разработки

## Локальный запуск
1. Установите зависимости:
   ```bash
   npm install
   ```
2. Запустите локальный сервер базы данных (в первом терминале):
   ```bash
   npm run server
   ```
3. Запустите приложение (во втором терминале):
   ```bash
   npm run dev
   ```

