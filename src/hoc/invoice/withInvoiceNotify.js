import * as InvoiceQuery from "typedefs/invoice.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: InvoiceQuery.invoiceNotify,
    mutationName: "invoiceNotify",
    defaultPropName: "invoiceNotify"
  });
};
