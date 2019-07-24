import { deletePbsTPP } from 'typedefs/pbsTPP.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deletePbsTPP,
    mutationName: 'deletePbsTPP',
    defaultPropName: 'deletePbsTPP',
  });
};
