import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { BlockPublicAccess, Bucket, BucketAccessControl, ObjectOwnership } from 'aws-cdk-lib/aws-s3';
import { AssetCode, FunctionUrlAuthType } from 'aws-cdk-lib/aws-lambda';

export class CodeGptStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // create s3 bucket for static website
    const bucket = new Bucket(this, 'code-gpt-ccmp', {
      bucketName: 'code-gpt-ccmp',
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: '404.html',
      publicReadAccess: true,
      objectOwnership: ObjectOwnership.OBJECT_WRITER,
      accessControl: BucketAccessControl.PUBLIC_READ,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // remove files when stack is deleted
      blockPublicAccess: new BlockPublicAccess({
        blockPublicAcls: false,
        ignorePublicAcls: false,
        blockPublicPolicy: false,
        restrictPublicBuckets: false,
      }),
    });

    const handler = new cdk.aws_lambda.Function(this, 'code-gpt-lambda', {
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      code: new AssetCode('lambda.zip'),
      handler: 'code-gpt-lambda.handler',
      environment: {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
      },
      timeout: cdk.Duration.seconds(20),
    });

    // 👇 Setup lambda url
    const lambdaUrl = handler.addFunctionUrl({
      authType: FunctionUrlAuthType.NONE,
    });
  }
}
