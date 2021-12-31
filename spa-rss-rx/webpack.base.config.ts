import { join } from 'path';
import HtmlPlugin from 'html-webpack-plugin';
import { CleanPlugin, Configuration } from 'webpack';
import { Configuration as IDevServer } from 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export type WebpackConfig = Configuration & {
  devServer?: IDevServer;
};

export const webpackBaseConfig: WebpackConfig = {
  entry: join(__dirname, 'src', 'main.ts'),
  target: ['web', 'es6'],
  output: {
    path: join(__dirname, 'dist'),
    assetModuleFilename: '[file]',
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.ts$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(?:mp3|wav|ogg|mp4)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(?:woff(2)|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: join(__dirname, 'src', 'index.html'),
      filename: './index.html',
      favicon: join(__dirname, 'src', 'favicon.ico'),
    }),
    new CleanPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.ts'],
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 1000000000,
    maxEntrypointSize: 1000000000,
  },
};
