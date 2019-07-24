import { createBank } from 'typedefs/bank.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createBank,
    mutationName: 'createBank',
    defaultPropName: 'createBank',
  });
};
