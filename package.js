// Source: https://github.com/ekalinin/typogr.js/

Package.describe({
  summary: "plain text transformations library: amp, windont, smartypants, caps, initQuotes, ord.",
  version: "0.6.4",
  git: "https://github.com/emgee3/meteor-typogr.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles('typogr.js');
  api.export('Typogr');

  api.use("templating", "client", {weak: true});
  api.addFiles('helper.js', 'client');
});
