import { bank } from 'typedefs/bank.gql';
import withSingleNodeQuery from '../withSingleNodeQuery';

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: 'bank',
    query: bank,
    defaultPropName: 'bank',
  });
};
