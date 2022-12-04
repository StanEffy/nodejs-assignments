const fs = require('fs')

async function exists (path) {
    try {
        await fs.promises.access(path)
        return true
    } catch {
        return false
    }
};

async function copy() {
    const existFrom = await exists("./files");
    const existTo = await exists("./files_copy");

    if(existFrom && !existTo){
        fs.mkdirSync("files_copy")
        await fs.cp("./files", "./files_copy", {recursive: true},(err) => console.log(err));
    } else {
        throw new Error("FS operation failed")
    }
}
copy()