import fs from "fs"
import exists from "./exists.js";

async function readLines() {
    const existFrom = await exists("./fileToRead.txt");

    if(existFrom){
        fs.readFile('./fileToRead.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(data);
        });
    } else {
        throw new Error("FS operation failed")
    }
}

readLines()