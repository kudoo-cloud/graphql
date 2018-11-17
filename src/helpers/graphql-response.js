import get from "lodash/get";

export const handleMutationResponse = (res, key) => {
  const result = get(res, `data.${key}.result`, null);
  if (get(res, `data.${key}.successful`, false)) {
    return { error: null, success: true, result };
  }

  const msgs = get(res, `data.${key}.messages`, []);
  let str = [];
  str = msgs.map(msg => `${msg.field || ""} ${msg.message}`);
  return { error: str, success: false, result };
};
