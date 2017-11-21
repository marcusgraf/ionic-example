# Codecentric Task with Ionic

### Prerequisites

You’ll need to install the latest version of the Ionic CLI and Cordova. Before you do that,
you’ll need a recent version of Node.js. [Download the installer](https://nodejs.org/en/) for
Node.js 6 or greater and then proceed to install the Ionic CLI and Cordova for native app development:

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v`
in a terminal / console window. Older versions may produce errors.

### Steps to run the example

- Install the latest version of the Ionic CLI and Cordova.
```bash
$ npm install -g cordova ionic
```

 > You may need to add “sudo” in front of these commands to install the utilities globally

 > If you run `ionic -v` it should return 3.0.0 (or greater)
 
- Add your github personal access token to /src/config

- Run `npm test` to run the tests.

- You can also run the command `ionic serve` to get a quick preview of the app in the browser.

### ToDo

- Use paging (only first result page is using now)
- Add MockUps for API Testing
- Add a some caching
