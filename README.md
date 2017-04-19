# API security modules

[![Known Vulnerabilities](https://snyk.io/test/github/daniel78uk/api-security/badge.svg)](https://snyk.io/test/github/daniel78uk/api-security)
[![Build Status](https://travis-ci.org/daniel78uk/api-security.svg?branch=master)](https://travis-ci.org/daniel78uk/api-security)

## Install

```
npm install api-security
```

## How to use it


```
var express = require('express');
var apiSecurity = require('api-security');

var app = express();
apiSecurity.secure(app);

```
