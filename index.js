//import * as wasm from "hello-wasm-pack";
import { WalletWrapper } from "bdk-wasm";

//wasm.greet();

const network = "testnet";
const descriptor = "wpkh([c258d2e4/84h/1h/0h]tpubDDYkZojQFQjht8Tm4jsS3iuEmKjTiEGjG6KnuFNKKJb5A6ZUCUZKdvLdSDWofKi4ToRCwb9poe1XdqfUnP4jaJjCB2Zwv11ZLgSbnZSNecE/0/*)";
const change_descriptor = "wpkh([c258d2e4/84h/1h/0h]tpubDDYkZojQFQjht8Tm4jsS3iuEmKjTiEGjG6KnuFNKKJb5A6ZUCUZKdvLdSDWofKi4ToRCwb9poe1XdqfUnP4jaJjCB2Zwv11ZLgSbnZSNecE/1/*)";
const esplora = "https://blockstream.info/testnet/api";
 
var wallet = new WalletWrapper(network, descriptor, change_descriptor, esplora, 20);
wallet.then(function(w) {
    var a = w.new_address();
    console.log("New address: %s", a);
    
    var b = w.balance();
    console.log("New balance: %s", b);
    
    console.log("Start sync");
    w.sync().then(function(s) {
        console.log("End sync");
        var b2 = w.balance();
        console.log("New balance: %s", b2);   
    });
    
    var a = w.new_address();
    console.log("New address: %s", a);
    
});