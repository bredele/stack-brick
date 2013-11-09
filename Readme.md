# stack-plugin

  Stack fragment [plugin](https://github.com/bredele/binding)

## Installation

    $ component install bredele/stack-plugin

## Usage

HTML:

```html
<div class="stack">
  <div data-stack="add:home,true"></div>
  <div data-stack="add:blog"></div>
  <div data-stack="add:contacts"></div>    
</div>

```
JavaScript with [view](https://github.com/bredele/view) component:

```js
var stack = new Stack(el); //el is div.stack
widget.plugin('stack', stack);
...
stack.show('blog');
```

The stack plugin is ideal to create tab-based navigation and to perform heavy dom manipulation without triggering repaint/reflow mechanism.


## License

  MIT
