const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 60 saniyelik süre kontrolü
    const now = Math.floor(Date.now() / 1000); // saniye cinsinden
    const tokenAge = now - decoded.iat;
    if (tokenAge > 60) {
      return res.status(401).json({ error: 'QR kod süresi dolmuş. Yeniden okutun.' });
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = authMiddleware;
