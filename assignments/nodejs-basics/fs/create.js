const { promises: Fs } = require('fs')
const fs = require('fs')

const path = "./fresh.txt"

async function exists (path) {
    try {
        await Fs.access(path)
        return true
    } catch {
        return false
    }
};

async function createFile() {
    const exist = await exists(path);

    if(!exist){
        fs.writeFile(path, 'I am fresh and young', 'utf8', () => {});
    } else {
        throw new Error("FS operation failed")
    }
}

createFile();