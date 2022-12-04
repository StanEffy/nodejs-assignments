const fs = require('fs')

async function exists (path) {
    try {
        await fs.promises.access(path)
        return true
    } catch {
        return false
    }
};

async function rename() {
    const existFrom = await exists("wrongFilename.txt");
    const existTo = await exists("properFilename.md");

    if(existFrom && !existTo){
        fs.rename("wrongFilename.txt", "properFilename.md", (e) => console.log(e))
    } else {
        throw new Error("FS operation failed")
    }
}
rename()