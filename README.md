# eslint-plugin-mithril
Mithril specific linting rules for ESLint

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-mithril`:

```
$ npm install eslint-plugin-mithril --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-mithril` globally.

## Usage

Use [our preset](#recommended) to get reasonable defaults:

```json
  "extends": [
    "eslint:recommended",
    "plugin:mithril/recommended"
  ]
```

If you do not use a preset you will need to specify individual rules and add extra configuration.

Add `mithril` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "mithril"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "mithril/jsx-uses-vars": 2
    }
}
```

## Supported Rules

## JSX-common rules
* [mithril/jsx-boolean-value](docs/rules/jsx-boolean-value.md): Enforce boolean attributes notation in JSX (fixable)
* [mithril/jsx-child-element-spacing](docs/rules/jsx-child-element-spacing.md): Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
* [mithril/jsx-closing-bracket-location](docs/rules/jsx-closing-bracket-location.md): Validate closing bracket location in JSX (fixable)
* [mithril/jsx-closing-tag-location](docs/rules/jsx-closing-tag-location.md): Validate closing tag location in JSX (fixable)
* [mithril/jsx-curly-spacing](docs/rules/jsx-curly-spacing.md): Enforce or disallow spaces inside of curly braces in JSX attributes and expressions (fixable)
* [mithril/jsx-equals-spacing](docs/rules/jsx-equals-spacing.md): Enforce or disallow spaces around equal signs in JSX attributes (fixable)
* [mithril/jsx-first-prop-new-line](docs/rules/jsx-first-prop-new-line.md): Enforce position of the first prop in JSX (fixable)
* [mithril/jsx-indent](docs/rules/jsx-indent.md): Validate JSX indentation (fixable)
* [mithril/jsx-indent-props](docs/rules/jsx-indent-props.md): Validate props indentation in JSX (fixable)
* [mithril/jsx-key](docs/rules/jsx-key.md): Validate JSX has key prop when in array or iterator
* [mithril/jsx-max-depth](docs/rules/jsx-max-depth.md): Validate JSX maximum depth
* [mithril/jsx-max-props-per-line](docs/rules/jsx-max-props-per-line.md): Limit maximum of props on a single line in JSX (fixable)
* [mithril/jsx-no-comment-textnodes](docs/rules/jsx-no-comment-textnodes.md): Prevent comments from being inserted as text nodes
* [mithril/jsx-no-duplicate-props](docs/rules/jsx-no-duplicate-props.md): Prevent duplicate props in JSX
* [mithril/jsx-no-literals](docs/rules/jsx-no-literals.md): Prevent usage of unwrapped JSX strings
* [mithril/jsx-no-target-blank](docs/rules/jsx-no-target-blank.md): Prevent usage of unsafe `target='_blank'`
* [mithril/jsx-no-undef](docs/rules/jsx-no-undef.md): Disallow undeclared variables in JSX
* [mithril/jsx-one-expression-per-line](docs/rules/jsx-one-expression-per-line.md): Limit to one expression per line in JSX
* [mithril/jsx-curly-brace-presence](docs/rules/jsx-curly-brace-presence.md): Enforce curly braces or disallow unnecessary curly braces in JSX
* [mithril/jsx-pascal-case](docs/rules/jsx-pascal-case.md): Enforce PascalCase for user-defined JSX components
* [mithril/jsx-props-no-multi-spaces](docs/rules/jsx-props-no-multi-spaces.md): Disallow multiple spaces between inline JSX props (fixable)
* [mithril/jsx-sort-default-props](docs/rules/jsx-sort-default-props.md): Enforce default props alphabetical sorting
* [mithril/jsx-sort-props](docs/rules/jsx-sort-props.md): Enforce props alphabetical sorting (fixable)
* [mithril/jsx-tag-spacing](docs/rules/jsx-tag-spacing.md): Validate whitespace in and around the JSX opening and closing brackets (fixable)
* [mithril/jsx-uses-mithril](docs/rules/jsx-uses-mithril.md): Prevent Mithril to be incorrectly marked as unused
* [mithril/jsx-uses-vars](docs/rules/jsx-uses-vars.md): Prevent variables used in JSX to be incorrectly marked as unused
* [mithril/jsx-wrap-multilines](docs/rules/jsx-wrap-multilines.md): Prevent missing parentheses around multilines JSX (fixable)

## Mithril specific rules

Comming soon


# Shareable configurations

## Recommended

This plugin exports a `recommended` configuration that enforces Mithril good practices.

To enable this configuration use the `extends` property in your `.eslintrc` config file:

```json
{
  "extends": ["eslint:recommended", "plugin:mithril/recommended"]
}
```

See [ESLint documentation](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information about extending configuration files.

The rules enabled in this configuration are:

* [mithril/jsx-key](docs/rules/jsx-key.md): Validate JSX has key prop when in array or iterator
* [mithril/jsx-no-comment-textnodes](docs/rules/jsx-no-comment-textnodes.md): Prevent comments from being inserted as text nodes
* [mithril/jsx-no-duplicate-props](docs/rules/jsx-no-duplicate-props.md): Prevent duplicate props in JSX
* [mithril/jsx-no-target-blank](docs/rules/jsx-no-target-blank.md): Prevent usage of unsafe `target='_blank'`
* [mithril/jsx-no-undef](docs/rules/jsx-no-undef.md): Disallow undeclared variables in JSX
* [mithril/jsx-uses-mithril](docs/rules/jsx-uses-mithril.md): Prevent Mithril to be incorrectly marked as unused
* [mithril/jsx-uses-vars](docs/rules/jsx-uses-vars.md): Prevent variables used in JSX to be incorrectly marked as unused


## All

This plugin also exports an `all` configuration that includes every available rule.
This pairs well with the `eslint:all` rule.

```json
{
  "plugins": [
    "mithril"
  ],
  "extends": ["eslint:all", "plugin:mithril/all"]
}
```

**Note**: These configurations will import `eslint-plugin-mithril` and enable JSX in [parser options](http://eslint.org/docs/user-guide/configuring#specifying-parser-options).

**Note**: This repo is forked from  [yannickcr/eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)

# License

ESLint-plugin-Mithril is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
