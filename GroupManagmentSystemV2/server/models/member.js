const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const Joi = require("joi")
const memberSchema = new mongoose.Schema({
    groupID: {type: String, required: false},
	name: {type: String, required: true},
	secondName: {type: String, required: false},
	lastName: {type: String, required: true},
	dateOfBirth: {type: Date, required: true},
	function: {type: String, required: false},
	rank: {type: String, required: true},
	phoneNumber: {type: String, required: false},
	email: {type: String, required: false},
	PESEL: {type: Number, required: true},
	dateOfJoining: {type: Date , required: true},
	ADstreet: {type: String, required: true},
	ADhouseNumber: {type: String, required: true},
	ADflatNumber: {type: String, required: false},
	ADcity: {type: String, required: true},
	ADzipCode: {type: String, required: true},
	P1name: {type: String, required: true},
	P1lastName: {type: String, required: true},
	P1phoneNumber: {type: String, required: true},
	P1email: {type: String, required: true},
	P2name: {type: String, required: false},
	P2lastName: {type: String, required: false},
	P2phoneNumber: {type: String, required: false},
	P2email: {type: String, required: false}
})

memberSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    })
    return token
}

const Member = mongoose.model("Member", memberSchema)

const validate = (data) => {
    const schema = Joi.object({
        groupID: Joi.string().optional().allow('').label("Group ID"),
        name: Joi.string().required().label("First Name"),
        secondName: Joi.string().label("Second Name"),
        lastName: Joi.string().required().label("Last Name"),
        dateOfBirth: Joi.date().required().label("Date of Birth"),
        function: Joi.string().optional().allow('').label("Function"),
        rank: Joi.string().required().label("Rank"),
        phoneNumber: Joi.string().optional().allow('').label("Phone Number"),
        email: Joi.string().optional().allow('').label("Email"),
        PESEL: Joi.string().required().label("Pesel"),
        dateOfJoining: Joi.date().required().label("Date Of Joining"),
        ADstreet: Joi.string().required().label("Street"),
        ADhouseNumber: Joi.string().required().label("House Number"),
        ADflatNumber: Joi.string().optional().allow('').label("Flat number"),
        ADcity: Joi.string().required().label("City"),
        ADzipCode: Joi.string().required().label("Zip Code"),
        P1name: Joi.string().required().label("Parent1 Name"),
        P1lastName: Joi.string().required().label("Parent1 Last Name"),
        P1phoneNumber: Joi.string().required().label("Parent1 Phone Number"),
        P1email: Joi.string().required().label("Parent1 Email"),
        P2name: Joi.string().optional().allow('').label("Parent2 Name"),
        P2lastName: Joi.string().optional().allow('').label("Parent2 Last Name"),
        P2phoneNumber: Joi.string().optional().allow('').label("Parent2 Phone Number"),
        P2email: Joi.string().optional().allow('').label("Parent2 Email"),
    })
    return schema.validate(data)
}

module.exports = { Member, validate }
    
