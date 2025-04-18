import { config as baseConfig } from '../wdio.conf';

export const config = {
  ...baseConfig,
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: process.env.HEADLESS === 'true' ? ['--headless', '--disable-gpu'] : [],
      }
    }
  ],
  baseUrl: process.env.BASE_URL || 'https://telnyx.com',
  maxInstances: process.env.MAX_INSTANCES ? parseInt(process.env.MAX_INSTANCES) : 1,
};
