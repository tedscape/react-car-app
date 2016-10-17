module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/forbid-prop-types": "off",
        "linebreak-style": "off"
    },
    "env": {
        "browser": true,
        "node": true,
        "jasmine": true
  },
};