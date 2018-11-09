module.exports = function(config) {

  // just pass the css we find through to the dist folder
  config.addPassthroughCopy("src");

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
