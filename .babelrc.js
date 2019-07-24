const plugins = [
  '@babel/plugin-transform-async-to-generator',
  '@babel/plugin-proposal-class-properties',
  [
    'import-graphql',
    {
      runtime: true,
    },
  ],
  [
    'module-resolver',
    {
      root: ['.'],
      alias: {
        'typedefs/*': './src/typedefs/',
        'services/*': './src/services/',
        'hoc/*': './src/hoc/',
        'helpers/*': './src/helpers/',
      },
    },
  ],
  [
    '@babel/plugin-transform-runtime',
    {
      helpers: true,
      regenerator: true,
    },
  ],
];

const presets = [
  '@babel/preset-env',
  '@babel/preset-react',
  '@babel/preset-flow',
];

module.exports = { plugins, presets };
