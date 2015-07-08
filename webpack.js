var webpack = require("webpack");
var config = require('./webpack.config.js');
var compiler = webpack(config);

console.log('Watching..');
compiler.watch({ // watch options:
  aggregateTimeout: 300, // wait so long for more changes
  poll: true // use polling instead of native watchers
  // pass a number to set the polling interval
}, function(err, stats) {
  if(err)
    console.log(err);
  var jsonStats = stats.toJson();
  if(jsonStats.errors.length > 0)
      console.log(jsonStats.errors);
  if(jsonStats.warnings.length > 0)
      console.log(jsonStats.warnings);
  else {
    console.log("Succesfully compiled")
  }
  console.log("\n");
});
