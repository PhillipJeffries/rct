import { RuleSetRule } from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { BuildOptions } from "./types/config"

export function buildLoaders(options: BuildOptions): RuleSetRule[] {

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64:8]'
          },

        }
      },
      "sass-loader",
    ],
  }

  const fileLoader = {
    test: /\.png/,
    type: 'asset/resource'
  }

  const svgLoader = {
    test: /\.svg/,
    type: 'asset/inline'
  }

  return [
    typescriptLoader,
    fileLoader,
    svgLoader,
    styleLoader,
  ]
}