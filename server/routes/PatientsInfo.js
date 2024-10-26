const express = require("express");
const router = express.Router();
const {Info} = require('../models')


router.get("/", async (req, res) => {
    //Go through table and generate sql to select
    const listOfInfo = await Info.findAll()
    res.json(listOfInfo)
});

router.get('/byId/:id', async (req, res) => {
    try{
        const id = req.params.id;
        //find by primary Key
        const post = await Info.findByPk(id);
        res.json(post)
    }
    catch(error)
    {
        res.send(error)
    }
})  



router.post("/", async (req, res) =>{
    try{
        const post = req.body;
        await Info.create(post);
        res.json(post)
    }
    catch(error)
    {
        res.send(error)
    }
})

router.delete("/:infoId", async (req, res) => {
    try{
        const infoId = req.params.infoId
        await Info.destroy({
            where: {
                id:infoId
            }
    
        })
    }
    catch(error)
    {
        res.send(error)
    }
})



module.exports = router