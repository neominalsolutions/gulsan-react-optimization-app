const path = require('path'); // COMMONJS Module System
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => {
	console.log('env', env);

	const isProduction = env.production;
	const isStaging = env.staging;
	const isDevelopment = env.development;

	console.log('isProduction', isProduction);
	console.log('isStaging', isStaging);
	console.log('isDevelopment', isDevelopment);

	let envFile = '.env.production';
	let outDirPath = 'build';

	if (isStaging) {
		envFile = '.env.staging';
		outDirPath = 'dist/test';
	} else if (isDevelopment) {
		envFile = '.env.development';
		outDirPath = 'dist/dev';
	}

	const envPath = path.resolve(__dirname, envFile);
	const envVars = dotenv.config({ path: envPath }).parsed || {};

	console.log('envVars', envVars);

	return {
		entry: './src/index.tsx',
		mode: isProduction ? 'production' : 'development',
		devServer: {
			historyApiFallback: true,
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, outDirPath),
		},
		optimization: {
			minimizer: [
				new TerserPlugin({
					terserOptions: {
						compress: {
							drop_console: true,
						},
					},
				}),
			],
		},
		module: {
			rules: [
				{
					test: /\.(ts|tsx)$/,
					exclude: /node_modules/,
					use: 'babel-loader',
				},
				{
					test: /\.(s(a|c)ss)$/,
					use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
				},
				{
					test: /\.(png|woff|woff2|eot|ttf|svg)$/,
					type: 'asset/resource',
					generator: {
						filename: './fonts/[name][ext]',
					},
				},
				{
					test: /\.(ico|jpe?g|png|gif|webp|svg|mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
					use: [
						{
							loader: 'file-loader',
						},
					],
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js', '.jsx'],
		},
		plugins: [
			new HtmlWebpackPlugin({ template: './src/index.html' }),
			new webpack.DefinePlugin({
				'process.env': JSON.stringify(envVars),
			}),
			new CopyPlugin({
				patterns: [
					{
						from: path.resolve(__dirname, 'src', 'assets'),
						to: path.resolve(__dirname, outDirPath, 'assets'),
					},
				],
			}),
		],
	};
};
