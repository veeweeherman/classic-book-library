https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html
https://webpack.github.io/docs/tutorials/getting-started/


npm install --save react && npm install --save react-dom && npm install --save-dev webpack && npm install webpack-dev-server -g && npm install --save-dev babel-loader && npm install --save-dev babel-core && npm install --save-dev babel-preset-es2015 && npm install --save-dev babel-preset-react


//differences from babel-webpack- -- starter
  1. package.json items and dep vs devDep
  2. package.json main: index.js not main.js


webpack-dev-server --colors --progress
http://localhost:8080/webpack-dev-server/
