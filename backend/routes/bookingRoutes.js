import { Router } from "express";

import {
  checkBooking,
  confirmPayment,
  createBooking,
  getBooking,
  getStats,
  getUserBookings,
} from "../controllers/bookingControllers.js";

const bookingRouter = Router();

bookingRouter.get("/", getBooking);
bookingRouter.get("/stats", getStats);

bookingRouter.post("/create", createBooking);
bookingRouter.get("/check", checkBooking);
bookingRouter.get("/confirm", confirmPayment);

bookingRouter.get("/my", getUserBookings);

export default bookingRouter;
