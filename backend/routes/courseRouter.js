import { Router } from "express";
import multer from "multer";
import path from "path";
import {
  getMyRating,
  createCourse,
  deleteCourse,
  getCourseByID,
  getCourses,
  getPublicCourses,
  rateCourse,
} from "../controllers/courseControllers.js";

// MULTER SETUP
const storage = multer.diskStorage({
  destination: (req, file, cb) =>
    cb(null, path.join(process.cwd(), "uploads")),
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `course-${unique}${ext}`);
  },
});

const upload = multer({ storage });

const courseRouter = Router();

courseRouter.get("/public", getPublicCourses);
courseRouter.get("/", getCourses);
courseRouter.get("/:id", getCourseByID);

courseRouter.post("/", upload.single("image"), createCourse);
courseRouter.delete("/:id", deleteCourse);

courseRouter.post("/:courseId/rate", rateCourse);
courseRouter.get("/:courseId/rating", getMyRating);

export default courseRouter;
