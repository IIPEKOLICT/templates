import { join } from 'path';
import merge from 'webpack-merge';
import { commonConfig, WebpackConfig } from './webpack.config';

export default function (): WebpackConfig {
  return merge(commonConfig, {
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
