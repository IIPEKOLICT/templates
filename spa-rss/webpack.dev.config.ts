import { merge } from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { commonConfig, WebpackConfig } from './webpack.config';

export default function (): WebpackConfig {
  return merge(commonConfig, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
      open: true,
      hot: true,
      compress: true,
    },
    output: {
      filename: 'js/[name].js',
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
      }),
    ],
  });
}
