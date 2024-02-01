const fs=require("fs");

function writeToFile(filePath, content) {
    const file=fs.writeFile(filePath, content,(err,res)=>{
        if(err) {
            console.log(err);
        }
        else{
            
            console.log(`Data Written to: ${filePath}`);
        }
    });

}



writeToFile("text1.txt","Hi! this is a new File")