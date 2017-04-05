## Introduction

User Interface for [Bookx](https://github.com/mxpetit/bookx/)

## Quick start

Clone this project : 
```sh
git clone https://github.com/mxpetit/bookx-ui.git
```

And then run :
```sh
cd bookx-ui
npm install
bower install
gulp
```

You can also use docker :
```sh
cd bookx-ui
docker build -t bookx-ui .
```

To start an instance, you can use node :
```sh
node dist/index.js
```

Or docker :

```sh
docker run -p 3000:3000 bookx-ui
```
