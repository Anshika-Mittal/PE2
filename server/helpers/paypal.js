const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AcGF_9jqmvNZZUKh6ixz6E0_hRCKuH8F3FCwk5igtIKiOzNbQcJxnJK_fTzyWwuRClLxMhZb2hPBGkE4",
  client_secret: "EJD_IMRBogLNdgJzOaysMbJ8dj2zkKkAMm0bad1teSCPUGHXS88J6EdgIj37ulxYPFNZD8-lyrkv5zky",
});

module.exports = paypal;
