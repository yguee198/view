const User = require("../Model/User");

exports.createUser = (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.redirect("/?error=All fields are required");
    }

    User.create(username, email, password, (err, results) => {
        if (err) {
            console.error(err);
            // return res.status(500).json({ error: "Database error" });
        }

        // Send a success message instead of redirecting
        // res.status(201).redirect("/?success=Account created successfully!");
        res.status(201).redirect("/?success= Account created successyfl");
    });
};

// exports.signinUser = (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ error: "Email and password are required" });
//     }

//     User.findByEmail(email, (err, results) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ error: "Database error" });
//         }

//         if (results.length === 0) {
//             return res.status(401).json({ error: "Invalid email or password" });
//         }

//         const user = results[0];

//         if (user.password !== password) {
//             return res.status(401).json({ error: "Invalid email or password" });
//         }

//         res.status(200).send({
//             message: "Sign in successful!",
//             userId: user.id,
//             username: user.username
//         });
//     });
// };
exports.create = (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) {
        return res.status(400).json({error:"All fields are required"});
    }
    User.findByEmail(email, (err, results)=>{
        if(err) return res.status(500).json({error:"Server error"});
        if(results === 0) return res.status(401).json({error:"invalid credentials"});
        const user = results[0];
        if(user.password !== password) {
            return res.status(401).json({error:"Invalid password"});
        }
        res.status(200).send({
            message: "Sign in successful!",
            userId: user.id,
            username: user.username,
        });
    });

};

exports.getAllUsers = (req, res) => {
    User.findAll((err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Database error" });
        }
        res.render("user", { users: results });
    });
};
