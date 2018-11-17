import graphqlRequest from "./index";
import * as TimeSheetEntryQuery from "shared/graphql/typedefs/timeSheetEntry.gql";

class TimesheetEntries {
  static async getAll({ filters, orders } = {}) {
    return graphqlRequest.getAll(
      "timeSheetEntries",
      TimeSheetEntryQuery.timeSheetEntries,
      {
        filters,
        orders
      }
    );
  }
}

export default TimesheetEntries;
