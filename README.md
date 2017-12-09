![Chorus](https://user-images.githubusercontent.com/7026780/33643157-1f26191c-da1c-11e7-899d-9766bfb5cea6.png)

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

For *macOS* users, in order to run the `mongo` container properly you must create a folder `/data` and enable it for docker in `Docker menu -> Preferences -> File sharing` by adding it there. Then you must make sure you have permissions to write in that folder. You can do it by `chmod -R 777 /data`. Linux ftw.

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


### Development Workflow
Start services
```sh
docker-compose up
```
