require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remember protect grace father flat twenty'; 
let testAccounts = [
"0x572a09b16d614395ec506ae7aed910f1fa6a5bbf2c61a21f0cf54d76f26c871d",
"0xf6ff60d1be9ccd44e34572f34dc05b0658b6b9d577231a228602ccb8dea9ad63",
"0x82429111a18e230fc814a62ca72660ecdd0ecb6106529be1713db97d56737998",
"0x02d1147fcccb2c81e9db18f561d9a0609402dd8aab9d068cc283d79805996984",
"0x2a3b28c4db7f8df50c613cbcac8931618d7c2299ad1e6c2c86005821ba892388",
"0xc336cad2bb115433be82d22f07dfb756760198a059451806dc9f1492428d6696",
"0xb076aeec8b1b1d489588c19532739226fe590d83f82622d036e7a0f2f81c4afb",
"0x427309534f1d49cf40f339ce3650e286c1d68d0752f39aa8bcd8c1bf8e391029",
"0x89b08a7190dd168a55133396d72869acabfba19e9f8ca7b94f4bce2c7537ea68",
"0x96a6efa186f2d0ae602b0ac2aaf7f29adf120b8377e288b8bd7fff3018780d08"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

