import { makeRequest } from "./operations.js";

async function start() {
    const prompt = process.argv[2];
    await makeRequest(prompt);
    if (!prompt) {
        console.log("Ingresa un prompt.")
    } else {

    }
}

 await start();