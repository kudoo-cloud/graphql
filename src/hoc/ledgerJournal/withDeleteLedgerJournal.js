import * as query from "typedefs/ledgerJournal.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: query.deleteLedgerJournal,
    mutationName: "deleteLedgerJournal",
    defaultPropName: "deleteLedgerJournal"
  });
};
