import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
   if (!token) return res.status(401).json({ message: "Token tidak ditemukan" });

    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403);
        req.userId = decoded.userId;  // simpan userId dari token
        next();
    });
};
