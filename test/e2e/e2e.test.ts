import { a_random_balance_operation_is_performed } from './given'
import { a_balance_event_is_fired } from './when'
import { balance_updated_in_Recon_Table } from './then'
import { sleep } from '../../src/utils/helpers'

describe('Balance Recon', () => {
  it('should create a balance', async () => {
    const operation = a_random_balance_operation_is_performed()
    const balanceEvent = await a_balance_event_is_fired(operation)
    expect(balanceEvent).toBeTruthy()
    expect(balanceEvent.FailedEntryCount).toBe(0)
    await sleep(5000)
    const balance = await balance_updated_in_Recon_Table(operation.account_id, operation.reference)
    expect(balance).toEqual({
      pk: `account#${operation.account_id}`,
      sk: `balance#${operation.reference}`,
      balance: operation.balance,
      currency: operation.currency,
      timestamp: operation.timestamp,
      type: operation.type,
    })
  })
})
