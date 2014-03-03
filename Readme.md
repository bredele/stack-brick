# Stack

  Stack is ideal to create tab-based navigation and to perform heavy dom manipulation without triggering repaint/reflow mechanism.

## Installation

with [component](http://github.com/component/component):

    $ component install bredele/stack-brick

with [nodejs](http://nodejs.org):

    $ npm install stack-brick


## Usage

First, add the plugin to your view (see [brick](http://github.com/breele/brick) for more information):

```js
var Stack = require('stack-brick');
var stack = new Stack(el);

//brick view
view.add('stack', stack);
```

## Basic


```html
<div class="stack">
  <div class="home" stack="add:home,true"></div>
  <div class="blog" stack="add:blog"></div>
  <div class="contacts" stack="add:contacts"></div>    
</div>

```
  Displays `home` by default. 


Navigate through the stack:

```js
view.show('blog');
```

see [domstack](http://github.com/bredele/domstack) for more details.

## License

  MIT
