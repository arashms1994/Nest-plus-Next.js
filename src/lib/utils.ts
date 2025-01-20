import "server-only";
import { set } from "lodash";

export function formDataToObject<T extends Record<string, any>>(
  formData: FormData
): T {
  const obj: T = {} as T;

  for (const [key, value] of formData.entries()) {
    set(obj, key, value);
  }

  return obj;
}
