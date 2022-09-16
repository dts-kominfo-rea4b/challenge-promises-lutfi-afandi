const {
  promiseTheaterIXX,
  promiseTheaterVGC
} = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = (hasil) => {
  return new Promise((resolve, reject) => {
    if (hasil == '' || hasil == undefined) {
      reject('hasil not found!');
    } else {
      const ixx = promiseTheaterIXX;
      const vgc = promiseTheaterVGC;
      resolve(ixx, vgc);
    }
  });

};




module.exports = {
  promiseOutput,
};