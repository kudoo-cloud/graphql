import * as query from "typedefs/ledgerJournal.gql";
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "ledgerJournal",
    query: query.ledgerJournal,
    defaultPropName: "ledgerJournal"
  });
};
