const express=require("express");
const app=express();
const parser=require("body-parser")
app.use(parser.json());
let UserData=require("./schema");
const queryString=require("querystring");

require("./conn");

app.post("/insert",(req,res)=>{
    const {name,email}=req.body;
    const user=UserData({name,email})
    user.save();


    res.status(200).json({message:"data inserted"});
})
app.get("/users",async(req,res)=>{
 try{
     
     var {skip, limit,selectionKey,searchKey,searchValues}= req.query;
     
     
    //  if(selectionKey.length>1 && (selectionKey!="name" && selectionKey!="email")){
        
    //     var showName=1;
    //      var showEmail=1; 
    //      console.log(selectionKey!="name");
    //     console.log(selectionKey!="email");
    //  }
    //  else{
    //      if(selectionKey==="name"){
    //          showName=1;
    //          showEmail=0;
    //      }
    //      else{
    //          showEmail=1;
    //          showName=0
    //      }
    //  }
     
     
    
        // if(selectionKey.length===4){
        //      showName=1;
        //      showEmail=0;
        //  console.log("run")
        //     }
        // else if(selectionKey.length===5)
        // { 
        //      showEmail=1;
        //      showName=0;
        //      console.log("run2")
        //  }
        //  else{

        //     showEmail=1;
        //     showName=1;
        //     console.log("run3")
        //  }

     
     
    
    
    
    
    
    // console.log(showName);
    //  console.log(showEmail);
    //  console.log(selectionKey.length);
     
     
     
 if(!skip){
     skip=1;
 }
 if(!limit){
     limit=10;
 }


// console.log(selectionKeyValues);
 const page =parseInt(limit);
 const size=(skip-1)*limit;

 const users=await UserData.find({[searchKey[0]]: {$regex:searchValues},[searchKey[1]]: {$regex:searchValues}},{_id:1}).limit(page).skip(size);

// const users=await UserData.find({[searchKey[0]]: {$regex:searchValues},[searchKey[1]]: {$regex:searchValues}},findSelectionValues()).limit(page).skip(size);

res.status(200).json(users);
 }catch(e){
     console.log(e);
 }
});


app.listen(2000,()=>{
    console.log("Run on port 2000");
});