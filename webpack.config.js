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
            }, {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader'}, // vai pegar os arquivos que fizemos em CSS e adicionar no HTML.
                    { loader: 'css-loader'}, // Vai auxiliar com importações realizadas de dentro do arquivo css
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: [
                    {loader: 'file-loader'}
                ]
            }
        ]
    }
}