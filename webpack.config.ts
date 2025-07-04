import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';



export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve('public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }
    
    const mode: BuildMode = env.mode || 'development';
    const isDev = mode === 'development'
    const PORT = env.port || 3000
    
    
    const config = buildWebpackConfig(
        {
            mode,
            paths,
            isDev,
            port: PORT
        }
    )
    return config
};