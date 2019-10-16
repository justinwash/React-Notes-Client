const dev = {
  s3: {
    REGION: 'us-east-2',
    BUCKET: 'notes-app-api-dev-attachmentsbucket-1g9f7vrm7r2a3'
  },
  apiGateway: {
    REGION: 'us-east-2',
    URL: 'https://s4miwzl2dl.execute-api.us-east-2.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_CAc98Cc7m',
    APP_CLIENT_ID: '35jnalp1um641ncq9rtf68q3gq',
    IDENTITY_POOL_ID: 'us-east-2:b032b80a-9881-4502-99db-de68d9721576'
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: 'Ypk_test_RKj9DuXyCF45FxfiF1f1SCEW00iQoukBa9'
};

const prod = {
  s3: {
    REGION: 'us-east-2',
    BUCKET: 'notes-app-api-prod-attachmentsbucket-9wmkfw107t2t'
  },
  apiGateway: {
    REGION: 'us-east-2',
    URL: 'https://pr9w6yt7zj.execute-api.us-east-2.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_V3GHrokSQ',
    APP_CLIENT_ID: 'hrls2dh8kahjl51t9rmva7ffk',
    IDENTITY_POOL_ID: 'us-east-2:e99cf648-88b1-48d7-b84c-5ce196629326'
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: 'Ypk_test_RKj9DuXyCF45FxfiF1f1SCEW00iQoukBa9'
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
