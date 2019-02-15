import * as ledgerPostingQuery from "typedefs/ledgerPosting.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: ledgerPostingQuery.deleteLedgerPosting,
    mutationName: "deleteLedgerPosting",
    defaultPropName: "deleteLedgerPosting"
  });
};
