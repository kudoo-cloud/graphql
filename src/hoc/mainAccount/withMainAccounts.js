import { mainAccounts } from 'typedefs/mainAccount.gql';
import withPaginationQuery from '../withPaginationQuery';

export default (config = () => {}, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: 'mainAccounts',
    query: mainAccounts,
    queryName: 'mainAccounts',
  });
};
