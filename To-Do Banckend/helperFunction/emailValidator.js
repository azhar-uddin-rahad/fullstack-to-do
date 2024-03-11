const emailValidator=(email)=>{
    const pattern=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    // email validator return: if it's wrong email that time it's return false if it's right email it's return a truecls 
    // console.log(pattern.test(email))
    return pattern.test(email)
}

module.exports =emailValidator