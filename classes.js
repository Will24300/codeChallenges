const gameSettings = {};
const gameSettingsProxy = new Proxy(gameSettings, {
  get: (o, prop) => {
    return prop in o ? "Yes" : "Nop";
  },
});
console.log(gameSettingsProxy.difficulty);
