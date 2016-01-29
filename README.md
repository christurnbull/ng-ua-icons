# ng-ua-icons

Uses ua-parser.js to convert a ua string into browser, os & device icons

DEMO: http://embed.plnkr.co/R9jqslNxSXVdrZOgGnkN/

## Installation

Install via bower:

```bower install ng-ua-icons```

Add script to your index.html (if not using Grunt/wiredep/etc)

```<script src='bower_components/ng-ua-icons/ngUaIcons.js'></script>```

Add module to your application module dependencies

```angular.module('ngApp', ['ngUaIcons'])...```

## Usage

```
<span ng-ua-icons></span>
<span ng-ua-icons="{{customUA}}"></span>
<span ng-ua-icons ionic></span>
```

## Dependencies
[UAParser.js](http://faisalman.github.io/ua-parser-js)

[Font Awesome](https://fortawesome.github.io/Font-Awesome/) or [Ionicons](http://ionicons.com/)

## Support

Please [open an issue](https://github.com/christurnbull/ng-ua-icons/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/christurnbull/ng-ua-icons/compare/).

## License

The code is available under the [MIT license](LICENSE.txt).
