import * as AttachmentQuery from "typedefs/attachment.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: AttachmentQuery.deleteAttachment,
    mutationName: "deleteAttachment",
    defaultPropName: "deleteAttachment"
  });
};
