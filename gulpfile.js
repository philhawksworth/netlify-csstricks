var gulp  = require('gulp');
var shell = require('gulp-shell');
var axios = require('axios');
var fs    = require('fs');

// load environment variables
require('dotenv').config()



/*
 Run our static site generator to build the pages
*/
gulp.task('generate', shell.task('eleventy'));




/*
 Collect form data to use in a build
*/
gulp.task("get-data", function(done) {

  // get all submissions from from approved comment form
  var oauth_token = process.env.NETLIFY_TOKEN;
  var formID = "5b4e0b9d05c417177d0c1340";
  var url = `https://api.netlify.com/api/v1/forms/${formID}/submissions/?access_token=${oauth_token}`;

  axios.get(url).then(function(response) {
    fs.writeFile('src/_data/contacts.json', JSON.stringify(response.data), function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log('Saved!');
      }
    });
    // done();
  }).catch(function (error) {
    console.log(error);
  });
  done();

});




/*
  Let's get the data we need and then build this sucker.
*/
gulp.task('build', gulp.series(
  'get-data',
  'generate'
));
