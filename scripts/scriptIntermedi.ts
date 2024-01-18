import { ethers } from 'hardhat';
import {
    TimeSquadRyker,
    TimeSquadLuna,
    TimeSquadAria,
    TimeSquadThaddeus,
    TimeSquadCatalogAria,
    TimeSquadCatalogLuna,
    TimeSquadCatalogRyker,
    TimeSquadCatalogThaddeus,
    ItemsAriaArmor,
    ItemsAriaCap,
    ItemsAriaLeftHand,
    ItemsAriaRightHand,
    ItemsLunaArmor,
    ItemsLunaCap,
    ItemsLunaLeftHand,
    ItemsLunaRightHand,
    ItemsRykerArmor,
    ItemsRykerCap,
    ItemsRykerLeftHand,
    ItemsRykerRightHand,
    ItemsThaddeusArmor,
    ItemsThaddeusCap,
    ItemsThaddeusLeftHand,
    ItemsThaddeusRightHand
} from '../typechain-types';

async function main() {


    const contractParentAddresses: { [key: string]: string } = {
        "Aria": "0xaf9e857Cd6c45C78b1be65a3a1c963E125A119Ef",
        "Luna": "0xC5511F67F8456a78faC71146A3d628489509328c",
        "Ryker": "0xFa44e607566213F3A31d9c414F865B15e6E4215c",
        "Thaddeus": "0x262a91e606ab5837354Beb8EF7cCA55964928ff0"
    };

    const contractCatalogAddresses: { [key: string]: string } = {
        "Aria": "0x49aACc2B1adA8bEbfb24A3408B5CD49bF47334cC",
        "Luna": "0xA35A8c6A0C0dA7058d05EA09A9E93A6892614254",
        "Ryker": "0xbDe55A3435C4A4c78879bD12f1aF4Bc9bAa0Ba6c",
        "Thaddeus": "0xD61d383db640032571108665de91dd144cbe36C8"
    };

    const contractItemAddresses: { [key: string]: string } = {
        "AriaArmor": "0x8665A2995708355E0ef8bfBAd05A67B519ede967",
        "AriaCap": "0x79A3c4e15A0d5aE5A553afB1E225cE3e1346ECf7",
        "AriaLeftHand": "0x2e002c89d16f6Acb24838508b1275597439a79e0",
        "AriaRightHand": "0x8DBa539AE434c4cb0932F771773e3fFAC9cc5c28",
        "LunaArmor": "0x33261421b1E41A6171eD40450e30646143D8Ee1d",
        "LunaCap": "0x457481A499Cd8Fa3769e9030e93543511Cb45E31",
        "LunaLeftHand": "0x1A48f3610bA2e9d142E03028A1371945C9c179Ee",
        "LunaRightHand": "0x42A748514aAe052F4e811255558fd2C22DC25916",
        "RykerArmor": "0xff8c1B6bACd74790eDdcb6C9f442Bf52086Bb575",
        "RykerCap": "0x7E9CF37dB29d571BD2a240cBE1c4A6A73F55D3DC",
        "RykerLeftHand": "0x60D2Ba345F0Bc64547f37Cf436Ec148B465aB3b8",
        "RykerRightHand": "0x4ADA1D737B5F56306Be75416f1cE3653365c000D",
        "ThaddeusArmor": "0xe69708f0B24b122D7943326832ad34094280631b",
        "ThaddeusCap": "0x2bb05ff15Ee55Ee7443ad5fad17788150B3e4c45",
        "ThaddeusLeftHand": "0x3A58c53905f9d712A07ee02Df7c64648d3eBa982",
        "ThaddeusRightHand": "0xa38Dd264FB2c05a743Dfef41ac0390FEc93FA6Fd"
    };







    // Uso del dizionario
    // Ad esempio, per ottenere l'indir


    // Connettiti a un provider (ad esempio, un nodo Ethereum)
    const deployerAddress = (await ethers.getSigners())[0].address;
    const moonbaseAlphaUrl = process.env.MOONBASE_URL || 'https://rpc.testnet.moonbeam.network';
    const provider = new ethers.providers.JsonRpcProvider(moonbaseAlphaUrl);
    // Crea un'istanza del contratto utilizzando l'indirizzo e il provider
    const timeSquadAria = new ethers.Contract(timeSquadAriaAddress, TimeSquadAria.interface, provider);

    // Ora puoi interagire con il contratto
    // Ad esempio, puoi chiamare una funzione del contratto
    // const result = await timeSquadAria.unaFunzione();
    // console.log(result);
}

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
