import express from "express";

const router = express.Router();


router.post('/', (req, res) => {
    try{
        res.status(200).send('home')
    }
    catch(err){
        console.log(err)
    }
})

export default router;