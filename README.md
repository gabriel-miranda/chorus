# Chorus
Chorus is a CMS with modern technologies currently under construction.

## Contents

- [Installation](#installation)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)


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