const http = require('http');
const fs = require('fs');




const port =8700;
const app = http.createServer((req,res)=>{
        if(req.url=='/')
        {
            fs.readFile('./public/index.html',(err,html)=>{
                res.writeHead(200,{"Content-Type":"UTF-8"});
                res.end(html);
            });
            
        }
        else if(req.url=='/about')
        {
            fs.readFile('./public/about.html',(err,html)=>{
                res.writeHead(200,{"Content-Type":"UTF-8"});
                res.end(html);
            });
            
        }
        else if(req.url=='/contact')
        {
            // var a= __dirname+"/public";
            fs.readFile('./public/contact.html',(err,html)=>{
                res.writeHead(200,{"Content-Type":"UTF-8"});
                res.end(html);
            });
            
        }
        else
        {
            fs.readFile('./public/error.html',(err,html)=>{
                res.writeHead(200,{"Content-Type":"UTF-8"});
                res.end(html);
            });
            
        }

})


app.listen(port,()=>{
    console.log(`server is running ${port}`);
})
