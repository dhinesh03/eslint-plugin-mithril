# Prevent Mithril to be incorrectly marked as unused (jsx-uses-mithril)

Using JSX, the Mithril import should be considered as being used.

This rule has no effect if the `no-unused-vars` rule is not enabled.

## Rule Details

The following patterns is considered as warning.

```js
var m = require('mithril');

// nothing to do with Mithril
```

The following patterns is *not* considered a warning.

```jsx
var m = require('mithril');

var Hello = <div>Hello {this.props.name}</div>;
```

## When Not To Use It

The rule has no use if you are not using JSX, if Mithril is declared as global variable or if you do not use the `no-unused-vars` rule.