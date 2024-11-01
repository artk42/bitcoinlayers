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

const bob: LayerProject = {
    type: Type.Layer,
    slug: "bob",
    title: "BOB",
    entityType: EntityType.EthereumRollup,
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
    btcLocked: 974,
    nativeToken: "ETH",
    feeToken: "ETH",
    bitcoinOnly: false,
    links: [
        {
            text: Site.Website,
            url: "https://www.gobob.xyz/",
        },
        {
            text: Site.Docs,
            url: "https://docs.gobob.xyz/",
        },
        {
            text: Site.Explorer,
            url: "https://twitter.com/build_on_bob",
        },
        {
            text: Site.GitHub,
            url: "https://github.com/bob-collective/bob",
        },
        {
            text: Site.Twitter,
            url: "https://twitter.com/build_on_bob",
        },
    ],
    description:
        "BOB is an optimistic rollup that serves as an application layer for Bitcoin. They have launched as a rollup on top of Ethereum, with plans to derive more security from Bitcoin miners, and full nodes, over time. Its relation to Bitcoin, currently, is similar to that of a sidechain as it is an alternative consensus protocol with a two-way peg(s) between it and the Bitcoin mainchain.",
    riskAnalysis: [
        {
            category: RiskCategory.BridgeSecurity,
            score: 0,
            tier: RiskFactor.Critical,
            title: "Bitcoin users trust that bitcoin synthetics will remain backed, and that the BOB bridge will not steal their funds",
            content:
                "BOB primarily uses two BTC synthetics on its chain, tBTC and wBTC. Both are ERC-20 tokens on Ethereum. Currently, both of these tokens are minted on BOB via its official Ethereum bridge.\n\nUsers trust that the bridge operators will not steal their BTC, the BOB proposer to not publish a malicious, unchallenged state transition, or the admin controlling the bridge to create a malicious smart contract upgrade.\n\nIn the event of a malicious smart contract upgrade, there is no exit window for BOB users. This means that the admin behind the bridge can steal all funds in the official bridge.",
        },
        {
            category: RiskCategory.DataAvailability,
            score: 0,
            tier: RiskFactor.Medium,
            title: "Data is stored and made available by Ethereum full nodes",
            content:
                "The data for BOB’s state is stored on the Ethereum blockchain. Anyone can run an Ethereum node and verify the state of BOB.",
        },
        {
            category: RiskCategory.NetworkOperators,
            score: 0,
            tier: RiskFactor.Medium,
            title: "BOB blocks are produced and proposed by a centralized operator, but forced inclusion to Ethereum L1 possible",
            content:
                "Currently, BOB’s sequencer is managed by one entity. The BOB sequencer can censor transactions and would also cause liveness failures in the rollup if it went down. Users can, however, bypass the sequencer and send their transactions directly to the Ethereum L1 contract. Users do, however, trust that a permissioned proposer will publish the latest state root on the Ethereum L1, permitting withdrawals.",
        },
        {
            category: RiskCategory.FinalityGuarantees,
            score: 0,
            tier: RiskFactor.Medium,
            title: "BOB state transitions finalize on Ethereum",
            content:
                "BOB inherits finality guarantees from Ethereum. The BOB sequencer provides a soft confirmation of transactions which are eventually summarized and sent to Ethereum.\n\nBOB's sequencer can reorg prior to a transaction batch being accepted on Ethereum.",
        },
    ],
    sections: [
        {
            id: "bitcoinsecurity",
            title: "Bitcoin Security",
            content: [
                {
                    title: "BOB does not inherit any security from Bitcoin consensus participants. Optimine is under development",
                    content:
                        "BOB is currently developing Optimine: a mechanism that will see Bitcoin miners merge-mine the BOB sequencer. In this design, the BOB sequencer would create rollup blocks, and the miners would validate that the blocks were created correctly. Miners would then give the blocks “Proof-of-Work” validation so they can be executed. This Proof-of-Work validation would take minutes, so it can also act as a soft finalization mechanism as OP Stack chains typically take 7 days for the challenge period to finalize.",
                },
                {
                    title: "ETH token used to pay fees",
                    content:
                        "BOB users pay sequencer fees in ETH. BOB operators also pay DA fees in ETH. Users can, however, elect to pay fees with a separate token (e.g. tBTC) to a service provider that will pay sequencer fees, in ETH, on the users’ behalf.",
                },
                {
                    title: "No MEV introduced to Bitcoin",
                    content:
                        "BOB does not introduce any MEV on the Bitcoin L1. Users trust the BOB sequencer to not reorder their transactions to extract MEV.",
                },
                {
                    title: "BOB does not contribute to the security budget",
                    content:
                        "BOB does not currently contribute to the Bitcoin security budget.",
                },
            ],
        },
        {
            id: "withdrawals",
            title: "Withdrawals",
            content: [
                {
                    title: "Proposer role centralized and permissioned. BTC users must withdraw to Ethereum L1 before withdrawing to Bitcoin",
                    content:
                        "Users can bypass the sequencer and submit withdrawal requests directly to the Ethereum L1. However, they cannot force-exit as the self-proposing is not enabled on OP Stack chains. Users rely on the proposer to post updated state roots to Ethereum to ensure withdrawals can be processed. Withdrawals from BOB to Ethereum take 7 days to finalize.\n\nOnce on the Ethereum L1, users can then redeem their BTC on Bitcoin via the two-way peg mechanism that their BTC synthetic is supported by.\n\nUsers primarily trust bridge operators to permit withdrawals back to the Bitcoin mainchain.",
                },
            ],
        },
        {
            id: "technology",
            title: "Technology",
            content: [
                {
                    title: "Fraud proofs are under development",
                    content:
                        "OP stack chains will use interactive fraud proofs to enforce state correctness. This feature is currently in development, meaning that BOB currently permits invalid state roots.",
                },
                {
                    title: "Bitcoin Light Client",
                    content:
                        "BOB’s Bitcoin light client verifies past transactions on the Bitcoin main chain, and also allows a smart contract on BOB to verify Bitcoin block headers. This gives BOB a view into Bitcoin state, and will be useful for future bridge programs.",
                },
                {
                    title: "Ethereum Virtual Machine",
                    content:
                        "BOB uses an EVM-compatible virtual machine. The Ethereum Virtual Machine is software responsible for smart contract execution for a number of blockchains, namely the Ethereum Network. It uses Solidity/Vyper as its code and is the dominant environment for smart contract execution in the cryptocurrency ecosystem. BOB is EVM-compatible, which means that a developer from Ethereum would have less difficulty deploying their applications on BOB compared to other execution environments.",
                },
                {
                    title: "Faster block times",
                    content:
                        "BOB is currently producing blocks every two seconds which provides a better user experience than using the Bitcoin, or Ethereum, mainchains.",
                },
                {
                    title: "BitVM bridge being researched",
                    content:
                        "BOB are actively researching BitVM and how it can support an improved bridge program for Bitcoin assets on the chain.",
                },
            ],
        },
        {
            id: "usecases",
            title: "Use Cases",
            content: [
                {
                    title: "Onchain applications",
                    content:
                        "BOB’s initial use case is to provide Ethereum users access to Bitcoin applications such as ordinals, BRC-20s, Bitcoin backed stablecoins, and more. It also gives Bitcoin users access to an application layer that provides faster confirmation times, lower fees and a superior user experience (albeit with additional trust assumptions). To enable this, BOB supports the BOB SDK, which is a software development kit that enables developers to build Bitcoin-centric applications on BOB.",
                },
                {
                    title: "Account abstraction",
                    content:
                        "BOB will support a number of Bitcoin-UX features via account abstraction. These features will enable users to access BOB via Bitcoin wallets, pay fees in their preferred token, and mint BTC on BOB directly.",
                },
            ],
        },
        {
            id: "operator",
            title: "Operator",
            content: [
                {
                    title: "BOB has a centralized operator",
                    content:
                        "Block production is controlled by one operator. Users trust that the operator will be honest. They also trust that the operator will not reorder transactions to extract MEV.",
                },
            ],
        },
        {
            id: "sourcecode",
            title: "Source Code",
            content: [
                {
                    title: "Under review",
                    content:
                        "We are reviewing if BOB's node software is open-source.",
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
                        "[This document outlines the privileged roles who play a role in managing various components of the BOB chain](https://docs.gobob.xyz/docs/learn/security/privileged-roles)\n[A risk review of the OP Mainnet chain on Ethereum, which has similar trust assumptions as the BOB chain as BOB is built on the OP Stack](https://l2beat.com/scaling/projects/optimism)\n[A blog covering R&D areas related to Bitcoin security on BOB.](https://mirror.xyz/0xE4dF449bDC1ec8f7688F68F7E839f1370617Ac73/UvQH9D3RyVcozOlz091gLKnbX8aqn8goFVYtHVmin-w)\n[BOB's TVL breakdown, including total BTC locked.](https://l2beat.com/scaling/projects/bob/tvl-breakdown)",
                },
            ],
        },
    ],
};

export default bob;
