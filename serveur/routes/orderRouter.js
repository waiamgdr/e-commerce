const router = require("express").Router();
const {
  authMiddleware,
  authorizeRoles,
} = require("../middleware/UserMiddleware");

const {
  // getAllOrders,
  // getSingleOrder,
  // getCurrentUserOrders,
  createOrder,
  // updateOrder,
} = require("../controlles/orderControlles");

router.post("/createorder", authMiddleware, createOrder);
// router.get("/allorder", authMiddleware, authorizeRoles("admin"), getAllOrders);
// router.route("/getCurrentUserOrders").get(authMiddleware, getCurrentUserOrders);
// router.get("/getsingleorder/:id", authMiddleware, getSingleOrder);
// router.patch("/updateorder/:id", authMiddleware, updateOrder);

module.exports = router;
