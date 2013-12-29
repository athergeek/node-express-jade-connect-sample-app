## About this sample application
This is a very simple application developed in HTML5, Express.js, Jade views, node.js, redis and connect middleware  which can
be a good reference/starting point for someone who is new to these technologies and wants some quick tips and sample
code to develope an application where you just need some screens to insert/update/delete/view data.

## Disclaimer
This application was written specifially to learn Express.js. While writing this i did't pay attention to javascript
design patterns, so you may find yourself thinking " Oh this should have been something like this instead of that".
You are more then welcome to suggest code imporvements.
I only used in memory objects to quickly complete this application. Next i will encorporate this with MongoDB, CouchDB
and may be SQLServer as well.

## Pre-Requisits
You must be familier with node.js and your machine should be setup to run node.js applications. 
Also you must be familier with [node package manager npm](https://npmjs.org/doc/install.html
). For details please read [I am nodized](http://risenrun.blogspot.com/2013/12/i-am-nodized.html)

I also highly recommend you to download and install [nodemon](https://github.com/remy/nodemon)
		npm install -g nodemon
To try session examples, you need redis which is an open source advanced key, value store. I have included this into this repository so you dont have to download it yourself. you can find it into redis-2.6-server folder. Its an executable named redis-server.exe. All you need to do is double click on it and your redis-server will be ready listing to the specified port.


## Dependencies
This application depends on following modules
	express
	jade
	redis
	stylus
	connect-redis

I have included package.json which does have all these dependencies included, all you need to do is
launch command prompt and go into this sample app folder and type
	npm install 

This will install all packages that this application is dependent upon.

## Folder Structure
-node-express-jade-connect-sample-app
	-config
	-db
	-public
	-redis-2.6-server
	-routes
	-views

## Features
This application has following features.

1) Basic application structure of your application ( it is not the BEST application structure and may need some
    improvements. I am open for suggestions )
2) Basic route design streategey.
3) How to create a seperate configuration file ( just like web.config in ASP.NET application )
4) How to create/use Jade views and how to structure them.
5) How to use style sheets and stylus.style template.
6) How to create Jade layouts.
7) How to use sessions.
8) How to use cookies.
9) How to use logger
10) How to implement basic authentication.
11) How to implement form based authentication
12) How to show custom error page in jade views.
13) How to serve static files
14) How to show a page when user tries to use a route which is not relted/does not exists to our system.


## Installation

    $ npm install -g express

## Quick Start

 The quickest way to get started with express is to utilize the executable `express(1)` to generate an application as shown below:

 Create the app:

    $ npm install -g express
    $ express /tmp/foo && cd /tmp/foo

 Install dependencies:

    $ npm install

 Start the server:

    $ node app




## License

(The MIT License)

Copyright (c) 2009-2012 TJ Holowaychuk &lt;tj@vision-media.ca&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

























## Features

  * Built on [Connect](http://github.com/senchalabs/connect)
  * Robust routing
  * HTTP helpers (redirection, caching, etc)
  * View system supporting 14+ template engines
  * Content negotiation
  * Focus on high performance
  * Environment based configuration
  * Executable for generating applications quickly
  * High test coverage

## Philosophy

  The Express philosophy is to provide small, robust tooling for HTTP servers, making
  it a great solution for single page applications, web sites, hybrids, or public
  HTTP APIs.

  Built on Connect, you can use _only_ what you need, and nothing more. Applications
  can be as big or as small as you like, even a single file. Express does
  not force you to use any specific ORM or template engine. With support for over
  14 template engines via [Consolidate.js](http://github.com/visionmedia/consolidate.js),
  you can quickly craft your perfect framework.

## More Information

  * [Website and Documentation](http://expressjs.com/) stored at [visionmedia/expressjs.com](https://github.com/visionmedia/expressjs.com)
  * Join #express on freenode
  * [Google Group](http://groups.google.com/group/express-js) for discussion
  * Follow [tjholowaychuk](http://twitter.com/tjholowaychuk) on twitter for updates
  * Visit the [Wiki](http://github.com/visionmedia/express/wiki)
  * [Русскоязычная документация](http://jsman.ru/express/)
  * Run express examples [online](https://runnable.com/express)

## Viewing Examples

Clone the Express repo, then install the dev dependencies to install all the example / test suite dependencies:

    $ git clone git://github.com/visionmedia/express.git --depth 1
    $ cd express
    $ npm install

Then run whichever tests you want:

    $ node examples/content-negotiation

You can also view live examples here:

<a href="https://runnable.com/express" target="_blank"><img src="https://runnable.com/external/styles/assets/runnablebtn.png" style="width:67px;height:25px;"></a>

## Running Tests

To run the test suite, first invoke the following command within the repo, installing the development dependencies:

    $ npm install

Then run the tests:

    $ make test

## Contributors

  https://github.com/visionmedia/express/graphs/contributors

