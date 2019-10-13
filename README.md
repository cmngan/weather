# Overview
This is a web app that can check weather in the following 5 days.  
Demo: https://cm-weather-demo.netlify.com
# Technology
I want to keep this project simply. Therefore, no design framework is used. I tried to use as less library as I can. Simplicity is preferred.  
The setup is from create-react-app. No SEO is required.
- styled-component: To style component
- redux: Manage state of the whole app
- redux-thunk: Handle side effect

# Development
## Setup
In terminal, type `yarn` or `npm i`
## Start Dev
In terminal, type `yarn start` or `npm start`
## Build
In terminal, type `yarn build` or `npm build`
## Release
This repo is integrated into Netlify. Therefore, it will auto release once pushed to master branch. 

# Assumption
1. Browser: Latest version of modern browser. We don't need to support IE.
2. SEO is not required and important.
3. Security is not required and important. API key can be public.