import { createPbsTPP } from 'typedefs/pbsTPP.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createPbsTPP,
    mutationName: 'createPbsTPP',
    defaultPropName: 'createPbsTPP',
  });
};
