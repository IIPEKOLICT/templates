import merge from 'webpack-merge';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { webpackBaseConfig, WebpackConfig } from './webpack.base.config';

export default function (): WebpackConfig {
  return merge(webpackBaseConfig, {
    mode: 'production',
    optimization: { minimizer: [new CssMinimizerPlugin(), new TerserPlugin()] },
    output: { filename: 'js/[name].[contenthash].js' },
    plugins: [
      new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash].css' }),
    ],
  });
}
