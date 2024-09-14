import AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-east-1', // Replace with your preferred region
  accessKeyId: process.env.REACT_APP_AWS_KEY, // Store in environment variables
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY, // Store in environment variables
});

const comprehend = new AWS.Comprehend();

export default comprehend;
