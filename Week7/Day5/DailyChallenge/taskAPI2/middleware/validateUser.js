module.exports = {
        validateRegister: (req, res, next) => {
            const { name, lastname, email, username, password } = req.body;
            if (!name || !lastname || !email || !username || !password) {
                return res.status(400).json({ message: "All fields are required" });
            }
            next();
        },
    
        validateLogin: (req, res, next) => {
            const { username, password } = req.body;
            if (!username || !password) {
                return res.status(400).json({ message: "Username and password required" });
            }
            next();
        }
    };