import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { BlockPublicAccess, Bucket, BucketAccessControl } from 'aws-cdk-lib/aws-s3';

export class CodeGptStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // create s3 bucket for static website
    const bucket = new Bucket(this, 'code-gpt-ccmp', {
      bucketName: 'code-gpt-ccmp',
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: '404.html',
      publicReadAccess: true,
      accessControl: BucketAccessControl.PUBLIC_READ,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // remove files when stack is deleted
      blockPublicAccess: new BlockPublicAccess({
        blockPublicAcls: false,
        ignorePublicAcls: false,
        blockPublicPolicy: false,
        restrictPublicBuckets: false,
      }),
    });
  }
}
