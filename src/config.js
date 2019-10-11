const dev = {
  s3: {
    REGION: 'us-east-2',
    BUCKET: 'jkw-attachments'
  },
  apiGateway: {
    REGION: 'us-east-2',
    URL: 'https://qxak5psh18.execute-api.us-east-2.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_k3I56jBNT',
    APP_CLIENT_ID: '48qc18go6vhi45k7939eqdo0se',
    IDENTITY_POOL_ID: 'us-east-2:fac63338-a2e7-4859-9c5b-ecaf9ccd477b'
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: 'Ypk_test_RKj9DuXyCF45FxfiF1f1SCEW00iQoukBa9'
};

const prod = {
  s3: {
    REGION: 'us-east-2',
    BUCKET: 'jkw-attachments'
  },
  apiGateway: {
    REGION: 'us-east-2',
    URL: 'https://8iyksg6w5b.execute-api.us-east-2.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_k3I56jBNT',
    APP_CLIENT_ID: '48qc18go6vhi45k7939eqdo0se',
    IDENTITY_POOL_ID: 'us-east-2:fac63338-a2e7-4859-9c5b-ecaf9ccd477b'
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
