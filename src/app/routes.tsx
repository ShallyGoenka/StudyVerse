import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Login } from "./components/Login";
import { StudentDashboard } from "./components/StudentDashboard";
import { BrowseCourses } from "./components/BrowseCourses";
import { CourseDetail } from "./components/CourseDetail";
import { LearnCourse } from "./components/LearnCourse";
import { ProgressTracking } from "./components/ProgressTracking";
import { InstructorDashboard } from "./components/InstructorDashboard";
import { CreateCourse } from "./components/CreateCourse";
import { UploadContent } from "./components/UploadContent";
import { AdminDashboard } from "./components/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: StudentDashboard },
      { path: "courses", Component: BrowseCourses },
      { path: "courses/:courseId", Component: CourseDetail },
      { path: "courses/:courseId/learn", Component: LearnCourse },
      { path: "progress", Component: ProgressTracking },
      { path: "instructor", Component: InstructorDashboard },
      { path: "instructor/create", Component: CreateCourse },
      { path: "instructor/upload/:courseId", Component: UploadContent },
      { path: "admin", Component: AdminDashboard },
    ],
  },
]);
