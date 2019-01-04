import graphqlRequest from "./Request";
import * as TimeSheetEntryQuery from "typedefs/timeSheetEntry.gql";

class TimesheetEntries {
  static async getAll({ where } = {}) {
    return graphqlRequest.getAll(
      "timeSheetEntries",
      TimeSheetEntryQuery.timeSheetEntries,
      {
        where
      }
    );
  }
}

export default TimesheetEntries;
