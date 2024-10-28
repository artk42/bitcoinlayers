import {
    LayerProject,
    Type,
    LiveStatus,
    RiskFactor,
    EntityType,
    Site,
    RiskSection,
    ContentSection,
    RiskCategory,
} from "../props";

const coordinate: LayerProject = {
    type: Type.Layer,
    slug: "coordinate",
    title: "Coordinate",
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
        "Coordinate is a UTXO-based sidechain that acts enables users to more easily use applications like Ordinals, BRC-20s and standard Bitcoin transactions. Coordinate will be a part of the Anduro ecosystem.",
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

export default coordinate;