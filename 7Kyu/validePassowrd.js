function password(str) {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()\-_=+{}[\]|\\:;"'<>,.?/]{8,}$/g;
  return pattern.test(str);
}

console.log(password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"));
