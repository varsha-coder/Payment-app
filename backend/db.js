const mongoose = require('mongoose') 
async function main(){
    await mongoose.connect("mongodb+srv://nvarshinirk:nvarshinirk@cluster0.ly63pzl.mongodb.net/");
}

main().catch(err => console.log(err));
//mongodb+srv://nagavarshini:nagavarshini@cluster0.acmpk7e.mongodb.net/
//mongodb+srv://Nvarshinitechnologies:nagavarshini@cluster0.nlilmqn.mongodb.net/

// creating schema for users
 const userSchema= new mongoose.Schema({
    username:{
       type:String,
       required:true,
       unique:true,
       trim:true,
       minLength:5,
       maxLength:30,
    },
    firstName:{
        type:String,
        required:true,
       
    },
    lastName:{
        type:String,
        required:true,
       
    },
    password:{
        type:String,
       required:true,
       minLength:8


    }

 })

const accountsSchema=new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true

    },

    balance:{
        type:Number,
        required:true
    }
 })
 
  //creating model users

  const User= mongoose.model('User',userSchema);


  const Account=mongoose.model('Account',accountsSchema);


module.exports={
    User,Account
};


