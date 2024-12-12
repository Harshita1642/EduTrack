
import { UserData } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { CourseData } from "../../context/CourseContext";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight, Trash2 } from "lucide-react";
import { User, Clock, IndianRupee } from "lucide-react";
// import { Dialog } from "../ui/dialog"; // Adjust the path as necessary
import { LogIn } from "lucide-react";

const server = "http://localhost:5000"
const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const { user, isAuth } = UserData();
  const { fetchCourses } = CourseData();

  const deleteHandler = async (id) => {
    console.log("jngjrn")
    try {
      // const confirmed = await new Promise((resolve) => {
      //   Dialog.confirm({
      //     title: "Delete Course",
      //     content: "Are you sure you want to delete this course?",
      //     onConfirm: () => resolve(true),
      //     onCancel: () => resolve(false),
      //   });
      // });

      // if (confirmed) {
        console.log("fonfirgr")
        const { data } = await axios.delete(`${server}/api/course/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });
        toast.success(data.message);
        fetchCourses();
      // }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden w-full bg-gray-100">
        <div className="flex p-4 gap-4">
          {/* Left: Image */}
          <div className="w-32 h-26 flex-shrink-0">
            <img
              src={`${course.image}`}
              alt={course.title}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          {/* Middle: Course Info */}
          <div className="flex-grow space-y-3">
            <h3 className="text-2xl font-bold">{course.title}</h3>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>
                <span className="font-medium">Tutor: </span>
                {course.createdBy}
              </span>
              <span>
                <span className="font-medium">Duration: </span>
                {course.duration} weeks
              </span>
              <span>
                <span className="font-medium">Price: </span>
                ₹{course.price}
              </span>
            </div>
          </div>

          {/* Right: Reviews and Button */}
          <div className="flex flex-col items-end justify-between">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 fill-current text-yellow-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span className="text-sm">4.9 (123)</span>
            </div>
            
            {/* Existing button logic */}
            <div className="mt-auto space-x-1 space-y-2">
              {isAuth ? (
                <>
                  {user && user.role !== "admin" ? (
                    <>
                      {user.subscription.includes(course._id) ? (
                        <Button
                          className="bg-[#8836d9] hover:bg-purple-700"
                          onClick={() => navigate(`/course/study/${course._id}`)}
                        >
                          <BookOpen className="mr-2 h-4 w-4" />
                          Study Now
                        </Button>
                      ) : (
                        <Button
                          className="bg-[#8836d9] hover:bg-purple-700"
                          onClick={() => navigate(`/course/${course._id}`)}
                        >
                          <ArrowRight className="mr-2 h-4 w-4" />
                          Get Started
                        </Button>
                      )}
                    </>
                  ) : (
                    <Button
                      className="bg-purple-600 hover:bg-purple-700"
                      onClick={() => navigate(`/course/study/${course._id}`)}
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      Study Now
                    </Button>
                  )}
                </>
              ) : (
                <Button
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => navigate("/login")}
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Get Started
                </Button>
              )}

              {user && user.role === "admin" && (
                <Button
                  variant="destructive"
                  className="mt-2"
                  onClick={() => deleteHandler(course._id)}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Course
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default CourseCard;