const router = require("express").Router()
const { Group, validate } = require("../models/group")

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body)
        if (error){
            return res.status(400).send({ message: error.details[0].message })
        }
        await new Group({ ...req.body}).save()
        res.status(201).send({ message: "Utworzono grupę" })
    } catch (error) {
        res.status(500).send({ message: "Wewnętrzny błąd serwera" })
    }
})

router.get('/', async(req, res) => {
    try{
        const groups = await Group.find()
        res.send(groups)
    }catch(error){
        res.status(500).send({ message: "Wewnętrzny błąd serwera" })
    }
});

router.get('/:id', async(req, res) => {
    try{
        const groups = await Group.find()
        res.send(groups)
    }catch(error){
        res.status(500).send({ message: "Wewnętrzny błąd serwera" })
    }
});

router.delete('/:id', async(req,res) => {
    const id = req.params.id

    try {
        await Group.findByIdAndDelete(id).exec()
        res.status(201).send({ message: "Usunięto grupę" })
    }catch(error){
        res.status(500).send({ message: "Wewnętrzny błąd serwera" })
    }
});

module.exports = router
