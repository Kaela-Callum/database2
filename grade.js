var table = module.exports.table(); 

table.read(function (context) {
  return context.execute();
});

table.insert(function (context) {
  return context.execute();
});

table.update(function (context) {
  return context.execute();
});
