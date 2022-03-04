const { Router } = require('express');
const router = Router();

router.get('/', (req,res) =>{
    res.send('Hola!, esto es un router de express! --!--')
});

module.exports = router;