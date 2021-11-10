import { join, resolve } from 'path'
import { Configuration } from './webpack.interfaces'
import common from './webpack.common'
import HtmlPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import RemoveEmptyScriptsPlugin from 'webpack-remove-empty-scripts'
import { source, build } from './config.json'

const config: Configuration = {
  ...common,
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  mode: 'production',
  output: {
    path: resolve(__dirname, build),
    filename: 'js/[name].[contenthash].js',
    assetModuleFilename: '[file]',
  },
  plugins: [
    new HtmlPlugin({
      template: join(__dirname, source, 'index.html'),
      minify: true,
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
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
    new RemoveEmptyScriptsPlugin(),
  ],
}

export default config
