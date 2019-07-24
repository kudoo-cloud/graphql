import { updateTimeSheet } from 'typedefs/timeSheet.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateTimeSheet,
    mutationName: 'updateTimeSheet',
    defaultPropName: 'updateTimeSheet',
  });
};
