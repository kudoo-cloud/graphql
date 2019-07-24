import { timeSheets } from 'typedefs/timeSheet.gql';
import withPaginationQuery from '../withPaginationQuery';

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: 'timeSheets',
    query: timeSheets,
    queryName: 'timeSheets',
    functionName: 'getTimeSheets',
  });
};
