const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-index-page-js": hot(preferDefault(require("D:\\2020-code\\in-prod\\musthaveskill\\src\\templates\\index-page.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("D:\\2020-code\\in-prod\\musthaveskill\\src\\templates\\blog-post.js"))),
  "component---src-templates-about-page-js": hot(preferDefault(require("D:\\2020-code\\in-prod\\musthaveskill\\src\\templates\\about-page.js"))),
  "component---src-templates-product-page-js": hot(preferDefault(require("D:\\2020-code\\in-prod\\musthaveskill\\src\\templates\\product-page.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("D:\\2020-code\\in-prod\\musthaveskill\\src\\templates\\tags.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\2020-code\\in-prod\\musthaveskill\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\2020-code\\in-prod\\musthaveskill\\src\\pages\\404.js"))),
  "component---src-pages-blog-index-js": hot(preferDefault(require("D:\\2020-code\\in-prod\\musthaveskill\\src\\pages\\blog\\index.js"))),
  "component---src-pages-contact-examples-js": hot(preferDefault(require("D:\\2020-code\\in-prod\\musthaveskill\\src\\pages\\contact\\examples.js"))),
  "component---src-pages-contact-file-upload-js": hot(preferDefault(require("D:\\2020-code\\in-prod\\musthaveskill\\src\\pages\\contact\\file-upload.js"))),
  "component---src-pages-contact-index-js": hot(preferDefault(require("D:\\2020-code\\in-prod\\musthaveskill\\src\\pages\\contact\\index.js"))),
  "component---src-pages-contact-thanks-js": hot(preferDefault(require("D:\\2020-code\\in-prod\\musthaveskill\\src\\pages\\contact\\thanks.js"))),
  "component---src-pages-tags-index-js": hot(preferDefault(require("D:\\2020-code\\in-prod\\musthaveskill\\src\\pages\\tags\\index.js")))
}

