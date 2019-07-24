import { pbsTPP } from 'typedefs/pbsTPP.gql';
import withSingleNodeQuery from '../withSingleNodeQuery';

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: 'pbsTPP',
    query: pbsTPP,
    defaultPropName: 'pbsTPP',
  });
};
