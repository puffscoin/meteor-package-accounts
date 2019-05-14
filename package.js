Package.describe({
  name: "puffscoin:accounts",
  summary:
    "Provides and updates PUFFScoin accounts in the Accounts collection",
  version: "1.1.0",
  git: "http://github.com/puffscoin/meteor-package-accounts"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0");
  api.use("underscore", ["client", "server"]);
  api.use("mongo", ["client", "server"]);

  api.use("frozeman:persistent-minimongo@0.1.8", "client");
  api.use("puffscoin:web3@1.0.0-beta.33", ["client", "server"]);

  api.export(["PuffsAccounts"], ["client", "server"]);

  api.addFiles("accounts.js", ["client", "server"]);
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('puffscoin:accounts');
//   api.addFiles('accounts-tests.js');
// });
