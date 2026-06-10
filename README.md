# Porterfly — сайт грузоперевозок

React + Tailwind CSS лендинг в стиле [porterfly.kg](https://porterfly.kg).

## Структура проекта

```
porterfly/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx            # Точка входа
    ├── App.jsx             # Корневой компонент
    ├── index.css           # Tailwind directives
    ├── data/
    │   └── index.js        # Все данные (услуги, тарифы, отзывы, контакты)
    └── components/
        ├── NavBar.jsx      # Шапка + мобильное меню
        ├── Hero.jsx        # Главный экран
        ├── Services.jsx    # Услуги (4 карточки)
        ├── Process.jsx     # Как работаем (4 шага)
        ├── Pricing.jsx     # Тарифы (3 плана)
        ├── Reviews.jsx     # Отзывы (слайдер)
        ├── Contact.jsx     # Форма заявки + контакты
        ├── Footer.jsx      # Подвал
        ├── FloatingCTA.jsx # Плавающие кнопки (только мобиль)
        └── StarRating.jsx  # Компонент звёзд рейтинга
```

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:5173](http://localhost:5173)

## Сборка для продакшена

```bash
npm run build
```

Результат в папке `dist/`.

## Кастомизация

Все данные сайта (телефон, услуги, тарифы, отзывы) находятся в одном файле:

```
src/data/index.js
```

Измените `PHONE`, `WA_LINK` и остальные данные под свой бизнес.
