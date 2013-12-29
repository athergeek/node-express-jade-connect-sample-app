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
```
-node-express-jade-connect-sample-app/
	|_config/  ( configurations )
	|_db/      ( database layer 
	|_public/ ( css/htmls etc )
	|_redis-2.6-server/ ( redis server exe )
	|_routes/ ( all routes )
	|_views  ( all views )
	|_index.js
	
```	

## Features
This application has following features.

* Basic application structure of your application ( it is not the BEST application structure and may need some
    improvements. I am open for suggestions )
* Basic route design streategey.
* How to create a seperate configuration file ( just like web.config in ASP.NET application )
* How to create/use Jade views and how to structure them.
* How to use style sheets and stylus.style template.
* How to create Jade layouts.
* How to use sessions.
* How to use cookies.
* How to use logger
* How to implement basic authentication.
* How to implement form based authentication
* How to show custom error page in jade views.
* How to serve static files
* How to show a page when user tries to use a route which is not relted/does not exists to our system.

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
