import { config as baseConfig } from '../wdio.conf';

export const config = {
  ...baseConfig,
  capabilities: [
    {
      browserName: 'firefox',
      'moz:firefoxOptions': {
        args: ['--width=375', '--height=812'], 
      },
    },
  ],
};

