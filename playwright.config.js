// @ts-chec
import {chromium,defineConfig,devices} from '@playwright/test';
import { config } from 'node:process';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout : 40000,
  expect :{
    timeout:10000
  },
reporter : ['html','line'],
  /* Configure projects for major browsers */
screenshot : 'only-on-failure',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
        headless:false
       }
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});