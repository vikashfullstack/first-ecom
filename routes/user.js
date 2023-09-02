const router = require("express").Router();

const { checkForExistance,
    updatepasswordController,
    deleteController,
    loginComtroller
} = require("../controller/user.controller");


router.post('/register', async (req, res) => {
    checkForExistance(req, res)
})
router.post('/update', async (req, res) => {
    updatepasswordController(req, res)
})

router.post('/delete', async (req, res) => {
    deleteController(req, res)
})

router.post('/login', async (req, res) => {
    loginComtroller(req, res)
})

module.exports = router;