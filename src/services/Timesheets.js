import graphqlRequest from "./Request";
import * as TimesheetQuery from "typedefs/timeSheet.gql";

class Timesheets {
  static async getAll({ where } = {}) {
    return graphqlRequest.getAll("timeSheets", TimesheetQuery.timeSheets, {
      where
    });
  }
}

export default Timesheets;
