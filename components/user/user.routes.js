const express = require('express');
const router = express.Router();

router.get('/',function/(req,res,next){
	ComponentController.whatever(req.user)
})// o llamar movidas

module.exports = router;