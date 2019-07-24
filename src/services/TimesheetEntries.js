import graphqlRequest from './Request';
import { timeSheetEntries } from 'typedefs/timeSheetEntry.gql';

class TimesheetEntries {
  static async getAll({ where } = {}) {
    return graphqlRequest.getAll('timeSheetEntries', timeSheetEntries, {
      where,
    });
  }
}

export default TimesheetEntries;
