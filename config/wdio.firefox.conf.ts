import { config as baseConfig } from '../wdio.conf';

export const config = {
  ...baseConfig,
  capabilities: [
    {
      browserName: 'firefox',
      'moz:firefoxOptions': {
        args: process.env.HEADLESS === 'true' ? ['-headless'] : [],
      }
    }
  ],
  baseUrl: process.env.BASE_URL || 'https://telnyx.com',
  maxInstances: process.env.MAX_INSTANCES ? parseInt(process.env.MAX_INSTANCES) : 1,
};