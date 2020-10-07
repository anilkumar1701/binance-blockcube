
const BnbApiClient = require("@binance-chain/javascript-sdk");
const etherium = require('ethereum-private-key-to-address');
// const private  = require('generate-rsa-keypair')
const axios = require('axios');

const crypto = require("crypto");
var keypair = require('keypair');

const User = require('../models/users').User;

console.log('keypair', keypair().private);



// function testingNew(a){
// console.log('testtttt',a);
// return a;

// }

module.exports.generate = async function(req,res){
const { generateKeyPair } = require('crypto');
generateKeyPair('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'top secret'
  }
}, (err, publicKey, privateKey) => {
  // Handle errors and use the generated key pair.
          publicKey1 = publicKey.toString('hex');
        privateKey1 = privateKey.toString('hex');  
        // testingNew(privateKey1) 
        parts(req, res, keypair().private)
});

console.log('generateKeyPair', generateKeyPair);
};



async function parts(req, res, privateKey1){
    console.log('privatekey', privateKey1);
    

    const api = config.get('api_url')
    console.log('api', api);
    
    // let privateRes = await test();
    console.log();

    console.log('eth', etherium);
    
    let address = etherium(privateKey1);
    const bnbClient = new BnbApiClient(api);
    const httpClient = axios.create({ baseURL: api });
    bnbClient.chooseNetwork("testnet"); // or this can be "testnet"
    bnbClient.setPrivateKey(privateKey1);
    bnbClient.initChain();
    
    address = bnbClient.getClientKeyAddress();
    
    console.log("address: ", address);


    await new User({
    userName: "test",
    address: address
  }).save();

    return res.status(200).send(address);

}