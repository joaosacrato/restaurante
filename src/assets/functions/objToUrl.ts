export const objToUrl = (obj: any) => {
    let str = "";
    for (const prop in obj) {
      str = str + "&" + prop + "=" + obj[prop];
    }
    return str;
  };