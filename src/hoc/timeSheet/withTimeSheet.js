import { timeSheet } from 'typedefs/timeSheet.gql';
import withSingleNodeQuery from '../withSingleNodeQuery';

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: 'timeSheet',
    query: timeSheet,
    defaultPropName: 'timeSheet',
    functionName: 'getTimeSheet',
  });
};
