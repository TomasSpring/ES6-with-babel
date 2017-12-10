module.exports = function (source) {
  
  var value = typeof source === "string" ? JSON.parse(source) : source;

  value = JSON.stringify(value)
    .replace("/[0-9]/g", '');
    

  return `module.exports = ${value}`;
}