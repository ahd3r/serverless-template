export const a_random_balance_operation_is_performed = () => {
  return {
    account_id: 123456789012,
    payee: 'test-payee',
    reference: Math.floor(Math.random() * 1000000),
    balance: 100,
    currency: 'GBP',
    timestamp: '1970-01-01T00:00:00.000Z',
    type: 'create_balance',
  }
}

export type ReconOperation = ReturnType<typeof a_random_balance_operation_is_performed>
