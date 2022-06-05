const router = require("express").Router()
const { Group, validate } = require("../models/group")
const { Member } = require("../models/member")

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body)
        if (error) {
            return res.status(400).send({ message: error.details[0].message })
        }
        await new Group({ ...req.body }).save()
        res.status(201).send({ message: "Utworzono grupę" })
    } catch (error) {
        res.status(500).send({ message: "Wewnętrzny błąd serwera" })
    }
})

router.post("/:id", async (req, res) => {
    const groups = await Group.findById(req.params.id)
        .then(groups => {
            try {
                groups.name = req.body.name,
                    groups.dateOfCreation = Date.parse(req.body.dateOfCreation),
                    groups.description = req.body.description,
                    groups.save()
                res.status(201).send({ message: "Grupa edytowana pomyślnie!" })
            } catch (error) {
                res.status(500).send({ message: "Wewnętrzny błąd serwera" })
            }
        })
});

router.get('/', async (req, res) => {
    try {
        const groups = await Group.find()
        res.send(groups)
    } catch (error) {
        res.status(500).send({ message: "Wewnętrzny błąd serwera" })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const groups = await Group.find()
        res.send(groups)
    } catch (error) {
        res.status(500).send({ message: "Wewnętrzny błąd serwera" })
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const members = await Member.find()
    for (var i = 0; i < members.length; i++) {
        if (members[i].groupID === id) {
            var memberID = members[i]._id
            await Member.findByIdAndDelete(memberID).exec()
        }
    }
    try {
        await Group.findByIdAndDelete(id).exec()
        res.status(201).send({ message: "Usunięto grupę" })
    } catch (error) {
        res.status(500).send({ message: "Wewnętrzny błąd serwera" })
    }
});



module.exports = router
