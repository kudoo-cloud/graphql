import { deletePoReceipt } from 'typedefs/poReceipt.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deletePoReceipt,
    mutationName: 'deletePoReceipt',
    defaultPropName: 'deletePoReceipt',
  });
};
