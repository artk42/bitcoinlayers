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

const core: LayerProject = {
    type: Type.Layer,
    slug: "core",
    title: "Core",
    entityType: EntityType.Sidechain,
    live: LiveStatus.Mainnet,
    staking: false,
    bridge: false,
    underReview: false,
    riskFactors: [
        RiskFactor.Unverified,
        RiskFactor.Medium,
        RiskFactor.Medium,
        RiskFactor.Medium,
    ],
    btcLocked: 6705,
    nativeToken: "CORE",
    feeToken: "CORE",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://coredao.org/",
        },
        {
            text: Site.Docs,
            url: "https://docs.coredao.org/developer/introduction/quick-links",
        },
        {
            text: Site.Explorer,
            url: "https://scan.coredao.org/",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/coredao-org",
        },
        {
            text: Site.Twitter,
            url: "https://twitter.com/Coredao_Org",
        },
    ],
    description:
        "Core (in relation to Bitcoin) is an EVM sidechain with a hybrid consensus mechanism, Satoshi Plus, that leverages both DPoW and DPoS. It uses a federated multisig to bridge BTC with multiple parties ensuring the honesty of the two-way peg. The native token of the network is CORE, which is used for transaction fees, staking, and governance in Core DAO.",
    riskAnalysis: [
        {
            category: RiskCategory.BridgeSecurity,
            score: 0,
            tier: RiskFactor.Unverified,
            title: "Funds are custodied by a federated signer set, with a number of parties ensuring the honesty of the bridge",
            content:
                "Users trust various parties in maintaining the honesty of Core’s bridge with Bitcoin. Lockers are the party responsible for securing the bitcoin that backs coreBTC on Core Chain. These actors stake collateral, in the form of Core tokens, in order to participate as a Locker. In the event of maliciously moving bitcoin from the multi-sig, or being unable to fulfill withdrawals, Lockers would be slashed and lose the collateral they posted.\n\nOther parties in the bridge set up are responsible for monitoring the Locker’s activity and initiating the slashing process.",
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Data availability requirement fulfilled by Core chain full nodes",
            content:
                "Core Chain's data availability requirement is fulfilled by its own network of full nodes. Anyone with enough computational resources can run a Core Chain full node.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Core's hybrid consensus mechanism operates the network",
            content:
                "Core Chain has a network of validators who participate as block producers. Each day, the 23 validators with the highest hybrid score (from DPOW and DPOS) are elected to participate in block production. Any Core chain full node can register to become a part of this set. Core Chain does not support exits that circumvent its validator set. This means that users must trust Core Chain validators to propose and finalize blocks.\n\nThere is a minimum stake to run a Core Chain validator node.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Transaction finality is provided by Core Chain consensus and has no assurances inherited from Bitcoin",
            content:
                "State transitions are finalized by Core Chain's consensus mechanism. All roles in this mechanism are minimally permissionless.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "Core indirectly inherits security from Bitcoin consensus participants",
                    content:
                        "As a part of its hybrid consensus mechanism, Bitcoin miners can delegate hashrate to Core validators to improve their overall voting power.",
                },
                {
                    title: "Core Chain requires another token to function",
                    content:
                        "The CORE token is required to pay for transaction fees and smart contract execution on Core Chain. It is also used for staking and governance. The token is directly required for the security of the network, as the staking of it is one of the two variables used to create a weighted score for validator election and leader selection.",
                },
                {
                    title: "No MEV introduced on Bitcoin",
                    content:
                        "Core Chain does not introduce any MEV on Bitcoin. Users trust Core Chain validators to not extract MEV.",
                },
                {
                    title: "Core Chain indirectly contributes to the security budget.",
                    content:
                        "Core validators will reward miners who delegated their hashrate to them with newly issued CORE tokens.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Withdrawals from coreBTC rely on several permissionless roles.",
                    content:
                        "Core Chain’s consensus-enshrined bridged BTC, coreBTC, relies on several roles for withdrawals, although they are all permissionless. It also relies on the liveness of Core Chain, as one of those roles is a set of smart contracts on Core Chain.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Satoshi Plus",
                    content:
                        "Satoshi Plus is a hybrid model of Delegated Proof-of-Work (DPoW) and Delegated Proof-of-Stake (DPoS). DPOW and DPOS are used to select the validators participating in Core Chain consensus.\n\nDPoW is performed by Bitcoin miners and mining pools who delegate their existing Bitcoin hash rate to select validators on Core Chain. DPoS is performed by those who delegate their CORE tokens, or BTC, to select validators on Core Chain. A weighted score is assigned to a validator via the amount of Bitcoin hash rate and delegate stake they receive. The top 21 validators per this weighted score are the ones elected to participate in Core Chain consensus.\n\nValidators who are elected to participate in block production earn block rewards through newly issued CORE tokens and fees. Validators choose how much of these rewards they share with miners and delegators, if any, but are incentivized to share as much as possible to ensure that miners and delegators continue to select them for block production.\n\nBy separating Proof-of-Work mining from block production, Satoshi Plus is able to mitigate against MEV extraction from Bitcoin miners.",
                },
                {
                    title: "Ethereum Virtual Machine",
                    content:
                        "Core Chain uses the Ethereum Virtual Machine (EVM) for its execution environment. While this environment was initially created for Ethereum, it has been adopted by many other networks.\n\nLike many other Bitcoin sidechains, Core Chain leverages the EVM to tap into existing developer resources and tooling.",
                },
                {
                    title: "coreBTC",
                    content:
                        "coreBTC is a native bridged BTC. Several roles are involved in the burning and minting of coreBTC.\n\nLockers hold BTC after minting and distribute it after burning. They must be overcollateralized at risk of liquidation by Liquidators. Other roles are involved as well, such as Guardians, Bitcoin Light Clients, Slashers, Relayers, and Verifiers.",
                },
                {
                    title: "Faster block times",
                    content:
                        "Core Chain produces a block every three seconds, as of March 2024.",
                },
                {
                    title: "Lower fees",
                    content:
                        "Core Chain fees average in the order of cents as of March 2024.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "DeFi",
                    content:
                        "The most popular use case for Core Chain is DeFi. Core Chain has a number of DeFi applications, including lending, borrowing, and decentralized exchanges, with a focus on bridged BTC assets.",
                },
                {
                    title: "BTC Staking",
                    content:
                        "Core chain enables BTC holders to natively stake their BTC, as a part of DPOS in Satoshi Plus, and delegate that stake to a specific validator in the Core Chain network.",
                },
            ],
        },
        {
            id: "operator",
            title: "Operator",
            content: [
                {
                    title: "Core Chain is operated by Satoshi Plus validators",
                    content:
                        "Block production is managed by validators participating in the chain's hybrid consensus mechanism.",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Code is open-source",
                    content: "Core's node implementation is open-source.",
                },
            ],
        },
        {
            id: "knowledgeBits",
            title: "Knowledge Bits",
            content: [
                {
                    title: "Learn more",
                    content:
                        "[Understanding Core Chain by Messari](https://messari.io/report/understanding-core-chain)\n[Core Chain Whitepaper](https://github.com/coredao-org/whitepaper/blob/main/COREWhitepaper_v1.0.6.pdf)",
                },
            ],
        },
    ],
};

export default core;
