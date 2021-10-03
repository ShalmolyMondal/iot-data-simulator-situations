const router = require("express").Router();
const Situation = require("../../models/Situation");


router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const situationRemoved = await Situation.deleteOne({ "_id": id});
        res.status(200).json(situationRemoved);
    } catch (err) {
        res.json({message: err});
    }
    
});

module.exports = router;
