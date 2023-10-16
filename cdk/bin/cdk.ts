#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CodeGptStack } from '../lib/code-gpt-stack';

const app = new cdk.App();

new CodeGptStack(app, 'CodeGptStack', {
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});