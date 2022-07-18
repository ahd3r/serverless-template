import { sendEvents, prepareEvent } from '@payconstruct/pp-service-utils'
import { ReconOperation } from './given'

export const a_balance_event_is_fired = (ReconOpearation: ReconOperation) => {
  const event = prepareEvent(ReconOpearation, 'create_balance', 'FireBlocks_adapter')
  return sendEvents([event])
}
