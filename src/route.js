const router = require("express").Router();

router.post("/bfhl", (req, res) => {
    const request = [...req.body.data];
    const numbers = [];
    const alphabets = [];
    request.map((elem) => {
        if (isNaN(elem) == false) {
            numbers.push(elem);
        } else alphabets.push(elem);
    });
    res.status(200).json({
        "is_success": true,
        "user_id": "Siddharth_10072001",
        "email": "sidhharth0481.cse19@chitkara.edu.in",
        "roll_number": "1910990481",
        "numbers": numbers,
        "alphabets": alphabets
    });
});

module.exports = router;