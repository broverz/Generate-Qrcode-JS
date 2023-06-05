console.clear();

const qc = require("qrcode");
const prompt = require("prompt-sync")({ sigint: true });

const info = prompt("Enter Message or Link Website > ");

function generaterandomText(length) {
    const character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
        const randomMain = Math.floor(Math.random() * character.length);
        result += character.charAt(randomMain);
    }

    return result;
}

function generateQrcode(data) {
    const randomText = generaterandomText(10);

    const options = {
        errorCorrectionLevel: "H",
        type: "image/png",
        quality: 0.92,
        margin: 1
    }

    qc.toFile("./images/"+randomText+".png", data, options, (err) => {
        if (err) throw err;
        console.clear();
        console.log("Successful, Qrcode is > images/" + randomText + ".png");
    });
}

generateQrcode(info);