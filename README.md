# [Bubblesee] v1.0.0

A constructor for tooltip to your website.

Demo available here : https://bubblesee.victor-de-la-fouchardiere.fr/demo.html

## Usage

jQuery __is not necessary__ for this library. 
Include the Bubblesee's script and stylesheet to your page :

```html
<link rel="stylesheet" href="css/bubblesee.min.css" />
<script src=js/bubblesee.min.js"></script>
```

Then, bind any element with a title attribute :

```js
Bubblesee.bind('element[title]', 'animation', 'customClass');
```
## 3 Options
* __element__:  Specifie a DOM element with an attribute title. __This parameter is required__
* __animation__: Animation when bubblesee display on your screen. Default: `fade`
* __customClass__: Add a custom CSS class. Default: `null`

## Animations available

* scale
* rotate
* skew

## Exemple 

```js
Bubblesee.bind('img[title]', 'scale', 'MyClass');
```

## Contribute

Any contributions and/or pull requests would be welcome.

Themes, translations, bug reports, bug fixes are greatly appreciated.

## License

Bubblesee is licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) license:

Copyright (C) 2017 Victor de la Fouchardiere

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Author
[Victor de la Fouchardière](http://www.victor-de-la-fouchardiere.fr/)
