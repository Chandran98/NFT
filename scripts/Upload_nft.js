const {  File, NFTStorage } = require("nft.storage");
const mime = require("mime");
const fs = require("fs");
const path = require("path");

const NFT_storage_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDA0NUY3Njc1NERiNjI1MDM2MWI4ZDg4ZDg5NGU2NmEwNmY0OTk4ZDUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NDU3NjI3NzkwOCwibmFtZSI6Imtvbm9oYSJ9.hvqNymVKJ_qMoZLsMUEg13t_dUFMyP-PYotDz_cLdqY";

async function filefrompath(filepath) {
    const content = await fs.promises.readFile(filepath);
    const type = mime.getType(filepath);
    return new File([content], path.basename(filepath), { type });


}
async function storenft(imagepath, name, description) {
    const image = await filefrompath(imagepath)
    const nftstorage = new NFTStorage({ token: NFT_storage_key })

    return nftstorage.store({ image, name, description });
}


async function main(imagepath, name, description) {
    // console.log(await storenft(imagepath, name, description))
    return await storenft(imagepath, name, description);
}

if (require.main == module) {
    try {

        main("pol_nft.png", "Polnet", "Aplha NFT in meta")
    } catch (error) {
        console.log("Error while deploy on Mainnet", e);

    }
}

module.exports= main ;