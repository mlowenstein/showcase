/** General Utility Functions: */

/** Custom grouping function for an input array. */
export const groupBy = function(array: any[], key: string): any[] {
  return array.reduce(function(obj, x) {
    (obj[x[key]] = obj[x[key]] || []).push(x);
    return obj;
  }, {});
};

/** Custom duplicate-removal function for an input array. */
export const unique = function(array: any[]): any[] {
  let vals = '';
  let keys: string[];
  let newarray: any[];
  let unique: any = {};
  newarray = [];
  array.forEach(item => {
    vals = '';
    keys = Object.keys(item);
    keys.forEach(key => {
      vals += item[key] + ' ';
    });
    if (!unique[vals]) {
      newarray.push(item);
    }
    unique[vals] = item;
  });
  return newarray;
};

/** Another generic sorting function used for sorting an array
 * of units by an input parameter (property), which changes,
 * depending on the level at which a hierarchy field is
 * is situated in the tree. */
export const getSorted = function(prop: string) {
  return function (a: any, b: any) {
    if (a[prop] > b[prop]) { return 1; }
    if (a[prop] < b[prop]) { return -1; }
    return 0;
  };
};

/** Functional-style method for inserting
 * task-subtype filters into the correct
 * position in the task-types filter array. */
export const insertHere = function(item: any, pid: string, loc: string, array: any[]) {
  let idx: number;
  let moditem: any;
  moditem = {
    id: pid,
    type: loc,
    fid: item.id,
    name: item.name,
    count: item.count,
    ischild: true,
    selected: true
  };
  idx = array.findIndex(fil => fil.name === loc);
  array.splice(idx + 1, 0, moditem);
  array[idx].haschild = true;
  return array;
};

/** Creates a random 4-char chunk which will be
 * concatenated with other chunks to make our
 * randomly-generated GUID for batch-posts. */
export const segment = function(): string {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};

/** Creates a random 32-character GUID for
 * batch POST requests, requiring idrec +
 * idrecparent values. */
export const generate = function (): string {
  return (
    segment() + segment() + segment()
    + '4' + segment().substr(0, 3)
    + segment() + segment()
    + segment() + segment()
  ).toLowerCase();
};
