import { wareHouse } from 'typedefs/wareHouse.gql';
import withSingleNodeQuery from '../withSingleNodeQuery';

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: 'wareHouse',
    query: wareHouse,
    defaultPropName: 'wareHouse',
    functionName: 'getWareHouse',
  });
};
