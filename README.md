
# Chorus
Chorus is a CMS with modern technologies currently under construction. Right now is for development environments and educational purposes only.

## Contents

- [About](#about)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development Workflow](#development-workflow)


### About
Chorus uses the following technologies

* [Docker](https://github.com/docker)
* [Nginx](https://nginx.org/)
* [React.js](https://github.com/facebook/react)
* [Next.js](https://github.com/zeit/next.js/)
* [node.js](https://github.com/nodejs/node)
* [fastify.js](https://github.com/fastify/fastify)
* [GraphQL](http://graphql.org/)
* [MongoDB](https://www.mongodb.com/)
* [Yarn](https://github.com/yarnpkg/yarn)
* [Babel](https://babeljs.io)
* [ESLint](http://eslint.org)


### Prerequisites
* docker
* docker-compose
* npm
* yarn


### Installation
Clone repo
```sh
git clone https://github.com/gabriel-miranda/chorus.git
cd chorus
```

Make it your own
```sh
rm -rf .git && git init && yarn init
```
> :information_source: This re-initializes the repo and sets up your project.

Install the dependencies
```sh
yarn
```


### Development Workflow
Start services
```sh
docker-compose up
```
