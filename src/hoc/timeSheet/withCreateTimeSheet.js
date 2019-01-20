import * as TimeSheetsQuery from "typedefs/timeSheet.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: TimeSheetsQuery.createTimeSheet,
    mutationName: "createTimeSheet",
    defaultPropName: "createTimeSheet"
  });
};
