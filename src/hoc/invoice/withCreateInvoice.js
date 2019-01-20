import * as InvoiceQuery from "typedefs/invoice.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: InvoiceQuery.createInvoice,
    mutationName: "createInvoice",
    defaultPropName: "createInvoice"
  });
};
