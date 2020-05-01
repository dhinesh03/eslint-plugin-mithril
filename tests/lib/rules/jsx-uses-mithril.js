/**
 * @fileoverview Tests for jsx-uses-mithril
 * @author Michael Schmid
 */

'use strict';

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

const eslint = require('eslint');
const rule = require('eslint/lib/rules/no-unused-vars');

const RuleTester = eslint.RuleTester;

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true
  }
};

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester({parserOptions});
const linter = ruleTester.linter || eslint.linter;
linter.defineRule('jsx-uses-mithril', require('../../../lib/rules/jsx-uses-mithril'));

ruleTester.run('no-unused-vars', rule, {
  valid: [
    {code: '/*eslint jsx-uses-mithril:1*/ import foo from "mithril"; <div />;'},
    {code: '/*eslint jsx-uses-mithril:1*/ import foo from "mithril"; (function () { <div /> })();'},
  ],
  invalid: [{
    code: '/*eslint jsx-uses-mithril:1*/ import foo from "mithril"',
    errors: [{message: '\'foo\' is defined but never used.'}]
  }]
});