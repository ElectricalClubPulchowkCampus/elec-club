# Full Electrical Club React App Guide

## Structure of the app

 - **📁 dist** : auto generated. contains production ready version of app, no need for manual editing
 - **📁 node_modules** : Has all the installed dependencies like React, Router, Vite, etc. No need to touch or edit
 - **📁 public** : for static files like favicon and images 
 - **📁 src** : Heart of the app
    - **📁 assets** : Contains images
    - **📁 components** : Contains different components of the app such as header, footer, gototop button, etc.
    - **📁 pages** : Contains the pages for the site, linked via routing.
    - **⚛️ App.jsx** - The main layout and routing file. Defines how everything comes together
    - **⚛️ Main.jsx** - Entry point of the app
    - **📄 index.css** - Global css, tailwind imported here
- **📄 index.html** - single HTML file used by vite
- **📄 package.json** - contains dependencies, scripts, name, version, etc.
- **📄 package-lock.json** - auto generated, locks exact dependencies versions
- **📄 vite.config.js** - Build tool, has base url and plugins.

