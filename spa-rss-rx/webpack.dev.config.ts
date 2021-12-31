import { join } from 'path';
import merge from 'webpack-merge';
import { webpackBaseConfig, WebpackConfig } from './webpack.base.config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default function (): WebpackConfig {
  return merge(webpackBaseConfig, {
    devServer: {
      open: true,
      hot: true,
      compress: true,
      watchFiles: join(__dirname, 'src'),
    },
    mode: 'development',
    devtool: 'source-map',
    output: { filename: 'js/[name].js' },
    plugins: [new MiniCssExtractPlugin({ filename: 'css/[name].css' })],
  });
}
