import path from "path";
import { fileURLToPath } from "url";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: Configuration = {
    entry: "./src/ts/neutralizer.ts",
    output: {
        filename: "neutralizer.min.js",
        path: path.resolve(__dirname, "dist/js"),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    mode: "production",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/html/modal.html",
            filename: "../html/modal.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                minifyCSS: true,
                minifyJS: true,
            },
        }),
    ],
};

export default config;
