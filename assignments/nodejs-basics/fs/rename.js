import fs from "fs"
import exists from "./exists.js";

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