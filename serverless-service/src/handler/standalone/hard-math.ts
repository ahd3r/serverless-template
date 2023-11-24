import middy from '@middy/core';
import { ProxyHandler } from 'aws-lambda';

const calculationHandler: ProxyHandler = async (event) => {};

export const handler = middy(calculationHandler);
