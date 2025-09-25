export default function(eleventyConfig) {
  // Copy assets to output
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("static");
  
  // Add date filter
  eleventyConfig.addFilter("date", function(date, format) {
    if (!date) return '';
    
    const d = new Date(date);
    if (isNaN(d.getTime())) return '';
    
    if (format === "MM/dd/yyyy") {
      return d.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      });
    }
    
    // Format: "January 1st, 2025"
    const month = d.toLocaleDateString('en-US', { month: 'long' });
    const day = d.getDate();
    const year = d.getFullYear();
    
    // Add ordinal suffix (st, nd, rd, th)
    const getOrdinalSuffix = (day) => {
      if (day >= 11 && day <= 13) {
        return 'th';
      }
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
    
    return `${month} ${day}${getOrdinalSuffix(day)}, ${year}`;
  });
  
  // Add blog collection
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md").sort(function(a, b) {
      return b.date - a.date; // Sort by date, newest first
    });
  });
  
  // Add featured posts collection
  eleventyConfig.addCollection("featuredPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md")
      .filter(post => post.data.featured)
      .sort(function(a, b) {
        return b.date - a.date;
      })
      .slice(0, 3); // Limit to 3 posts
  });
  
  // Set input and output directories
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
}
