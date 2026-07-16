import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addFilter("json", (value) => JSON.stringify(value, null, 2));

  eleventyConfig.addPassthroughCopy({ "site/assets": "." });
  eleventyConfig.addPassthroughCopy({ "site/js": "js" });
  eleventyConfig.addPassthroughCopy({ "public/zohoverify": "zohoverify" });

  eleventyConfig.addWatchTarget("./site/css/");
  eleventyConfig.addWatchTarget("./site/js/");

  eleventyConfig.ignores.add("site-export/**");

  return {
    dir: {
      input: "site",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md", "11ty.js"],
  };
}
