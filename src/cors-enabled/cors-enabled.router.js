const router = require("express").Router();
const controller = require("./cors-enabled.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

router.use(cors()) // This will enable cors for the entire router

//const corsDelete = cors({methods: "DELETE"}); 
// This can be added to one or more methods to be allowed

router
  .route("/:corsId")
  //.all(cors()) 
  // This would enable all methods for this route
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

router
  .route("/")
  .get(cors(), controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
