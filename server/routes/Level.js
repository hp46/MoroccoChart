const express = require("express");
const router = express.Router();
const { Levels } = require('../models')

router.get("/:infoId", async (req, res) => {
    const infoId = req.params.infoId;
    //find by primary Key
    const levels = await Levels.findAll({where: {InfoId: infoId}});
    res.json(levels)
})

router.post("/", async (req, res) =>{
    try{
        const lev = req.body;
        await Levels.create(lev);
        res.json(lev)
    }
    catch(error)
    {
        res.send(error)
    }
})

router.delete("/:levelId", async (req, res) => {
    try{
        const levelId = req.params.levelId
        await Levels.destroy({
            where: {
                id:levelId
            }
    
        })
    }
    catch(error)
    {
        res.send(error)
    }
})
module.exports = router; 