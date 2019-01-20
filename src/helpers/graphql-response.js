import get from "lodash/get";

export const handleMutationResponse = (res, key) => {
  const errors: any = get(res, `errors`, []);
  if (errors && errors.length > 0) {
    const str = errors.map(msg => `${msg.message}`) || [];
    return { error: str, success: false, result: null };
  }
  const result: any = get(res, `data.${key}`, null);
  if (result) {
    return { error: null, success: true, result };
  }
};
