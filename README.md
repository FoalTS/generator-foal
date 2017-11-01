# Foal generator

[![npm version](https://badge.fury.io/js/generator-foal.svg)](https://badge.fury.io/js/generator-foal)
[![Build Status](https://travis-ci.org/FoalTS/generator-foal.svg?branch=add-travis)](https://travis-ci.org/FoalTS/generator-foal)

Yeoman generators to quickly start a project and create components (services, controllers, etc.)

**This work is in progress**

## Get started

```sh
npm install -g yo
npm install -g generator-foal
```

```sh
# Create an app
yo foal my-app

# Create a controller
yo foal:controller my-basic-controller basic
yo foal:controller my-rest-controller rest

# Create a controller binder
yo foal:controller-binder my-controller-binder

# Create a controller decorator
yo foal:decorator my-express-decorator express
yo foal:decorator my-contextual-decorator contextual

# Create a module
yo foal:module my-module

# Create a service
yo foal:service my-service
yo foal:service my-sequelize-service sequelize
yo foal:service my-sequelize-connection-service sequelize-connection
```