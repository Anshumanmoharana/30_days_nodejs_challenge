const path=require('path')
function resolvePath(relativePath)
{
    console.log(path.resolve(relativePath));
}
resolvePath('../project/folder/file.txt');
resolvePath('nonexistent-folder/file.txt');