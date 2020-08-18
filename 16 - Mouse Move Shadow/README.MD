# Knowledge

## 1. ES6 Destructuring Assignment Shorthand
https://www.sitepoint.com/shorthand-javascript-techniques/
>If you are working with any popular web framework, there are high chances you will be using arrays or data in the form of object literals to pass information between components and APIs. Once the data object reaches a component, you’ll need to unpack it.

Longhand:
```Javascript
const observable = require('mobx/observable');
const action = require('mobx/action');
const runInAction = require('mobx/runInAction');

const store = this.props.store;
const form = this.props.form;
const loading = this.props.loading;
const errors = this.props.errors;
const entity = this.props.entity;
```

Shorthand:
```Javascript
import { observable, action, runInAction } from 'mobx';

const { store, form, loading, errors, entity } = this.props;
```