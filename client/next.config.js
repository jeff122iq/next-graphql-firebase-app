const withImages = require('next-images')

module.exports = {
  future: {
    webpack5: false,
  },
  ...withImages({
    fileExtensions: ["jpg", "jpeg", "png", "gif"],
  }),
}