import * as TimeSheetsQuery from "typedefs/timeSheet.gql";
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "timeSheet",
    query: TimeSheetsQuery.timeSheet,
    defaultPropName: "timeSheet",
    functionName: "getTimeSheet"
  });
};
