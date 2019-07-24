import { mainAccount } from 'typedefs/mainAccount.gql';
import withSingleNodeQuery from '../withSingleNodeQuery';

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: 'mainAccount',
    query: mainAccount,
    defaultPropName: 'mainAccount',
  });
};
