const MiniCssExtractPlugins = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        index: './src/index.js'
    },
    mode: 'development',
    module:{
        rules:[{
         test:/\.css$/,
         use: ['style-loder', 'css-loader']
        }]
    },
    plugins:[
     new MiniCssExtractPlugins()
    ]
}
