const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  core.setOutput("gif", 'https://preview.redd.it/xpnb8ey0eug11.jpg?auto=webp&s=90aee345723db4371e8ab0bb89889513141d45c4');
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}