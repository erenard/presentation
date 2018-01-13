class: center, middle, inverse
# IQ's JavaScript tool chain.

What tools do we use, and why ?

---

# How client-side web development evolved ?

### 1996 ~ Old school website, no tools
How bad was it ?

### 2010 ~ Modular JavaScript, require.js
IQ a few months ago

### 2015 ~ Bundled JavaScript, webpack
Our actual solution

---
class: center, middle, inverse

# The old school web site

---

# Old school web site

- No tools
- Plain HTML & JS

```html
<!-- index.html -->
<html>
  <head>
    <script type="text/javascript" src="index.js" />
  </head>
  <body>...</body>
</html>
```

```js
// index.js
console.log('Hello world')
```

How to add a library ?

---

# Add a library, the old school way

1. Download it
2. Put them in a script folder
3. Add them to the page

```html
<!-- index.html -->
<html>
  <head>
    <!-- Dependencies -->
    <script src="script/jquery.js" />
    <script src="script/jqueryPlugin.js" />
    <script src="script/toastr-2.1.2.js" />
  </head>
  <body>...</body>
  <!-- Main program -->
  <script type="text/javascript">
    toastr.success('Hello world')
  </script>
</html>
```

--

It's simple, but has major downsides.

---

# The problems with old school JS

```html
<!-- index.html -->
<html>
  <head>
    <!-- Dependencies -->
    <script src="script/jquery.js" />       // define '$' in the global namespace
    <script src="script/jqueryPlugin.js" /> // add 'plugin' to '$'
    <script src="script/toastr-2.1.2.js" /> // use '$.plugin' and define 'toastr'
  </head>
  <body>...</body>
  <!-- Main program -->
  <script type="text/javascript">
    toastr.success('Hello world')
  </script>
</html>
```

---

# The problems with old school JS

### Dependency management
.bad[
- Dependencies are added to the source control
- Installation and updates are manual
- Keeping track of dependencies' versions is a nightmare
]

### Network
.bad[
- Each JS file is loaded in its own http request
- Not the best usage of the browser's cache
]

### Language
.bad[
- `<script>` are loaded in the global namespace
- `<script>` must be loaded in the correct order
]

---
# The revealing module pattern

There used to be various workarounds, like the "Revealing Module Pattern", to avoid namespacing conflicts...

```js
// Merge an existing 'namespace' with an empty one {}
var namespace = namespace || {};

// here a namespace object is passed as a function parameter (o),
// where we assign public methods and properties to it
(function (o) {
  o.foo = "foo"
  o.bar = function () {
    return "bar"
  }
}) (namespace)
```
...until the raise of modular JavaScript a few years later.

---
class: center, middle, inverse

# Modular JavaScript

AMD modules & require.js

---

# What is a module ?

In JavaScript, the word "modules" refers to small units of independent, reusable code.
- highly self-contained with distinct functionality
- can be a dependency to another module
- better maintainability and reusability
- allow namespacing

--

### Three module format exists

| Name | Short | Loading | Usage | Year |
|:---|:---|:---|:---|:---|
| Asynchronous Module Definition | AMD | Asynchronous | Browser | 2011 |
| CommonJS                       | CJS | Synchronous  | Server | 2009 |
| ECMAScript 6                   | ESM | Both         | Both   | 2014 |

--

Since we focus on the client-side, let's start with AMD.

---

# Asynchornous module definition (AMD)

The specification defines a single function **define** that is available as a global variable.

```js
define(id?, dependencies?, factory);
```

- **id**, *optional*: Name of the module being defined
- **dependencies**, *optional*: An array literal of the module ids that are dependencies
- **factory**: A function that should be executed to instantiate the module or an object

--

This function will:

1. Load all the dependencies asynchronously
2. Pass them to the factory function
3. Define a module with the result of that factory

--

