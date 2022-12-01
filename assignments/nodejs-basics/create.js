const fs = require('fs');

const createFile = () => {
    const path = 'fresh.txt'
    try {
        if(!fs.exists(`./${path}`)){
            fs.writeFile(`./${path}`, "I am fresh and young")
        }
    } catch (e) {
        throw Error("FS operation failed")
    }
};

createFile();