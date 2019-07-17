import * as patientQuery from "typedefs/patient.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: patientQuery.updatePatient,
    mutationName: "updatePatient",
    defaultPropName: "updatePatient"
  });
};