```js
// Calling define with a dependency array and a factory function
define(['dep1', 'dep2'], function (dep1, dep2) {
  // Define the module value by returning a value.
  return function () {};
});
```
There is much more to say about the [AMD API](https://github.com/amdjs/amdjs-api/wiki/AMD), but it's out of the scope.

---

.logo.right.absolute[![Require.JS logo](./requirejs-logo.svg)]
# RequireJS
.col-double[
RequireJS is a JavaScript file and module loader, and one of the most popular implementation of AMD.
]
.col-double[
RequireJS is configurable, the configuration will allow us to:
- Follow modules version
- Rename / remap module names
- Assign different names for different versions of a module
]
```js
requirejs.config({
  map: {
    '*': {
      'foo': 'foo1.2'
    },
    'some/oldmodule': {
      'foo': 'foo1.0'
    }
  }
});
```
---
# Let's modularize our example...
```html
<!-- index.html -->
<html>
  <body>...</body>
  <script data-main="index" src="script/require.js"></script>
</html>
```
- RequireJS is the only loaded script, index.html is now a view template.
- the `data-main` element is the entry point for the application
- `data-main="index"` refers to `index.js`

---
# ...Let's modularize our example
.grid[.g_col1[
```js
// index.js
// Dependency declarations
var main = requirejs.config({
  baseUrl: 'script',
  paths: {
    jquery: 'jquery-1.9.10',
    jqueryPlugin: 'jqueryPlugin-1.1',
    toastr: 'toastr-2.1.2'
  },
  shim: {
    'jqueryPlugin': {
      deps: ['jquery']
    }
  }
});

// Main program
main(['toastr'], function (toastr) {
  toastr.success('Hello world');
});
```
]
.g_col2[
### 1. Configuration
- dependencies are loaded from the `script` directory
- dependency names are associated with a path
- the `shim` section defines dependencies for non-modular dependencies

### 2. Execution
- `require.config({...})` produce a `main` function
- the `main` function require `toastr` and uses it.
]]

---

# Using Nuget to resolve javascript dependencies

In the IQ solution, nuget was used to resolve all the dependencies.

Believe it or not, nuget packages exist to add javascript dependencies like jquery and require.js.

Installing such packages will extract `.js` file(s) to the project's `script` folder.

--

.good[
- Installations are automated
- Dependencies' versions are managed
]
.bad[
- Not all JavaScript dependencies exist in nuget
- The project's `script` folder is a mess
]

---

# IQ 2016's solution recap (nuget + require.js)

.grid[.g_col1[.good[
- Dependency installations are automated
- Dependencies' versions are managed
- Each module has it's own namespace
- Dependencies are loaded on demand
]].g_col2[.bad[
- Not all JavaScript dependencies exist in nuget
- The project's `script` folder is a mess
- RequireJS doesn't work well with CJS modules
- Each JS file is loaded in its own http request
- Not the best usage of the browser's cache
]]]

At this point on time, we needed to make a better use of the browser's cache.

We choose to use a build system, to tag each file with a hash of its content.

--

For exemple `SystemHealth.js` will be renamed `SystemHealth.b44e3c234f23a.js` at build time.

`b44e3c234f23a` being the hash of the source file content.

- `SystemHealth.b44e3c234f23a.js` can stay in the browser's cache forever
- If anything change in the source code, the filename will change and miss the cache

---

class: center, middle, inverse
# Meanwhile, on the server side...

---

# The raise of server side JS

In 2009, a project named **CommonJS** was started with the goal of specifying an ecosystem for JavaScript outside the browser.
CommonJS is a growing collection of standards, including:

- Modules system
- Local and remote packages and package management
- Standard library
- Unit test assertions, running, and reporting
- Web server gateway interface, JSGI

The most well-known implementation of CommonJS is...
--

.center[
 .logo[![NodeJS logo](./nodejs-logo.svg)]
]
---
# CommonJS modules

CJS modules being designed for the server, they are loaded synchronously from the file system, by calling `require()`.

```js
// Dependency imports
var Display = require('utils/display');

// Local definitions
var message = 'Hello';
function sayHello (name) {
  Display.say(message + ' ' + name);
}

// Exports are the publicly accessible items
module.exports = {
  greet: sayHello
};
```

---

# JavaScript package managers

.container[
  ![Bower logo](./bower-logo.svg)

  ![NPM logo](./npm-logo.svg)

  ![Yarn logo](./yarn-logo.svg)
]

They exist since 2010

- **Bower** reached its popularity peak in 2013
- **NPM** appeared in 2010 (node package manager) and has been the most popular since 2015
- **Yarn** appeared in 2016 and is getting some traction

Yarn is compatible with NPM, both of them can be used concurrently.

---

# Initializing NPM

We initialize our project by typing

```
project_dir$ npm init
```

After asking us a bunch of question, it will creates a `package.json` file.

```json
// package.json
{
  "name": "jstools",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

Let's add a library

---

# Installing a library

We add a library to our project by typing

```
project_dir$ npm install --save toastr
```

The library will be downloaded in the `node_modules` directory and the `package.json` file will be updated.

```json
// package.json
{
  ...
* "dependencies": {
*   "toastr": "^2.1.2"
* }
}
```

--

Most common NPM commands:
```js
install, uninstall // add or remove dependencies
run, test          // execute user defined scripts
outdated, update   // handles dependencies upgrade
```

---

# Webpack

---

# Using the library

Then we update `index.html`:

```html
<!-- index.html -->
<html>
  <head>
    <script type="text/javascript" src="node_modules/toastr/toastr.js"/>
  </head>
  <body>...</body>
  <script type="text/javascript" src="index.js"/>
</html>
```

.bad[
- Libraries are still loaded in the global namespace
- We still need to manually order the libraries loading
]


Most programming languages provide a way to import code from one file into another. This feature generaly comes with a namespace system.

---

# The raise of server side JS

JavaScript was designed to run in a browser, without access to the file system (for security reasons).
It didn't initialy provide any mechanism of import/export of code.

In 2009, a project named CommonJS was started with the goal of specifying an ecosystem for JavaScript outside the browser.

A big part of CommonJS was its specification for modules, which would finally allow JavaScript to import and export code across files like most programming languages, without resorting to global variables.

The most well-known of implementation of CommonJS modules is node.js.

---

# CJS Example

---

# RequireJS

Takes AMD has input

## Example

---

# Browserify

First generation of bundler
Takes CJS has input

---

# Webpack

---

# JavaScript module formats

2009 CommonJS (CJS)
  - Compact syntax
  - Synchronous loading (server)
  - Support for cyclic dependencies
  - Most popular implementation: Node.js

2011 Asynchronous module definition (AMD)
  - Slightly more complicated syntax
  - Asynchronous loading (browser)
  - Most popular implementation: **RequireJS**

2015 ECMAScript module (ESM)
  - Declarative syntax
  - Support for cyclic dependencies
  - Supported by Node.js 8.5+


[More info](http://2ality.com/2014/09/es6-modules-final.html)

---

# Maintaining dependencies

Running `npm install` 

NPM provides commands to keep track of the 


+ Exemple 'npm install --save dep'
    - Download the dependency in a folder named node_modules
    - Updates package.json
+ Exemple patch de l'index.html
    - We update index.html *manually*

=> This gets rid of the dependency version management, but we still need to load the JS in the global namespace and in right order.

---

# Introduction

index.html
```xml
<html>
  <head>
*   <script type="text/javascript" src="index.js"></script>
    <script type="text/javascript" src="index.js"></script>
  </head>
  <body>
  </body>
</html>
```

index.js
```js
console.log('Hello world')
```

---

# Modern JavaScript & Webpack

---

## what is webpack ?

webpack is a **module bundler** for modern JavaScript applications.

---

## what is a module ?

In JavaScript, the word "modules" refers to small units of independent, reusable code.
- highly self-contained with distinct functionality
- can be a dependency to another module
- better maintainability and reusability
- allow namespacing

---

## anatomy of a module
my-module.js
```js
// Dependency imports
var Display = require('utils/display');
// Definitions function
MyModule() {
  this.hello = function() {
    Display.say('hello!')
  }
  this.goodbye = function() {
    Display.say('goodbye!')
  }
}
// Exports are the publicly accessible items
module.exports = MyModule;
```

---

## example project ``` /src/index.js /src/my-app/my-module.js /src/utils/display.js ``` index.js ```js var MyModule = require('my-app/my-module');
var myModule = new MyModule(); myModule.hello(); myModule.goodbye(); ```

---

## What is a bundle ? When webpack processes your application: - it recursively builds a dependency graph, - then packages
all of those modules into a bundle.

---
