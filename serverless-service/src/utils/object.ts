export const cleanAndCopyObject = (
  obj,
  values: any[] = ['', undefined, null],
  deep = false,
  array = false
) => {
  let object = Array.isArray(obj) ? [...obj] : { ...obj };
  if (Array.isArray(object)) {
    if (!array) {
      return object;
    }
    object = object.filter((value) => !values.includes(value));
    if (deep) {
      object.forEach((value, i) => {
        if (typeof value === 'object' && value !== null) {
          object[i] = cleanAndCopyObject(object[i], values, deep, array);
        }
      });
    }
  } else {
    Object.entries(object).forEach(([key, value]: [string, any]) => {
      if (values.includes(value)) {
        delete object[key];
        return;
      }
      if (deep) {
        if (typeof value === 'object' && value !== null) {
          object[key] = cleanAndCopyObject(object[key], values, deep, array);
        }
      }
    });
  }
  return object;
};
