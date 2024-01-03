const getArgs = require('./helpers/arges');

const startCLi = () => {
  const arges = getArgs(process.argv)
  console.log(arges);
  if (arges.h) {
    //  help
  }
  if (arges.s) {
    //  save city
  }
  if (arges.t) {
    //  save token
  }
  // Rsult
}
startCLi()