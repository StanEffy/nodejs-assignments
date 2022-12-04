import fs from "fs"
import exists from "./exists.js";

async function list() {
    const existFrom = await exists("./files");

    if(existFrom){
        fs.readdir("./files", function (err, files) {
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            }
            files.forEach(function (file) {
                console.log(file);
            });
        });
    } else {
        throw new Error("FS operation failed")
    }
}

list()