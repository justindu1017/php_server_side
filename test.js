// var p1 = new Promise((resolve, reject)=>{
//     x = 1;
//     if(x = 1){
//         resolve("OKKKK");
//     }else{
//         reject("NOOOOO")
//     }
// });

// p1.then((message)=>{
//     console.log("message = "+message);
// })

// var p1 = new Promise((resolve) => {
//   resolve("巨錘瑞斯");
// });

// function p2(hammer) {
//   return new Promise((resolve) => {
//     hammer = hammer + " AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
//     resolve(hammer);
//   });
// }

// p1.then(p2).then((mess)=>{
//     console.log("mess is "+mess);
// })

// p1.then((mess) => {
//   console.log("mess is " + mess);
// });



/*
1.promise若成功，會用then去串接，失敗則catch串接
2.用then的話，裡面會包一個callback，例如:
    var p1 = new Promise((resolve, reject)=>{
        x = 1;
        if(x = 1){
            resolve("OKKKK");
        }else{
            reject("NOOOOO")
        }
    });

    p1.then((message)=>{
        console.log("message = "+message);
    })

3.在下面的例子中，p1為一promise，p2為一以function return出來的promise、並且吃一個參數;
  這邊我們先用一個p1.then(p2)，此時p1 resolve出來的值將會變成p2的參數，第二個then是針對p2的
    var p1 = new Promise((resolve) => {
    resolve("巨錘瑞斯");
    });

    function p2(hammer) {
    return new Promise((resolve) => {
        hammer = hammer + " AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
        resolve(hammer);
    });
    }

    p1.then(p2).then((mess)=>{
        console.log("mess is "+mess);
    })

    // p1.then((mess) => {
    //   console.log("mess is " + mess);
    // });
其輸出為巨錘瑞斯 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA


*/

var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ee_project"
});

con.connect((err) =>{
    if (err) throw err;
    console.log("OKK");
});

var str = "1'='1' OR '1'='1";
var str2 = "AAAbbbbbb";
var str3 = "a');Select * from usert;-- ";


// con.query("  Select * from usert;",(err, query)=>{
//         if (err) throw err;
//         console.log(query);
//     })
con.query("insert into usert (userName, passWord, email) values ('binj', 'AAAbbbbbb', 'wgeak');  Select * from usert; #')",(err)=>{
    if (err) throw err;
    // console.log(query[0]);
})
// con.query("select * from usert where userName = '"+str+"'",(err, query)=>{
//     if (err) throw err;
//     console.log(query);
// })
con.query("#insert into usert (userName, passWord, email) values (?,?,?)",[str,str,str],(err, query)=>{
    if (err) throw err;
    console.log(query);
})


con.end();