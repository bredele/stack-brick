
# stack-plugin

  Stack fragment [plugin](https://github.com/bredele/data-binding)

## Installation

    $ component install bredele/stack-plugin

## Usage

HTML:

```html
<div class="stack">
  <div data-stack="home,true"></div>
  <div data-stack="blog"></div>
  <div data-stack="contacts"></div>    
</div>

```
JavaScript with [widget](https://github.com/bredele/widget) component:

```js
var stack = new Stack(el); //el is div.stack
widget.plugin('stack', stack);
...
stack.get('blog');
```

The stack plugin is ideal to create tab-based navigation and to perform heavy dom manipulation without triggering repaint/reflow mechanism.


## License

  MIT
