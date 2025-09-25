export default function(eleventyConfig) {
  // Copy assets to output
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("static");
  
  // Set input and output directories
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
}
