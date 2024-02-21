import { IoHome } from "react-icons/io5";
import {
  FaCalendarDays,
  FaBook,
  FaGraduationCap,
  FaBullhorn,
  FaHourglassHalf,
} from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";

const sidebarLinks = [
  {
    id: 1,
    text: "Dashboard",
    path: "/dashboard",
    icon: <IoHome className="text-xl" />,
  },
  {
    id: 2,
    text: "Schedule",
    path: "/schedule",
    icon: <FaCalendarDays className="text-xl" />,
  },
  {
    id: 3,
    text: "Courses",
    path: "/courses",
    icon: <FaBook className="text-xl" />,
  },
  {
    id: 4,
    text: "Gradebook",
    path: "/gradebook",
    icon: <FaGraduationCap className="text-xl" />,
  },
  {
    id: 5,
    text: "Performance",
    path: "/performance",
    icon: <BsGraphUpArrow className="text-xl" />,
  },
  {
    id: 6,
    text: "Announcements",
    path: "/announcements",
    icon: <FaBullhorn className="text-xl" />,
  },
  {
    id: 7,
    text: "Quizzes",
    path: "/quizzes",
    icon: <FaHourglassHalf className="text-xl" />,
  },
];

export default sidebarLinks;
