const router = require("express").Router()
const { Member, validate } = require("../models/member")

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body)
        if (error){
            return res.status(400).send({ message: error.details[0].message })
        }
        await new Member({ ...req.body}).save()
        res.status(201).send({ message: "Utworzono członka" })
    } catch (error) {
        res.status(500).send({ message: "Wewnętrzny błąd serwera" })
    }
})

router.get('/', async(req, res) => {
    try{
        const groups = await Member.find()
        res.send(groups)
    }catch(error){
        res.status(500).send({ message: "Wewnętrzny błąd serwera" })
    }
});

router.delete('/:id', async(req,res) => {
    const id = req.params.id

    try {
        await Member.findByIdAndDelete(id).exec()
        res.status(201).send({ message: "Usunięto członka" })
    }catch(error){
        res.status(500).send({ message: "Wewnętrzny błąd serwera" })
    }
});

module.exports = router
