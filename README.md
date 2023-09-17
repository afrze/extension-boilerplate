# React Chrome Extension Boilerplate

Boilerplate for building Chrome Extensions in React and TypeScript using webpack.

## Getting Started

1. clone the repo
2. `npm i` to install dependancies
3. `npm start` to start running the fast development mode Webpack build process that bundle files into the `dist` folder
4. `npm i --save-dev <package_name>` to install new packages
All packages are development depndancies as the extension is loaded directly from the `dist` folder

## Loading The Chrome Extension

1. Open Chrome and navigate to `chrome://extensions/`
2. Toggle on `Developer mode` in the top right corner
3. Click `Load unpacked`
4. Select the entire `dist` folder

## Production Build

1. `npm run build` to generate a minimized production build in the `dist` folder
2. ZIP the entire `dist` folder (e.g. `dist.zip`)
3. Publish the ZIP file on the Chrome Web Store Developer Dashboard!

## Default Boilerplate Notes

- Folders get flattened, static references to images from HTML do not need to be relative (i.e. `icon.png` instead of `../static/icon.png`)
- Importing local ts/tsx/css files should be relative, since Webpack will build a dependancy graph using these paths
- Update the manifest file as per usual for chrome related permissions, references to files in here should also be flattened and not be relative

## Notes on Building extensions

- Follow this [Link](https://developer.chrome.com/docs/extensions/) to read more about on developing chrome extensions.
- Major parts of extension
  - `popup` deals with functionality and look of the poppu which dispalys when you click on the extension.
  - `option` is for the options page of the extension, where user can configure. 
  - `background` is a service worker where we can run some background tasks even when extension popup is idle or hidden.
  - `contenScript` is for interacting with visisted web pages. It heps us to run scripts on the webpage / or get data from the webpage to the extension.
  