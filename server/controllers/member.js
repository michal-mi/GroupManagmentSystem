export const getMembers = async (req, res)=> {
    try {
        const allMembers = await member.find();
        res.status(200).json(allMembers);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createMember = (req, res)=> {
    res.send('Router is working');
}