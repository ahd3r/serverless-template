import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export const client = new DocumentClient({ region: 'us-east-1', apiVersion: '2012-08-10' });
export const tableName = 'main';
