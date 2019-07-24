import { timeSheetApprove } from 'typedefs/timeSheet.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: timeSheetApprove,
    mutationName: 'timeSheetApprove',
    defaultPropName: 'timeSheetApprove',
  });
};
