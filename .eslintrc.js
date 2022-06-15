module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: [ "@joekarow/eslint-config-netwerkr", "next/babel" ],
  settings: {
    next: {
      rootDir: [ "apps/*/" ],
    },
  },
};
