module.exports = function(config) {


  return {

    // what goes where?
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    },
    
    // some handy options
    templateFormats : ["html", "js"],
    passthroughFileCopy: true

  };
};
