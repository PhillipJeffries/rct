import path from "path";
import { BuildOptions } from "./types/config";
import {Configuration as DevServerConfiguration} from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {

    const {port} = options

    return {
        static: {
            directory: path.join(__dirname, 'public'),
          },
          compress: true,
          port: port,
          open: true,
          historyApiFallback: true,
        }
}