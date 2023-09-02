const user = require('../model/User.model')
const jwt = require('jsonwebtoken');

class userController {
    static async checkForExistance(req, res) {
        const existance = await user.findOne({ email: req.body.email })
        console.log(existance)
        if (existance != null) {
            res.send({ msg: "user already exist" })
        } else {
            const result = await user.create(req.body)
            res.send({ data: result })
        }
    }


    static async updatepasswordController(req, res) {
        test(req.body)
        const existance = await user.findOne({ email: req.body.email })
        if (req.body.hasOwnProperty('oldPassword')) {
            if (req.body.oldPassword == existance.password) {
                let update = await updateUserByEmail({ email: req.bodyemail, password: req.body.password })
            }
        }
        if (existance) {
            let update = await updateUserByEmail(req.body)
            res.send({ update, success: true, msg: "password changed" })
        } else {
            res.send({ mgs: "User not exiest", success: false })
        }

    }

    static async deleteController(req, res) {
        const existance = await user.findOne({ email: req.body.email })
        if (existance != null) {
            const result = await user.findByIdAndDelete({ _id: req.body.id })
            res.send({ result })
        } else {
            res.send("user not exist")
        }
    }

    static async loginComtroller(req, res) {
        console.log("45===>",req.body)
        const existance = await user.findOne({ email: req.body.email })
        if (req.body.hasOwnProperty('password')) {
            if (req.body.password == existance.password) {
                console.log("49===>",req.body,existance)
                // const token = jwt.sign(existance, 'shhhhh');
                const token=await jwt.sign(
                    {name:existance.name,email:existance.email},
                    'secret', { expiresIn: '1h' });
                console.log("49===>",token)
                res.send({name:existance.name,email:existance.email,token:token})
            }
        }
    }

}

const updateUserByEmail = async (data) => {
    return await user.findOneAndUpdate({ email: data.email }, { ...data });
}

const test = (data) => {
    console.log("41===>", data)
}

module.exports = userController

