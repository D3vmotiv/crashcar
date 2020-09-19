// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
  };
};
