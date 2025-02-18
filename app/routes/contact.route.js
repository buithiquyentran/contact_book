const express = require("express");
const contacts = require("../controllers/contact.controller");
const router = express.Router();
router
  .route("/")
  .get(contacts.findAll)
  .post(contacts.create)
  .delete(contacts.deleteAll);
router.route("/favorite").get(contacts.findAllFavorite);
router
  .route("/:id")
  .get(contacts.findOne)
  .put(contacts.update)
  .delete(contacts.delete);
module.exports = router;

// {
//         "_id": "67b1b6591d78911d939dbcb4",
//         "name": "Bùi Thị Quyền Trân",
//         "email": "tran@gmail.com",
//         "address": "64 Vĩnh Long",
//         "favorite": true,
//         "phone": "099999999"
//     }
