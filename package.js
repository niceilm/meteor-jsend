Package.describe({
  name: 'flynn:jsend',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'jsend',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/niceilm/meteor-jsend.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.export('JSEND', "server");
  api.use('check');
  api.addFiles('jsend.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('flynn:jsend');
  api.addFiles('jsend-tests.js');
});
