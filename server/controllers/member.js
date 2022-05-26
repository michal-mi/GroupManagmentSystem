export const getMembers = async (req, res)=> {
    try {
        const allMembers = await member.find();
        res.status(200).json(allMembers);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createMember = (req, res)=> {
    const member = req.body;

    const newMember = new member(member);

    try {
        await newMember.save();
        res.status(201).json(newMember);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}