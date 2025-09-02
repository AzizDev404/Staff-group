const authAdmin = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).send({ message: 'Authorization header missing' });
    }

    const [type, credentials] = authHeader.split(' ');
    if (type !== 'Basic' || !credentials) {
        return res.status(401).send({ message: 'Invalid authorization format' });
    }

    const decodedCredentials = Buffer.from(credentials, 'base64').toString('utf-8');
    const [username, password] = decodedCredentials.split(':');

    const adminName = process.env.ADMIN_NAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (username === adminName && password === adminPassword) {
        next();
    } else {
        return res.status(403).send({ message: 'Forbidden: Invalid credentials' });
    }
};

module.exports = authAdmin;