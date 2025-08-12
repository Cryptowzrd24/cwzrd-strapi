import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        '*.trycloudflare.com',
        '*.ngrok.io',
        '*.ngrok-free.app',
        'recognized-auburn-taxi-fuzzy.trycloudflare.com',
        'cms.cwzrd.co.uk'
      ],
      host: true
    },
  });
};
