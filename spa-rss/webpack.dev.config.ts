import { join } from 'path';
import merge from 'webpack-merge';
import { webpackBaseConfig, WebpackConfig } from './webpack.base.config';

export default function (): WebpackConfig {
  return merge(webpackBaseConfig, {
    devServer: {
      open: true,
      hot: true,
      compress: true,
      liveReload: true,
      watchFiles: join(__dirname, 'src'),
    },
    mode: 'development',
    devtool: 'source-map',
    output: { filename: 'js/[name].js' },
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
  });
}
