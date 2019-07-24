import { createTimeSheet } from 'typedefs/timeSheet.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createTimeSheet,
    mutationName: 'createTimeSheet',
    defaultPropName: 'createTimeSheet',
  });
};
