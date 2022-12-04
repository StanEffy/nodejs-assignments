import fs from "fs";

async function exists (path) {
    try {
        await fs.promises.access(path)
        return true
    } catch {
        return false
    }
};

export default exists;