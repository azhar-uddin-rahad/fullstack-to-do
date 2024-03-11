const secureApi=(req,res,next)=>{
    console.log(req.headers.authorization)
 
    if(req.headers.authorization ==    process.env.SECURE_API){
        next()
    }
    else{
        res.send('validation error')
    }
}
module.exports=secureApi
