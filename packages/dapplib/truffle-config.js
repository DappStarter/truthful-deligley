require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remain million hockey enroll swallow skull'; 
let testAccounts = [
"0x079bbbfe382eac64a59f4e3ab1a7ef61865b856d9c7b20fd03ef38046fa64378",
"0x2c7f970079dffbecd085504123b427b90293d1b9ef2473a9f79ea11c8dd3bf27",
"0xf56c363721e51b01ed9f232ac7515000bed6e362b8213380cbe84a2e4ad01c01",
"0x4f04b9b16acef3c7db19c3c9925073c0e33dd930bd2023022597f62714d24397",
"0xfd8fb9b875fa5a2fe60c1dfe258ec915d05b586db35461bc8637273f253dbf89",
"0x9c0a55205040092ebff86e65b38b5f5fb0dc9b48a42d7f16f00a00c5b1cd4d22",
"0xddebfa2d13c03fd13f30b2fd4d858a3ebe8f09086856a60a27af643971fb09f9",
"0xe9f6311d87956c55ac0ade090f39b463d6a26431aacba40e980e84e8f542f9b0",
"0x540d401bb0e3b7cf46eac1dc39a86cb3cbf777bac74ef7162f06e1bf0200d2f5",
"0x1b6cc4c4c0ac86d1d7a159fd1c67110ceacef62f9294e8244bbc42c3337c7033"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
