import * as customerQuery from "typedefs/customer.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: customerQuery.createCustomer,
    mutationName: "createCustomer",
    defaultPropName: "createCustomer"
  });
};
