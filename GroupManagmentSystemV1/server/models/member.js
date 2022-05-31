import mongoose from "mongoose";

const memberSchema = mongoose.Schema({
    ID: UUID(),
	groupID: UUID(),
	name: String,
	secondName: String,
	lastName: String,
	age: Int16,
	function: String,
	rank: String,
	phoneNumber: String,
	email: String,
	PESEL: Int16,
	dateOfJoining: Timestamp,
	address:{
		street: String,
		houseNumber: String,
		flatNumber: String,
		city: String,
		zipCode: String
	},
	parent1:{
		name: String,
		lastName: String,
		phoneNumber: String,
		email: String
	},
	parent2:{
		name: String,
		lastName: String,
		phoneNumber: String,
		email: String
	}
});

const member = mongoose.model('member', memberSchema);

export default member;