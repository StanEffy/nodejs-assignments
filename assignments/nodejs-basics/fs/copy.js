import fs from "fs"
import exists from "./exists.js";

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