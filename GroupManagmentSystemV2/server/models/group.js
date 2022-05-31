const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const Joi = require("joi")
const groupSchema = new mongoose.Schema({
    name: {type: String, required: true},
    dateOfCreation: {type: Date, required: true},
    description: {type: String, required: false},
})

groupSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    })
    return token
}

const Group = mongoose.model("group", groupSchema)

const validate = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().label("Name"),
        dateOfCreation: Joi.date().required().label("Date Of Creation"),
        description: Joi.string().optional().allow('').label("Description"),
    })
    return schema.validate(data)
}

module.exports = { Group, validate }
    
