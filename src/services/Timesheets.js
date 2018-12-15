import graphqlRequest from "./Request";
import * as TimesheetQuery from "typedefs/timesheet.gql";

class Timesheets {
  static async getAll({ filters, orders } = {}) {
    return graphqlRequest.getAll("timeSheets", TimesheetQuery.timeSheets, {
      filters,
      orders
    });
  }
}

export default Timesheets;
