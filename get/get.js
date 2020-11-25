const fs = require("fs");
const csbodyparse = (req,res,next)=>{
    let ip = req.ip;
    let method = req.method;
    let url = req.url;
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth()+1;
    let day = time.getDate();
    // time = time.toLocaleString();
    let bbh = req.headers["user-agent"];
    let filename = `${year}${month}${day}`
    console.log(filename);
    let file = `${ip}${method}${url}${time}${bbh}`;
    console.log(file);
   
    fs.appendFile(`./log/${filename}.log`,`${ip}${method}${url}${time}${bbh}`,(err)=>{ 
        next();
    });
    
     
};

module.exports = csbodyparse;