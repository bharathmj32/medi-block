import keypair from "keypair";
import nodeRSA from "node-rsa";

const cipher = new nodeRSA({ b: 512 });

const keys = keypair({ bits: 512 });
const privateKey = keys.private;
const pubKey = keys.public;
console.log(pubKey, privateKey);

const text = "Hello RSA!";
cipher.importKey(pubKey, "pkcs1-public");
const encrypted = cipher.encrypt(text, "base64");
console.log("encrypted: ", encrypted);

const decipher = new nodeRSA(privateKey, "pkcs1");
const decrypted = decipher.decrypt(encrypted, "utf8");
console.log("decrypted: ", decrypted);
