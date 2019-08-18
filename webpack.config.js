const MODE = "development";

const enabledSourceMap = MODE === "development";

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: MODE,

  module: {
    rules: [
      {
        test: /\.(css|sass)/,
        use: [
          "style-loader",
					{
						loader: MiniCssExtractPlugin.loader
					},
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 2
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: enabledSourceMap
            }
          }
        ]
			}
    ]
	},
  plugins:[
    new MiniCssExtractPlugin({ filename: 'style/[name].css' }),
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
};