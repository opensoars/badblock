Badblock
========

Chrome extension that blocks the bad internet stuff!

## Dependencies
* None

## Install
Clone source code and add extension to Chrome extensions by browsing to `chrome://extensions`. You may need to turn on developer mode.

## What does Badblock block?
* Most (maybe all) ad services
* Google Analytics

## How does Badblock block?
It plays like middleware. Requests are intercepted if the URL matches one of the blacklisted strings, the request will be blocked. So the request won't even make it to the server, which will result in no tracking (Google Analytics) at all!
