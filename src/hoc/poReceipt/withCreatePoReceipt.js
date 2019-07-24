import { createPoReceipt } from 'typedefs/poReceipt.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createPoReceipt,
    mutationName: 'createPoReceipt',
    defaultPropName: 'createPoReceipt',
  });
};
