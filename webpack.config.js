var path = require('path');
var options = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
          __DEVTOOLS__: true
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel-loader'],
            include: path.join(__dirname, 'src'),
            exclude: path.join(__dirname, 'node_modules')
        }]
    }
};

module.exports = options;
