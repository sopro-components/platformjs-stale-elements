platformjs-stale-elements
=========================

Demo app of Polymer's platform.js 0.3.5 + protractor 0.20.1 + chromedriver 2.9 + selenium-2.40.0

We are experiencing trouble with stale element errors on pages using
platform.js. This test suite is an attempt to diagnose the issue.

Usage
-----

    $ git clone git@github.com:sopro-components/platformjs-stale-elements.git
    $ cd platformjs-stale-elements
    $ npm install

    $ npm install -g http-server 
    $ #Or point the npm start script at the node_modules/ binary

### Testing polymer elements on a non-Angular page

    $ npm start
    $ firefox localhost:8000
    $ npm test

### Testing polymer elements on an Angular page

    $ git checkout angular
    $ npm start
    $ firefox localhost:8000
    $ npm test
