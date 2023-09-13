const http = require('http');

const port =8700;
const app = http.createServer((req,res)=>{
        if(req.url=='/')
        {
            res.write("<h1>this is nodejs first  routing condition</h1>");
            res.end();
        }
        else if(req.url=='/about')
        {
            res.write(
                `   
                <h1>this is About page</h1>
                <h4>we are creating webside on node.js</h4>
                `);
            res.end();
        }
        else
        {
            res.write(`
                <h1 style="font-size:100px;text-align:center;color:red;">404</h1>
                <h5 style="text-align:center">Not Found Page</h5>
            `);
            res.end();
        }


})


app.listen(port,()=>{
    console.log(`server is running ${port}`);
})
