import forge from "node-forge";

export class AES_CBC {
  static genRandomBytes(size = 32) {
    return forge.random.getBytesSync(size);
  }

  static bytesToHex(text: string) {
    return forge.util.bytesToHex(text);
  }

  static hexToBytes(text: string) {
    return forge.util.hexToBytes(text);
  }

  static encrypt(text: string, key: string, iv: string) {
    const cipher = forge.cipher.createCipher("AES-CBC", key);
    cipher.start({ iv: iv });
    cipher.update(forge.util.createBuffer(text));
    cipher.finish();
    return cipher.output.toHex();
  }

  static bufferToBytes(buf: string) {
    return forge.util.createBuffer(buf).bytes();
  }

  static decrypt(cipher: string, key: string, iv: string) {
    const decipher = forge.cipher.createDecipher("AES-CBC", key);
    decipher.start({ iv: iv });
    decipher.update(forge.util.createBuffer(forge.util.hexToBytes(cipher)));
    decipher.finish();
    return decipher.output.toHex();
  }
}
