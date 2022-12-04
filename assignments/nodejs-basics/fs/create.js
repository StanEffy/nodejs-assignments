import fs from "fs"
import exists from "./exists.js";

const path = "./fresh.txt"

async function createFile() {
    const exist = await exists(path);

    if(!exist){
        fs.writeFile(path, 'I am fresh and young', 'utf8', () => {});
    } else {
        throw new Error("FS operation failed")
    }
}

createFile();