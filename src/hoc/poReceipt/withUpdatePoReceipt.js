import { updatePoReceipt } from 'typedefs/poReceipt.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updatePoReceipt,
    mutationName: 'updatePoReceipt',
    defaultPropName: 'updatePoReceipt',
  });
};
