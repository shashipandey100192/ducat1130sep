const http = require('http');
const fs = require('fs');
const path = require('path');




const port =8700;
const app = http.createServer((req,res)=>{
        if(req.url=='/')
        {
            fs.readFile('./public/index.html',(err,html)=>{
                res.writeHead(200,{"Content-Type":"UTF-8"});
                res.end(html);
            });
            
        }
        else if(req.url.match("\.css$"))
        {
            var mypath = path.join(__dirname,"public",req.url);
            // console.log(mypath);
            var readpath = fs.createReadStream(mypath,"utf-8");
            res.writeHead(200,{"Content-Type":"text/css"});
             readpath.pipe(res);
        }

        else if(req.url.match("\.js$"))
        {
            var mypath = path.join(__dirname,"public",req.url);
            var readpath = fs.createReadStream(mypath,"utf-8");
            res.writeHead(200,{"Content-Type":"text/js"});
             readpath.pipe(res);
            
        }


})


app.listen(port,()=>{
    console.log(`server is running ${port}`);
})
