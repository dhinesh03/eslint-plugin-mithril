/**
 * @fileoverview Prevent Mithril to be incorrectly marked as unused
 * @author Michael Schmid
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
        description: "Prevent Mithril to be incorrectly marked as unused",
        category: "Best Practices",
        recommended: true,
    },
    fixable: null,
  },

  create (context) {
    let mithrilVariable;
    return {
        ImportDeclaration: function (node) {
            if (node.source.value === 'mithril') {
                mithrilVariable = node.specifiers[0].local.name
            }
        },
        JSXElement: function (node) {
            context.markVariableAsUsed(mithrilVariable)
        }
    }
  },
};
