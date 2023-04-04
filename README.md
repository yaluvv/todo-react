# Тестовое приложение "Todo React"

#### Технологии проекта: Vite, React, Zustand, Material UI, Axios.

##### Для старта выполните следующие действия:

- Скачайте или клонируйте репозиторий
- Установите зависимости
- Зарегистрируйте проект в firebase
- Введите API_KEY проекта в файл .env.development
- Введите ссылку Realtime Database в ApiEndpoint файла config.json
- Изменить в services/auth.service.js - "key: 'AIzaSyBATSgAgSKP5yBcQOaPAU-THeRurUGZezk'" на "key: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY"
- Перенести все импорты через "import.meta.env.[название свойства]" в src/firebase.js из .env.development
- Запустите проект с помощю команды npm run dev
