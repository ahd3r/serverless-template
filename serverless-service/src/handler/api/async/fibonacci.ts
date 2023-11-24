import middy from '@middy/core';
import { ProxyHandler } from 'aws-lambda';

const fiboHandler: ProxyHandler = async (event) => {};

export const handler = middy(fiboHandler);
