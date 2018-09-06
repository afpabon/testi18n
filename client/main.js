import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import HelloMeteor from '../imports/ui/helloWorld/App.jsx';
import '../imports/global/i18n/index.js';

Meteor.startup(() => {
  render(<HelloMeteor />, document.getElementById('app'));
});
