/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */

  docs: {
    "Welcome to MultiversX": ["welcome/welcome-to-multiversx"],
    Technology: [
      "technology/architecture-overview",
      "technology/glossary",
      "technology/entities",
      "technology/chronology",
      "technology/secure-proof-of-stake",
      "technology/adaptive-state-sharding",
      "technology/the-wasm-vm",
      "technology/cross-shard-transactions",
    ],
    Wallet: [
      "wallet/overview",
      "wallet/web-wallet",
      "wallet/wallet-extension",
      "wallet/webhooks",
      "wallet/ledger",
      "wallet/create-a-fungible-token",
    ],
    Tokens: ["tokens/overview", "tokens/esdt-tokens", "tokens/nft-tokens"],
    Validators: [
      "validators/overview",
      "validators/system-requirements",
      {
        type: "category",
        label: "Setup",
        items: [
          "validators/nodes-scripts/config-scripts",
          "validators/nodes-scripts/install-update",
        ],
      },
      "validators/node-upgrades",
      {
        type: "category",
        label: "Nodes Management",
        items: [
          "validators/nodes-scripts/manage-node",
          "validators/nodes-scripts/use-docker",
          "validators/rating",
          "validators/redundancy",
          "validators/node-operation-modes",
          "validators/import-db",
          "validators/node-cli",
          "validators/node-databases",
          "validators/useful-links",
        ],
      },
      {
        type: "category",
        label: "Staking, Unstaking, Unjailing",
        items: [
          "validators/staking/staking",
          "validators/staking/unjailing",
          "validators/staking/staking-smart-contract",
        ],
      },
      {
        type: "category",
        label: "The Delegation Manager",
        items: [
          "validators/delegation-manager",
          "validators/delegation-dashboard",
          "validators/staking/convert-existing-validator-into-staking-pool",
          "validators/staking/merge-validator-delegation-sc",
          "validators/staking-providers-apr",
        ],
      },
      {
        type: "category",
        label: "Keys management",
        items: [
          "validators/key-management/validator-keys",
          "validators/key-management/wallet-keys",
          "validators/key-management/protect-keys",
        ],
      },
      {
        type: "category",
        label: "FAQs and tools",
        items: ["validators/faq", "validators/useful-links"],
      },
    ],
    Developers: [
      "developers/overview",
      {
        type: "category",
        label: "Tutorials",
        items: [
          "developers/tutorials/your-first-dapp",
          "developers/tutorials/your-first-microservice",
          "developers/tutorials/crowdfunding-p1",
          "developers/tutorials/crowdfunding-p2",
          "developers/tutorials/counter",
          "developers/tutorials/custom-wallet-connect",
          "developers/tutorials/staking-contract",
        ],
      },
      {
        type: "category",
        label: "Signing Transactions",
        items: [
          "developers/signing-transactions/signing-transactions",
          "developers/signing-transactions/tools-for-signing",
          "developers/signing-transactions/signing-programmatically",
        ],
      },
      {
        type: "category",
        label: "Gas and Fees",
        items: [
          "developers/gas-and-fees/overview",
          "developers/gas-and-fees/egld-transfers",
          "developers/gas-and-fees/system-smart-contracts",
          "developers/gas-and-fees/user-defined-smart-contracts",
        ],
      },
      {
        type: "category",
        label: "Developer reference",
        items: [
          "developers/developer-reference/serialization-format",
          "developers/developer-reference/wasm-annotations",
          "developers/developer-reference/wasm-modules",
          "developers/developer-reference/wasm-contract-calls",
          "developers/developer-reference/code-metadata",
          "developers/developer-reference/wasm-api-functions",
          "developers/developer-reference/storage-mappers",
          "developers/developer-reference/rust-testing-framework",
          "developers/developer-reference/rust-testing-framework-functions-reference",
          "developers/developer-reference/rust-smart-contract-debugging",
          "developers/developer-reference/smart-contract-build-reference",
          "developers/developer-reference/random-numbers-in-smart-contracts",
        ],
      },
      {
        type: "category",
        label: "Developers Best Practices",
        items: [
          "developers/best-practices/best-practices-basics",
          "developers/best-practices/biguint-operations",
          "developers/best-practices/the-dynamic-allocation-problem",
          "developers/best-practices/multi-values",
        ],
      },
      {
        type: "category",
        label: "Mandos tests reference",
        items: [
          "developers/mandos-reference/overview",
          "developers/mandos-reference/structure",
          "developers/mandos-reference/values-simple",
          "developers/mandos-reference/values-complex",
          "developers/mandos-reference/embed",
        ],
      },
      "developers/constants",
      "developers/sc-calls-format",
      "developers/built-in-functions",
      "developers/account-storage",
      "developers/relayed-transactions",
      "developers/setup-local-testnet",
      "developers/setup-local-testnet-advanced",
      "developers/creating-wallets",
      "developers/reproducible-contract-builds",
    ],
    "SDK and Tools": [
      "sdk-and-tools/overview",
      {
        type: "category",
        label: "REST API",
        items: [
          "sdk-and-tools/rest-api/rest-api",
          "sdk-and-tools/rest-api/multiversx-api",
          "sdk-and-tools/rest-api/gateway-overview",
          "sdk-and-tools/rest-api/addresses",
          "sdk-and-tools/rest-api/transactions",
          "sdk-and-tools/rest-api/network",
          "sdk-and-tools/rest-api/nodes",
          "sdk-and-tools/rest-api/blocks",
          "sdk-and-tools/rest-api/virtual-machine",
          "sdk-and-tools/rest-api/versions-and-changelog",
        ],
      },
      "sdk-and-tools/dapp-core",
      "sdk-and-tools/proxy",
      "sdk-and-tools/elastic-search",
      {
        type: "category",
        label: "Elasticsearch indices",
        items: [
          "sdk-and-tools/indices/es-index-accounts",
          "sdk-and-tools/indices/es-index-accountsesdt",
          "sdk-and-tools/indices/es-index-accountsesdthistory",
          "sdk-and-tools/indices/es-index-accountshistory",
          "sdk-and-tools/indices/es-index-blocks",
          "sdk-and-tools/indices/es-index-delegators",
          "sdk-and-tools/indices/es-index-epochinfo",
          "sdk-and-tools/indices/es-index-logs",
          "sdk-and-tools/indices/es-index-miniblocks",
          "sdk-and-tools/indices/es-index-operations",
          "sdk-and-tools/indices/es-index-rating",
          "sdk-and-tools/indices/es-index-receipts",
          "sdk-and-tools/indices/es-index-rounds",
          "sdk-and-tools/indices/es-index-scdeploys",
          "sdk-and-tools/indices/es-index-scresults",
          "sdk-and-tools/indices/es-index-tags",
          "sdk-and-tools/indices/es-index-tokens",
          "sdk-and-tools/indices/es-index-transactions",
          "sdk-and-tools/indices/es-index-validators",
        ],
      },
      {
        type: "category",
        label: "erdpy",
        items: [
          "sdk-and-tools/erdpy/erdpy",
          "sdk-and-tools/erdpy/erdpy-cookbook",
          "sdk-and-tools/erdpy/installing-erdpy",
          "sdk-and-tools/erdpy/configuring-erdpy",
          "sdk-and-tools/erdpy/erdpy-cli",
          "sdk-and-tools/erdpy/deriving-the-wallet-pem-file",
          "sdk-and-tools/erdpy/sending-bulk-transactions",
          "sdk-and-tools/erdpy/writing-and-running-erdpy-scripts",
          "sdk-and-tools/erdpy/smart-contract-interactions",
        ],
      },
      {
        type: "category",
        label: "sdk-js",
        items: [
          "sdk-and-tools/sdk-js/sdk-js",
          "sdk-and-tools/sdk-js/sdk-js-cookbook",
          "sdk-and-tools/sdk-js/extending-sdk-js",
          "sdk-and-tools/sdk-js/writing-and-testing-sdk-js-interactions",
          "sdk-and-tools/sdk-js/sdk-js-migration-guides",
          "sdk-and-tools/sdk-js/sdk-js-signing-providers",
        ],
      },
      "sdk-and-tools/sdk-nestjs",
      "sdk-and-tools/erdgo",
      "sdk-and-tools/erdcpp",
      "sdk-and-tools/erdjava",
      "sdk-and-tools/erdkotlin",
      "sdk-and-tools/sdk-js-wallet-cli",
    ],
    Integrators: [
      "integrators/overview",
      "integrators/egld-integration-guide",
      "integrators/esdt-tokens-integration-guide",
      "integrators/observing-squad",
      "integrators/deep-history-squad",
      "integrators/accounts-management",
      "integrators/creating-transactions",
      "integrators/querying-the-blockchain",
    ],
  },
};

module.exports = sidebars;
