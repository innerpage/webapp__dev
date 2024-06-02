import { Config } from '@stencil/core';

export const config: Config = {
  globalStyle: 'src/global/style/index.css',
  globalScript: 'src/global/script/index.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      baseUrl: 'https://app.example.com',
    },
  ],
};
