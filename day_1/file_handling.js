const fs=require("fs");


function readFileContent(filePath) {
    const file=fs.readFile(filePath,"UTF-8",(err,res)=>{
        if(err)
        {
            console.log(err)    
        }
        else
        {
            console.log("File Content:")
            console.log(res)
        }
    })
}

readFileContent("text.txt");