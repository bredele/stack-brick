
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
widget.plugin('stack', new Stack(el)); //el is div.stack
```


## License

  MIT
