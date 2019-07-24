import { pbsTpps } from 'typedefs/pbsTPP.gql';
import withPaginationQuery from '../withPaginationQuery';

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: 'pbsTPPs',
    query: pbsTpps,
    queryName: 'pbsTPPs',
  });
};
