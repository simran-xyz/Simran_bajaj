const express = require('express');
const app=express();
app.use(express.json());



app.post("/bfhl",async(req, res) => {
    const {data} = req.body;
    const num = [];
    const character = [];
    const characterRegex = /^[a-zA-Z]{1,}$/;
    const numberRegex = /^[0-9]{1,}$/;
    
        data.map((item) => {
            if(numberRegex.test(item)) {
                numArr.push(item);
            } else if(characterRegex.test(item)){
                charArr.push(item);
            }
        });
    
        const result = {
            isSuccess: "true",
            user_id: "simran_singla_29032002",
            email: "simran1155.cse19@chitkara.edu.in",
            roll_number:"1910991155" ,
            numbers: numArr,
            alphabets: charArr
        };
    
        res.status(200).send(result);
    
});

const port = process.env.PORT || 6001;
app.listen(port,()=> {
    console.log(`app running on port ${port}`);
});