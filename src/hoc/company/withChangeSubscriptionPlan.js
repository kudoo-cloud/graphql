import { changeSubscriptionPlan } from "typedefs/company.gql";
import withMutation from "../withMutation";

export default (config) => {
  return withMutation({
    config,
    mutation: changeSubscriptionPlan,
    mutationName: "changeSubscriptionPlan",
    defaultPropName: "changeSubscriptionPlan",
  });
};
