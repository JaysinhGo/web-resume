const _ = require("lodash");
let obj = {};
export default {
  getAllData: () => {
    return obj;
  },
  getData: (key) => {
    return _.get(obj, key, "");
  },
  setAllData: (data) => {
    obj = data;
  },
  setData: (key, data) => {
    _.set(obj, key, data);
  },
};
