module.exports = function() {
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    },
    templateFormats : ["njk", "md"]
  };
};
