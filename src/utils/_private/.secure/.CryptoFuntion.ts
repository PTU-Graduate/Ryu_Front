import CryptoJS from 'crypto-js';

const hashPasswordWithSalt = (passWord: string, salt: string) => {
  const saltedpassword = passWord + salt;
  return CryptoJS.SHA256(saltedpassword).toString(CryptoJS.enc.Hex);
};
export const hashpass = (passWord: string, salt: string) => {
  const cryptopass = hashPasswordWithSalt(passWord, salt);
  console.log(cryptopass);
  return cryptopass;
};
