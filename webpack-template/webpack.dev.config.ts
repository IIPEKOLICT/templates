import { join, resolve } from 'path'
import { Configuration } from './webpack.interfaces'
import common from './webpack.common'
import HtmlPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { source } from './config.json'

const config: Configuration = {
  ...common,
  devServer: {
    open: true,
    port: 'auto',
    hot: true,
    compress: true,
    static: {
      directory: resolve(__dirname, source),
      watch: true,
    },
    client: {
      progress: true,
      overlay: {
        errors: true,
        warnings: false,
      },
      logging: 'error',
    },
  },
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    assetModuleFilename: '[file]',
  },
  plugins: [
    new HtmlPlugin({
      template: join(__dirname, source, 'index.html'),
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: '**/*',
          context: resolve(__dirname, source),
          globOptions: {
            ignore: [
              '**/*.js',
              '**/*.ts',
              '**/*.scss',
              '**/*.sass',
              '**/*.html',
            ],
          },
          noErrorOnMissing: true,
          force: true,
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
}

export default config
