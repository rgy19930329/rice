import path from 'path';
import routes from './src/pages/routes';

const rootdir = path.join(__dirname, '.');

// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes,
  alias: {
    '@': path.resolve(rootdir, 'src/'),
  },
  targets: {
    ie: 11,
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'rice',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ]
  ]
}
