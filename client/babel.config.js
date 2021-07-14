module.exports = {
  "presets": [ "next/babel" ],
  "plugins": [
    [
      "inline-react-svg",
      {
        "ignorePattern": '(?:^(?:\\.\\.\\/)*(?!public)[^\\/\\\\.]+|public\\/(?!inline-svg)[^/\\\\]+)'
      }
    ],
    [
      "babel-plugin-styled-components",
      {
        "fileName": false
      },
    ]
  ]
}
