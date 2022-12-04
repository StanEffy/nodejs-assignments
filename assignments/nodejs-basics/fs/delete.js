import fs from "fs"
import exists from "./exists.js";


async function deleteMe() {
    const exist = await exists("fileToRemove.txt");

    if(exist){
        await fs.unlink("fileToRemove.txt", (e) => console.log(e))
    } else {
        throw new Error("FS operation failed")
    }
}

deleteMe();