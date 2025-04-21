import { config as baseConfig } from '../wdio.conf';

export const config = {
  ...baseConfig,
  specs: ['../test/specs/**/*.ts'], 
  capabilities: [
    {
      browserName: 'firefox',
      'moz:firefoxOptions': {
        args: ['--width=768', '--height=1024'], 
      },
    },
  ],
};