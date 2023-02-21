import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriends,
} from "../controllers/user.js";

import { verifyToken } from "../Middleware/auth.js";

const router = express.Router();

/* Read */

router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

/* update */
router.patch("/:id/:friendId", verifyToken, addRemoveFriends);

export default router;
