import { supplier } from 'typedefs/supplier.gql';
import withSingleNodeQuery from '../withSingleNodeQuery';

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: 'supplier',
    query: supplier,
    defaultPropName: 'supplier',
    functionName: 'getSupplier',
  });
};
