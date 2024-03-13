const user = require("../Model/User-Model");

const register = async (req, res) => {
    try {
        const { name, email, phone, event, comment } = req.body;

        const EmailExist = await user.findOne({ email });
        if (EmailExist) {
            return res.status(404).json({ msg: "Email Alerady Exist...." })
        }

        const PhoneExist = await user.findOne({phone});
        if(PhoneExist){
            return res.status(400).json({msg:"Phone Number alerady Exists...."})
        }
        
        await user.create({ name, email, phone, event, comment });
        console.log(req.body);
        res.status(200).send({ msg: req.body });
    } catch (error) {
        res.status(404).send({ msg: "page not found" });
    }
}

module.exports = { Controller: { register } };