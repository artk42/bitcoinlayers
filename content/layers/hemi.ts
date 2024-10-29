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

const hemi: LayerProject = {
    type: Type.Layer,
    slug: "hemi",
    title: "Hemi",
    entityType: EntityType.TBD,
    live: LiveStatus.Testnet,
    staking: false,
    bridge: false,
    underReview: true,
    riskFactors: ["", "", "", ""],
    btcLocked: 0,
    nativeToken: "-",
    feeToken: "-",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://hemi.xyz/",
        },
        {
            text: Site.Docs,
            url: "https://docs.hemi.xyz/",
        },
        {
            text: Site.Explorer,
            url: "https://testnet.explorer.hemi.xyz/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/hemilabs",
        },
        {
            text: Site.Twitter,
            url: "https://x.com/hemi_xyz",
        },
    ],
    description:
        "Hemi is a blockchain that is building compatability with bitcoin and Ethereum. It is currently live on testnet.",
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

export default hemi;