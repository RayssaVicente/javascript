const path = require('path')
module.exports = {
    entry:{
        main: './src/index.js',
        hello: './src/hello.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }

}