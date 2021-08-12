
exports.RegistorUser =(req,res)=>{
    try{

        if(!req.body){
            res.status(406).json({err:'you have to fill the registration form'});
            return
        }

        let{email,password,cheakpassword,username}=req.body

        if(!email||!password||!cheakpassword)
            return res.status(406).json({err:'not all fields have'})
        if(cheakpassword.length<8)
           return res.status(406).json({err:'the password need to be at least 8 character long'});
        if(password!==cheakpassword)
           return res.status(406).json({err:'password must be same for varification'});

        res.json({email,password,cheakpassword,username})
    }catch(err){
        res.status(500).json({err:error.message||'enter while regitration'})
    }
    
};
exports.login =(req,res)=>{
  try{ 
      if(!req.body)
      {
         res.status(406).json({err:'you have to fill the email and password'});
        return
      }
     const{email,password}=req.body
      if(!email||!password){
      return res.status(406).json({err:'not all field have been entred'});
         }
     }
  catch(err){
       res.status(500).json({err:error.message||'error while login'});
  }
};