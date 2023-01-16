const path = require('path')

module.exports = {
    entry: './src/app.ts',
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: [
                    /node_modules/,
                    '/src/legacy/v1/'
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts',
            '.js'
        ]
    }
}
