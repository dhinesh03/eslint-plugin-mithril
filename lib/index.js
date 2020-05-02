/**
 * @fileoverview Mithril specific linting rules for ESLint
 * @author Dhinesh
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");
const has = require('has');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
var allRules = requireIndex(__dirname + "/rules");

function configureAsError(rules) {
    const result = {};
    for (const key in rules) {
        if (!has(rules, key)) {
            continue;
        }
        result[`mithril/${key}`] = 2;
    }
    return result;
}

const activeRulesConfig = configureAsError(allRules);

module.exports = {
    rules: allRules,
    configs: {
      recommended: {
        plugins: [
          'mithril'
        ],
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          }
        },
        rules: {
          'mithril/jsx-key': 2,
          'mithril/jsx-no-comment-textnodes': 2,
          'mithril/jsx-no-duplicate-props': 2,
          'mithril/jsx-no-target-blank': 2,
          'mithril/jsx-no-undef': 2,
          'mithril/jsx-uses-mithril': 2,
          'mithril/jsx-uses-vars': 2
        }
      },
      all: {
        plugins: [
          'mithril'
        ],
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          }
        },
        rules: activeRulesConfig
      }
    }
  };


