import { get } from '@payconstruct/pp-service-utils/dist/aws/DynamoDB'

export const balance_updated_in_Recon_Table = (account_id: number, reference: number) => {
  const balanceKey = {
    pk: `account#${account_id}`,
    sk: `balance#${reference}`,
  }
  return get({
    TableName: 'Recon',
    Key: balanceKey,
  })
}
