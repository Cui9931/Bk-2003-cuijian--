// 导入 
const express = require("express");

// 创建实例

const app = express();

const csbodyparse = require("./get/get.js");
app.use(csbodyparse);



app.listen(8080, () => {
    console.log("server is running at http://127.0.0.1:8080");
});




