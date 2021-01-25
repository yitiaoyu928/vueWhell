const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: '[name]_[hash].js'
    },
    module: {
        rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
        	test:/\.css$/,
        	use:['style-loader',
        	{
        		loader:'css-loader',
        		options:{
        			importLoaders:1
        		}
        	},'postcss-loader']
        },
        {
        	test:/\.scss$/,
        	use:['style-loader','css-loader','postcss-loader','sass-loader']
        },
        {
            test:/\.(ttf|eot|svg|woff|woff2)$/,
            use:['file-loader','url-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ],
    devServer: {
        open: true,
        hot: true,
        port: 2222,
        contentBase: './src',
        // noInfo: true
    },
    resolve:{
    	alias:{
    		vue$:'vue/dist/vue.js'
    	}
    }
}