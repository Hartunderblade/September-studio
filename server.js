require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const pool = require('../../../OneDrive/Рабочий стол/September-app/server/db.js');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


app.post('/auth/register', async (req, res) => {
    const { name, email, password, confirmPassword, agreement } = req.body;

    console.log("Полученные данные:", req.body);

    if (!name || !email || !password || !confirmPassword || agreement !== true) {
        return res.status(400).json({ message: "Заполните все поля и подтвердите согласие" });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Пароли не совпадают" });
    }

    try {
        const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: "Почта уже занята" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query(
            "INSERT INTO users (name, email, password, agreement) VALUES ($1, $2, $3, $4)",
            [name, email, hashedPassword, agreement]
        );

        res.status(201).json({ message: "Регистрация успешна, перейдите к входу" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ошибка сервера" });
    }
});

// Вход пользователя
app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Введите почту и пароль" });
    }

    try {

        const userQuery = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );

        if (userQuery.rows.length === 0) {
            return res.status(400).json({ message: "Пользователь не найден" });
        }

        const user = userQuery.rows[0];

        // Проверяем пароль
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: "Неверный пароль" });
        }

        // Генерируем JWT-токен
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        );

        res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: "Ошибка сервера" });
    }
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});