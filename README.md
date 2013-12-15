# multi-d-array

A multi dimensional array toolkit for node.

## Getting Started
Install the module with: `npm install multi-d-array`

```javascript
var Multi = require('multi-d-array');
```

## Documentation

Creating a multidimensional array.
```javascript
var array_2d = Multi(4, 7);
var array_3d = Multi(5, 3, 8);
```

Iterating over every element.
```javascript
array_2d.forEach(function(value, key, array){
	console.log(value, key, array);
});
```

Modifying values.
```javascript
var idx = 0;

array_2d.forEach(function(value, key, array){
	array[key] = idx++;
});
```

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 THEtheChad  
Licensed under the MIT license.
