module.exports = (config) => {
  const umd = {
    ...config.output[0],
    name: 'Somelib',
    entryFileNames: '[name].umd.js',
    chunkFileNames: '[name].umd.js',
    format: 'umd'
  };
  return config;
};
