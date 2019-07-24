import graphqlRequest from './Request';
import { timeSheets } from 'typedefs/timeSheet.gql';

class Timesheets {
  static async getAll({ where } = {}) {
    return graphqlRequest.getAll('timeSheets', timeSheets, {
      where,
    });
  }
}

export default Timesheets;
