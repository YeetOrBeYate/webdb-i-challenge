const knex = require("../dbConfig.js")


const getAll=()=>{
   return knex
    .select('*')
    .from("accounts")
    
}

const getById=(id)=>{

    return knex
    .select('*')
    .from('accounts')
    .where("id", id)
    .first()

}

function AddAccount(account){

    return knex('accounts')
    .insert(account, "id")

}

const EditAccount= async (id,changes)=>{
    await knex("accounts")
    .update(changes)
    .where("id", id)

    return getById(id)
}

module.exports = {
    getAll,
    getById,
    AddAccount,
    EditAccount
}