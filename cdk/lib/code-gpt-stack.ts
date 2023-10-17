import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
// import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { AnyPrincipal, Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';

export class CodeGptStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create s3 bucket for static website
    const bucket = new Bucket(this, 'code-gpt-ccmp', {
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: '404.html',
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // remove files when stack is deleted
    });

    // add bucket policy to allow public read access
    // const bucketPolicy = new PolicyStatement({
    //   sid: 'PublicReadAccess',
    //   effect: Effect.ALLOW,
    //   actions: ['s3:GetObject'],
    //   principals: [new AnyPrincipal()],
    //   resources: [bucket.arnForObjects('*')],
    // });

    // bucket.addToResourcePolicy(bucketPolicy);

    // Deployed through git actions
    // // deploy website files to bucket
    // new BucketDeployment(this, 'DeployWebsite', {
    //   sources: [Source.asset('./website')],
    //   destinationBucket: bucket,
    // });
  }
}
