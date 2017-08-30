console.log("Starting notes.js")

module.exports.addNot= function(){
  console.log('addNot');
  return 'New note';
};

module.exports.add = (a,b) => {
  console.log("a+b");
  return a+b
}
