import { client, tableName } from '../utils/db';

export interface Admin {
  entity: string; // pk
  id: string; // sk
  email: string; // index
  isRoot: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const getAdmins = async (pk: string, sk?: string, filter?: Partial<Admin>): Promise<any> => {
  const admins = await client.query({ TableName: tableName }).promise();
  return admins;
};

export const getAdmin = async (pk?: string, sk?: string, filter?: Partial<Admin>): Promise<any> => {
  const admin = await client.get({ TableName: tableName, Key: filter }).promise();
  return admin;
};

export const createAdmin = async (data: Admin): Promise<any> => {};

export const updateAdmin = async (filter: Partial<Admin>, data: Partial<Admin>): Promise<any> => {};

export const deleteAdmin = async (filter: Partial<Admin>): Promise<any> => {};
