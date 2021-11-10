import { join, resolve } from 'path'
import { readdirSync, statSync } from 'fs'
import { Configuration } from './webpack.interfaces'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { source, isTypeScript } from './config.json'

const styleLoaders = (additional) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: { publicPath: '../' },
    },
    'css-loader',
  ]

  if (additional) loaders.push(additional)
  return loaders
}

const config: Configuration = {
  context: resolve(__dirname, source),
  entry: [
    '@babel/polyfill',
    join(__dirname, source, `main.${isTypeScript ? 't' : 'j'}s`),
  ],
  target: ['web', 'es6'],
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
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(?:mp3|wav|ogg|mp4)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: styleLoaders(false),
      },
      {
        test: /\.s[ac]ss$/i,
        use: styleLoaders('sass-loader'),
      },
      {
        test: /\.[tj]s$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.scss'],
    alias: readdirSync(resolve(__dirname, source)).reduce(
      (acc, name) => {
        if (statSync(join(__dirname, source, name)).isDirectory()) {
          acc[`#${name}`] = resolve(__dirname, source, name)
        }

        return acc
      },
      { '@': resolve(__dirname, source), '#': resolve(__dirname, source) }
    ),
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 2000000,
    maxEntrypointSize: 2000000,
  },
}

export default config
