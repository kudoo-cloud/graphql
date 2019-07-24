import { timeSheetNotify } from 'typedefs/timeSheet.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: timeSheetNotify,
    mutationName: 'timeSheetNotify',
    defaultPropName: 'timeSheetNotify',
  });
};
