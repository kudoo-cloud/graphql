import { banks } from 'typedefs/bank.gql';
import withPaginationQuery from '../withPaginationQuery';

export default (config = () => {}, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: 'banks',
    query: banks,
    queryName: 'banks',
  });
};
