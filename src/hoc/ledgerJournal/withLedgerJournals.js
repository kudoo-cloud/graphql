import * as query from "typedefs/ledgerJournal.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config: any = () => {}, responseFun?: Function) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "ledgerJournals",
    query: query.ledgerJournals,
    queryName: "ledgerJournals"
  });
};
