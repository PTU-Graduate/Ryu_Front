import CryptoJS from 'crypto-js';

// 대문자로 시작하면 파스칼 케이스, 소문자로 시작하면 카멜 케이스,소괄호는 함수가 동작하기 위해 필요한 변수를 나타내는 곳,중괄호는 함수가 어떻게 동작할것인가

const hashPasswordWithSalt = (passWord: string, salt: string) => {
  const saltedpassword = passWord + salt;
  return CryptoJS.SHA256(saltedpassword).toString(CryptoJS.enc.Hex);
};
export const hashpass = (passWord: string, salt: string) => {
  const cryptopass = hashPasswordWithSalt(passWord, salt);
  console.log(cryptopass);
  return cryptopass;
};
