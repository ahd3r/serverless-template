// For this type of lambda, trigger might be:
// EVENT BRIDGE, MQ, SQS, SNS
import middy from '@middy/core';
import { ProxyHandler } from 'aws-lambda';

const notificationHandler: ProxyHandler = async (event) => {};

export const handler = middy(notificationHandler);
