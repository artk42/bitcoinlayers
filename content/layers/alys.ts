import {
    LayerProject,
    Type,
    LiveStatus,
    EntityType,
    Site,
    RiskCategory,
} from "../props";

const alys: LayerProject = {
    type: Type.Layer,
    slug: "alys",
    title: "Alys",
    entityType: EntityType.Sidechain,
    live: LiveStatus.Announced,
    staking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", "", "", ""],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "-",
    bitcoinOnly: true,
    links: [
        {
            text: Site.Website,
            url: "https://www.anduro.io/",
        },
        {
            text: Site.Website,
            url: "https://www.anduro.io/",
        },
        {
            text: Site.Docs,
            url: "https://www.anduro.io/",
        },
        {
            text: Site.Explorer,
            url: "https://www.anduro.io/",
        },
        {
            text: Site.GitHub,
            url: "https://www.anduro.io/",
        },
        {
            text: Site.Twitter,
            url: "https://www.anduro.io/",
        },
    ],
    description:
        "Alys is one of the sidechains being developed through the Anduro project. It will be an EVM sidechain with general purpose smart contracts. Alys will be a part of the Anduro ecosystem.",
    riskAnalysis: [
        {
            category: RiskCategory.UnilateralExits,
            score: 0,
            tier: "",
            title: "",
            content: "",
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: "",
            title: "",
            content: "",
        },
        {
            category: RiskCategory.BlockProduction,
            score: 0,
            tier: "",
            title: "",
            content: "",
        },
        {
            category: RiskCategory.StateValidation,
            score: 0,
            tier: "",
            title: "",
            content: "",
        },
    ],
    sections: [
        {
            id: "selfsubmit",
            title: "Process to self-submit information",
            content: [
                {
                    content:
                        "The Bitcoin Layers project prioritizes risk reviews on projects that are in production and accepting users' BTC deposits. Projects on testnet are welcome to submit information about their project. We do not publish risk assessments for projects that are not in production.\n\nHere are the [instructions](https://github.com/bitcoinlayers/bitcoinlayers/blob/main/SELFSUBMIT.md) on self-submitting a project.",
                },
            ],
        },
    ],
};

export default alys;