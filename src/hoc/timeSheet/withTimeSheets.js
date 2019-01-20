import * as TimeSheetsQuery from "typedefs/timeSheet.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "timeSheets",
    query: TimeSheetsQuery.timeSheets,
    queryName: "timeSheets",
    functionName: "getTimeSheets"
  });
};
