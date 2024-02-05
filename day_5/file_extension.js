const path=require('path')

function checkFileExtension(filePath, expectedExtension) {
    const expected=path.extname(filePath);
    if(expected===expectedExtension)
    {
        console.log(`File has the expected extension: ${expectedExtension}`);
    }
    else{
        console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${expected}`);
    }
}

//TESTCASES
checkFileExtension('test-files/file1.txt', '.txt');
checkFileExtension('test-files/image.png', '.jpg');


