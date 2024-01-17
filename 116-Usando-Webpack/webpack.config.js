const path = require('path')
module.exports = {
    entry:{
        main: './src/index.js',
        hello: './src/hello.js'
    },
    mode: 'development',
    output:{
        path: path.resolver(__dirname, 'public'),
        filname: '[name].bundle.min.js'
    }

}