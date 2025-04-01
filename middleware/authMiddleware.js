const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Нет доступа" });
    }

    try {
        const decoded = jwt.verify(token, "secretkey"); // Используем тот же ключ
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Неверный токен" });
    }
};