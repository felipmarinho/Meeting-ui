const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'), // Ponto inicial
    output: { // aonde vai colocar o bundle que é o codigo transpilado pelo webpack
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}