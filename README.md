ParkSwap
========

Give a ride, get a spot! This is a work in progress, currently being built as a student project at [Hack Reactor](http://www.hackreactor.com). Team members are [Dan Chao](http://www.github.com/bioball), [Joseph Toney](http://www.github.com/chip2int) and [Yong-Soo Chung](http://www.github.com/yongsoo).

Tech stack
----------

The app is built on a SEAN stack (SQL, Express, Angular, Node). The back-end database is handled through the Bookshelf.js ORM, and authentication is handled through Passport.js.

The front-end libraries are frameworked by Angular, includes the ui-map and ui-utils libraries for Google Map integration, and jQuery for certain animations.


Set-up
------

1. `git clone https://github.com/bioball/ParkSwap`
2. `cd ParkSwap`
3. `bower install`
4. `npm run-script migrate`
5. `npm start`

Version
-------

### 1.0.1 ###


Deployment
----------

This app is currently deployed on park-swap.herokuapp.com. 

**NOTE**: The site is designed for mobile phones in portrait view. When viewed from a landscape mode, the pages will be distorted out of proportion.

If viewing from the browser, we suggest using Google Chrome Canary, and using their emulation feature (Developer Tools > Sources > Emulation), which will fix the aspect for you.
