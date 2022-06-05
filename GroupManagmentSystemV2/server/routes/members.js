const router = require("express").Router()
const { Member, validate } = require("../models/member")

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body)
        if (error) {
            return res.status(400).send({ message: error.details[0].message })
        }
        await new Member({ ...req.body }).save()
        res.status(201).send({ message: "Utworzono członka" })
    } catch (error) {
        res.status(500).send({ message: "Wewnętrzny błąd serwera" })
    }
})

router.post("/:id", async (req, res) => {
    const members = await Member.findById(req.params.id)
        .then(members => {
            members.groupID = req.body.groupID,
            members.name = req.body.name,
            members.secondName = req.body.secondName,
            members.lastName = req.body.lastName,
            members.dateOfBirth = Date.parse(req.body.dateOfBirth),
            members.function = req.body.function,
            members.rank = req.body.rank,
            members.phoneNumber = req.body.phoneNumber,
            members.email = req.body.email,
            members.PESEL = req.body.PESEL,
            members.dateOfJoining = Date.parse(req.body.dateOfJoining),
            members.ADstreet = req.body.ADstreet,
            members.ADhouseNumber = req.body.ADhouseNumber,
            members.ADflatNumber = req.body.ADflatNumber,
            members.ADcity = req.body.ADcity,
            members.ADzipcode = req.body.ADzipcode,
            members.P1name = req.body.P1name,
            members.P1lastName = req.body.P1lastName,
            members.P1phoneNumber = req.body.P1phoneNumber,
            members.P1email = req.body.P2email,
            members.P2name = req.body.P2name,
            members.P2lastName = req.body.P2lastName,
            members.P2phoneNumber = req.body.P2phoneNumber,
            members.P2email = req.body.P2email,
            members.save()
            .then(() => res.json('Group updated successfuly!'))
            .catch(err => res.status(400).json('Error: '+err));
                
        })
        .catch(err => res.status(400).json('Error: '+err));
});

router.get('/', async (req, res) => {
    try {
        const members = await Member.find()
        res.send(members)
    } catch (error) {
        res.status(500).send({ message: "Wewnętrzny błąd serwera" })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const members = await Member.find()
        res.send(members)
    } catch (error) {
        res.status(500).send({ message: "Wewnętrzny błąd serwera" })
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        await Member.findByIdAndDelete(id).exec()
        res.status(201).send({ message: "Usunięto członka" })
    } catch (error) {
        res.status(500).send({ message: "Wewnętrzny błąd serwera" })
    }
});

module.exports = router
