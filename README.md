# Solana Perpetuals

While FTX and Alameda supported TVL, transactions, and token values throughout Solana, they were only a piece of the broader puzzle. Despite regular network outages, it's advantages of speed, low fees, composability, and developer friendliness cannot be denied.
The strong Singapore builder community led by Metacamp is a testament to that fact.
When the Grizzlython came rolling around, we saw a chance to make a dent in the Solana ecosystem. A team was put together to build a GMX-type AMM Perpetual Exchange. With one core aim to rebuild institutional investor trust. We want to make Solana great again.

## Introduction

SolDecentral is an experimental implementation of GMX, a renowned platform for perpetual trading that has gained immense popularity on Arbitrum and Avalanche and triggered a phenomenon known as the GLP wars. The tokenomics model of GMX has been a key factor in its success, with significant fees generated for GMX stakers and a surge in demand for GLP. The goal is to replicate this model on Solana and make it work seamlessly on the network.

## Architecture

![Architecture Diagram](https://github.com/SolCentralX/FE_Submission/blob/92372db51200cc5f50e227cce90fe0c901512506/Diagrams/SolDecentral_Architecture_V1.png)

## Quick start

### Setup Environment

1. Clone the repository from <https://github.com/askibin/perpetuals.git>.
2. Install the latest Solana tools from <https://docs.solana.com/cli/install-solana-cli-tools>. If you already have Solana tools, run `solana-install update` to get the latest compatible version.
3. Install the latest Rust stable from <https://rustup.rs/>. If you already have Rust, run `rustup update` to get the latest version.
4. Install the latest Anchor framework from <https://www.anchor-lang.com/docs/installation>. If you already have Anchor, run `avm update` to get the latest version.

### Build

First, generate a new key for the program address with `solana-keygen new -o my_new_keypair.json`. This keypair is your wallet and ensure the path of your wallet in anchor.toml matches this. Then replace the existing program ID with the newly generated address in `Anchor.toml` and `programs/perpetuals/src/lib.rs`.
Save this seed phrase and your BIP39 passphrase as you will need this later when deploying your program in Sol Playground. More on this later.

Important: The wallet's pubkey will be set as an upgrade authority upon initial deployment of the program. It is strongly recommended to make upgrade authority a multisig when deploying to the mainnet.

To build the program run `anchor build` command from the `perpetuals` directory:

```sh
cd perpetuals
anchor build
```

Before you can deploy, you will need 24 test SOL.
If you don't have it, then you can follow these steps to get it.

```
solana airdrop 2 <pubkey>
solana balance <pubkey>
repeat (1) until your balance returns 26 SOL
```

Note: pubkey is also the account used to deploy the program.

### Deploy

To deploy the program to the devnet, we will use solana-playground <https://beta.solpg.io/>. This was our workaround to the dependency issues we faced.

```

1. Open browser to https://beta.solpg.io/
2. In the left panel > click on hammer and wrench icon
3. In program credentials > import public key you created in the build phase eg. my_new_keypair.json
4. Upload your program > target > deploy > perpetuals.so
5. IDL > target > idl > perpetuals.json
6. Click Deploy

```

Once deployed successfully verify with:

```
solana program show <PROGRAM_ID>
```

Output should look something like this:

Program Id: 2nv5ppjUhvze6m6RAZweUBVzt3KSbszsBuW1Yjh4kr8A
Owner: BPFLoaderUpgradeab1e11111111111111111111111
ProgramData Address: DEs1TUwv3bgRL6drB7n9ggsc1GZbMMpBTaFBR2vBrLrx
Authority: ApxxRUyjGDPNp4VWV9CRfKa1WE37PoJLjjREupUD5Bvt
Last Deployed In Slot: 200043118
Data Length: 2351568 (0x23e1d0) bytes
Balance: 16.36811736 SOL

### Initialize Program and Pool

Create an admin wallet following the same procedure in the build step above. Note the seed phrase and passphrase if you used one.

To initialize deployed program, run the following commands:

```
cd app
npm install
npm install -g npx
npx ts-node app/src/cli.ts -k <ADMIN_WALLET> init -m 1 <pubkey of admin wallet>
```

Where `<ADMIN_WALLET>` is the file path to the wallet that was set as the upgrade authority of the program upon deployment. `-m` for min-signatures will be required to execute privileged instructions. To provide multiple signatures, just execute exactly the same command multiple times specifying different `<ADMIN_WALLET>` with `-k` option. The intermediate state is recorded on-chain so that commands can be executed on different computers.

To validate initialized program:

```

npx ts-node app/src/cli.ts -k <ADMIN WALLET> get-multisig
npx ts-node app/src/cli.ts -k <ADMIN WALLET> get-perpetuals

```

Before the program can accept any liquidity or open a trade, you need to create a token pool and add one or more token custodies to it:

```
npx ts-node app/src/cli.ts -k <ADMIN_WALLET> add-pool <POOL_NAME>
npx ts-node app/src/cli.ts -k <ADMIN_WALLET> add-custody <POOL_NAME>
<POOL_NAME> <TOKEN_MINT> <TOKEN_ORACLE> <IS_STABLE>
```

Where `<POOL_NAME>` is a random name you want to assign to the pool, `<TOKEN_MINT>` is the mint address of the token, and `<TOKEN_ORACLE>` is the corresponding Pyth price account that can be found on [this page](https://pyth.network/price-feeds?cluster=devnet). `<IS_STABLE>` specifies whether the custody is for a stablecoin. For example:

```
npx ts-node app/src/cli.ts -k ~/my-solana-wallets/admin-wallet-keypair-1.json add-pool SLP-Pool
npx ts-node app/src/cli.ts -k ~/my-solana-wallets/admin-wallet-keypair-1.json add-custody SLP-Pool So11111111111111111111111111111111111111112 J83w4HKfqxwcq3BEMMkPFSppX3gqekLyLJBexebFVkix false
```

To validate added pools and custodies, run:

```

npx ts-node app/src/cli.ts -k ~/my-solana-wallets/admin-wallet-keypair-1.json get-pool SLP-Pool
npx ts-node app/src/cli.ts -k ~/my-solana-wallets/admin-wallet-keypair-1.json get-custody SLP-Pool So11111111111111111111111111111111111111112

```

CLI offers other useful commands. You can get the list of all of them by running the following:

```

npx ts-node src/cli.ts --help

```

### Further Steps

To allow users to interact with the program, you need a UI. An open-source reference implementation is under development and will be available soon. In the meantime, you can use the test client available under the `test` directory and the CLI client under the `app/src` directory for examples of how user instructions can be built and executed. Feel free to implement your own version of the UI.

## Support

If you are experiencing technical difficulties while working with the Perpetuals codebase, ask your question on [StackExchange](https://solana.stackexchange.com) (tag your question with `perpetuals`).

If you found a bug in the code, you can raise an issue on [Github](https://github.com/askibin/perpetuals). But if this is a security issue, please don't disclose it on Github or in public channels. Send information to solana.farms@protonmail.com instead.

## Contributing

Contributions are very welcome. Please refer to the [Contributing](https://github.com/solana-labs/solana/blob/master/CONTRIBUTING.md) guidelines for more information.

## License

Solana Perpetuals codebase is released under [Apache License 2.0](LICENSE).

## Disclaimer

By accessing or using Solana Perpetuals or any of its components, you accept and agree with the [Disclaimer](DISCLAIMER.md).
