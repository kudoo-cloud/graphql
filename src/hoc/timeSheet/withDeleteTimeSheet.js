import { deleteTimeSheet } from 'typedefs/timeSheet.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteTimeSheet,
    mutationName: 'deleteTimeSheet',
    defaultPropName: 'deleteTimeSheet',
  });
};
