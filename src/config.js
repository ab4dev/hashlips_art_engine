const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata
const namePrefix = "Your Collection";
const nameSymbol = "YC";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const background = {
    generate: true,
    brightness: "80%",
    static: false,
    default: "#000000"
};

const extraMetadata = {};

const format = {
    width: 512,
    height: 512,
    smoothing: false
};

const gif = {
    export: false,
    repeat: 0,
    quality: 100,
    delay: 500
};

const layerConfigurations = [
    {
        growEditionSizeTo: 5,
        layersOrder: [
            { name: "Background" },
            { name: "Eyeball" },
            { name: "Eye color" },
            { name: "Iris" },
            { name: "Shine" },
            { name: "Bottom lid" },
            { name: "Top lid" }
        ]
    }
];

const preview = {
    thumbPerRow: 5,
    thumbWidth: 50,
    imageRatio: format.height / format.width,
    imageName: "preview.png"
};

const preview_gif = {
    numberOfImages: 5,
    order: "ASC", // ASC, DESC, MIXED
    repeat: 0,
    quality: 100,
    delay: 500,
    imageName: "preview.gif"
};

const solanaMetadata = {
    symbol: nameSymbol,
    seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
    external_url: "https://www.youtube.com/c/hashlipsnft",
    creators: [
        {
            address: "Cg2BLuXnodAJTsbPFeJbnzpuTZiHSCA3K65kz7y9wtFR",
            share: 100
        }
    ]
};

const text = {
    only: false,
    color: "#ffffff",
    size: 20,
    xGap: 40,
    yGap: 40,
    align: "left",
    baseline: "top",
    weight: "regular",
    family: "Courier",
    spacer: " => "
};

module.exports = {
    background,
    baseUri,
    debugLogs: false,
    description,
    extraMetadata,
    format,
    gif,
    layerConfigurations,
    namePrefix,
    network,
    pixelFormat: { ratio: 2 / 128 },
    preview,
    preview_gif,
    rarityDelimiter: "#",
    shuffleLayerConfigurations: false,
    solanaMetadata,
    text,
    uniqueDnaTorrance: 1000
};
