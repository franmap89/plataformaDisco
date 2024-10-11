
const express = require("express")

const router = express.Router() 

router.get('/Users/:id', (req, res) => {
    console.log(reg.params)
    const uid = req.params.uid
    
    const filtro = usuarios.filter((usuarios)=>usuarios.uid === uid)
    
    res.status(200).send(filtro)
  })

  router.get('/Albumes/:Aid', (req, res) => {
    console.log(reg.params)    
    const Aid = req.params.Aid
    
    const filtro = albumes.filter((albumes)=>albumes.Aid === Aid)
    
    res.status(200).send(filtro)
  })


module.exports = router