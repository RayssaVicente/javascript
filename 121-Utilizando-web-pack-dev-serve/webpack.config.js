const path = require('path')

module.exports = {
    devServer:{
        static:{
            directory: path.resolve(__dirname, 'dist')
        },
        compress: true,
        port: 8000
    },
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
