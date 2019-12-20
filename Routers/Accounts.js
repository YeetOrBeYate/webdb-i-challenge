const express = require('express');
const Queries = require("../data/Queries/Queries.js")
const router = express.Router();

const middle = require("../middle/restrict.js");

router.get("/", (req,res)=>{
    Queries.getAll()
    .then(accs=>{
        res.status(200).json({accs})
    })

    .catch((err)=>{
        res.status(500).json({err})
    })
})

router.get('/:id', (req,res)=>{

    const id = req.params.id;

    Queries.getById(id)
    .then((account)=>{
        res.status(201).json({account})
    })
    .catch((err)=>{
        res.status(500).json({err})
    })
})

router.post("/", (req,res)=>{
    const account = req.body;
    Queries.AddAccount(account)
    .then((account)=>{
        res.status(200).json({account})
    })
    .catch((err)=>{
        res.status(500).json({err})
    })
})

router.put("/:id", middle.restrictBudget, (req,res)=>{
    const body = req.body;
    const id = req.params.id;
    Queries.EditAccount(id,body)
    .then((account)=>{
        res.status(201).json({account})
    })
    .catch((err)=>{
        res.status(505).json({err})
    })


})

router.delete("/:id", (req,res)=>{
    const id = req.params.id;
    Queries.DeleteAccount(id)
    .then((yes)=>{
        res.status(201).json({message: "Account deleted"})
    })
    .catch((err)=>{
        res.status(500).json({err})
    })
})

module.exports = router;