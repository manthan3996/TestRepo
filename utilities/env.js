const path = require('path');
const dotenv = require('dotenv');

function loadEnvironment() {
  const env = process.env.ENV || 'local'; // default to local
  const envFile = path.resolve(process.cwd(), `.env.${env}`);

  const result = dotenv.config({ path: envFile });
  if (result.error) {
    throw result.error;
  }

  console.log(`Loaded environment: ${env} from ${envFile}`);
}

module.exports = { loadEnvironment };