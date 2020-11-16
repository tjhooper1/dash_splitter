module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/dash_splitter' : '/',
  devServer: {
    port: 80,
    host: "0.0.0.0",
  },
};
