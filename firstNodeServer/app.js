
const http = require('http'); 

 const server = http.createServer((req , res)=>{ 
  console.log(req);  
  process.exit();   // to stop event loop
}); 
 
const   PORT = 3001; 
server.listen(PORT , ()=>{
  console.log(`Server listening http://localhost:${PORT}`); 
}); 