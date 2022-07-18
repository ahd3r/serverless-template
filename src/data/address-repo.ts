import { query, fromItem, put, toItem } from '@payconstruct/pp-service-utils'
import { Address, User } from '../api/user-address/sync/types'

const TableName = process.env.TABLE_NAME || 'dev-service-templatev2-DB'

const getAddressKey = (userId: string, addressId?: string) => {
  if (addressId) {
    return {
      PK: `user#${userId}`,
      SK: `test#${addressId}`,
    }
  }
  return { PK: `user#${userId}` }
}
export const listUserAddresses = async (userId: string) => {
  const { PK } = getAddressKey(userId)
  const result = await query({
    TableName,
    KeyConditionExpression: 'PK = :pk ',
    ExpressionAttributeValues: { ':pk': PK },
  })
  if (result.Items) {
    return result.Items.map(item => fromItem<Address | User>(item))
  }
  throw new Error('No addresses found')
}

export const putAddress = async (address: Address, userId: string) => {
  const primaryKey = {
    PK: `user#${userId}`,
    SK: `test#${address.name}`,
  }

  await put({
    TableName,
    Item: toItem(address, primaryKey),
  })
}
