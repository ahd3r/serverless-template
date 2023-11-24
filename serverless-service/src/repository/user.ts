import { client, tableName } from '../utils/db';

export interface User {
  pk: string;
  sk: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export const getUsers = async (
  pk: string,
  sk: string = undefined,
  filter: Partial<Omit<User, 'pk' | 'sk'>> = {}
): Promise<any> => {
  const paramFilter = Object.entries(JSON.parse(JSON.stringify({ ...filter, entity: pk, id: sk })));
  const users = await client
    .query({
      TableName: tableName,
      ExpressionAttributeValues: paramFilter,
      FilterExpression: Object.keys(paramFilter)
        .map((key) => `${key} = :${key}`)
        .join(' AND ')
    })
    .promise();
  return users;
};

export const getUser = async (pk: string, sk: string = undefined): Promise<any> => {
  const filter = JSON.parse(JSON.stringify({ entity: pk, id: sk }));
  const user = await client.get({ TableName: tableName, Key: filter }).promise();
  return user;
};

export const createUser = async (data: User): Promise<any> => {};

export const updateUser = async (filter: Partial<User>, data: Partial<User>): Promise<any> => {};

export const deleteUser = async (filter: Partial<User>): Promise<any> => {};
