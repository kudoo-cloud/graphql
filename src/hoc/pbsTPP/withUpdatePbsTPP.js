import { updatePbsTPP } from 'typedefs/pbsTPP.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updatePbsTPP,
    mutationName: 'updatePbsTPP',
    defaultPropName: 'updatePbsTPP',
  });
};
