const fs = require('fs');
const path = require('path');

const packages = fs.readdirSync(path.resolve(__dirname, 'packages'));
const apps = fs.readdirSync(path.resolve(__dirname, 'apps'));

module.exports = {
  extends: ['@commitlint/config-conventional'],
  prompt: {
    types: [
      {
        value: 'feat',
        name: 'feat:     ✨  A new feature',
        emoji: ':sparkles:',
      },
      { value: 'fix', name: 'fix:      🐛  A bug fix', emoji: ':bug:' },
      {
        value: 'docs',
        name: 'docs:     📝  Documentation only changes',
        emoji: ':memo:',
      },
      {
        value: 'style',
        name: 'style:    💄  Changes that do not affect the meaning of the code',
        emoji: ':lipstick:',
      },
      {
        value: 'refactor',
        name: 'refactor: ♻️   A code change that neither fixes a bug nor adds a feature',
        emoji: ':recycle:',
      },
      {
        value: 'perf',
        name: 'perf:     ⚡️  A code change that improves performance',
        emoji: ':zap:',
      },
      {
        value: 'test',
        name: 'test:     ✅  Adding missing tests or correcting existing tests',
        emoji: ':white_check_mark:',
      },
      {
        value: 'build',
        name: 'build:    📦️   Changes that affect the build system or external dependencies',
        emoji: ':package:',
      },
      {
        value: 'chore',
        name: "chore:    🔨  Other changes that don't modify src or test files",
        emoji: ':hammer:',
      },
      {
        value: 'revert',
        name: 'revert:   ⏪️  Reverts a previous commit',
        emoji: ':rewind:',
      },
    ],
    useEmoji: true,
    scopes: ['base', ...apps, ...packages],
    enableMultipleScopes: true,
    maxSubjectLength: 50,
  },
};
