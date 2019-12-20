
const restrictBudget = (req,res,next)=>{
    const budget = req.body.budget;
   
    if(budget === null){
        res.status(401).json({message: "budget is not a number"})
    }else{
        if(typeof budget === "number"){
            console.log("the budget is a number", budget)
            next();
        }
    }
}

module.exports = {
    restrictBudget
}