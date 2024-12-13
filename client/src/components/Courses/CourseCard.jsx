import API from "@/services/api";
import { UserData } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { CourseData } from "../../context/CourseContext";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight, Trash2 } from "lucide-react";
import { LogIn } from "lucide-react";



const CourseCard = ({ course ,setTabContent}) => {
  const navigate = useNavigate();
  const { user, isAuth } = UserData();
  const { fetchCourses } = CourseData();
  const navigateToOtherComponent = (component) => { setTabContent(component); };
  console.log(UserData);
  console.log(isAuth)
  const deleteHandler = async (id) => {
    console.log("jngjrn")
    try {
        console.log("fonfirgr")
        const { data } = await axios.delete(`${API}/api/course/${id}`, {
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
              {user && user.role !== "teacher" ? (
                <>
                  {user.subscription.includes(course._id) ? (
                    <Button
                      className="w-full"
                      
                      onClick={() => {
                        console.log('Course ID:', course._id);
                        
                        navigateToOtherComponent('Lecture')}}
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      Study Now
                    </Button>
                  ) : (
                    <Button
                      className="w-full"
                      // onClick={() => navigate(/course/${course._id})}
                    >
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Get Started
                    </Button>
                  )}
                </>
              ) : (
                <Button
                  className="w-full"
                  onClick={() => {
                    console.log('Course ID:', course._id);
                    localStorage.setItem('courseId', course._id);
                    console.log('Stored Course ID in localStorage:', localStorage.getItem('courseId'));
                    navigateToOtherComponent('Lecture')}}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Study Now
                </Button>
              )}
            </>
          ) : (
            <Button
              className="w-full"
              onClick={() => navigate("/login")}
            >
              <LogIn className="mr-2 h-4 w-4" />
              Get Started
            </Button>
          )}

          {user && user.role === "teacher" && (
            <Button
              variant="destructive"
              className="w-full"
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


// {isAuth ? (
//   <>
//     {user && user.role !== "user" ? (
//       <>
//         {user.subscription.includes(course._id) ? (
//           <Button
//             className="bg-[#8836d9] hover:bg-purple-700"
//             onClick={() => navigate(`/course/study/${course._id}`)}
//           >
//             <BookOpen className="mr-2 h-4 w-4" />
//             Study Now
//           </Button>
//         ) : (
//           <Button
//             className="bg-[#8836d9] hover:bg-purple-700"
//             onClick={() => navigateToOtherComponent('Lecture')}
//           >
//             <ArrowRight className="mr-2 h-4 w-4" />
//             Get Started
//           </Button>
//         )}
//       </>
//     ) : (
//       <Button
//         className="bg-purple-600 hover:bg-purple-700"
//         onClick={() => navigate(`/course/study/${course._id}`)}
//       >
//         <BookOpen className="mr-2 h-4 w-4" />
//         Study Now
//       </Button>
//     )}
//   </>
// ) : (
//   <Button
//     className="bg-purple-600 hover:bg-purple-700"
//     onClick={() => navigateToOtherComponent('Lecture')}
//   >
//     {/* <LogIn className="mr-2 h-4 w-4" /> */}
//     Get Started
//   </Button>
// )}

// {user && user.role === "teacher" && (
//   <Button
//     variant="destructive"
//     className="mt-2"
//     onClick={() => deleteHandler(course._id)}
//   >
//     <Trash2 className="mr-2 h-4 w-4" />
//     Delete Course
//   </Button>
// )}

// <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.3 }}
//     >
//       <Card className="overflow-hidden h-full">
//         <div className="aspect-video relative overflow-hidden">
//           <img
//             src={${course.image}}
//             alt={course.title}
//             className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
//           />
//         </div>
//         <CardContent className="p-6">
//           <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
//           <div className="space-y-2 text-sm text-muted-foreground">
//             <div className="flex items-center gap-2">
//               <User className="h-4 w-4" />
//               <span>Instructor: {course.createdBy}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Clock className="h-4 w-4" />
//               <span>Duration: {course.duration} weeks</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <IndianRupee className="h-4 w-4" />
//               <span>Price: ₹{course.price}</span>
//             </div>
//           </div>
//         </CardContent>
//         <CardFooter className="p-6 pt-0 flex flex-col gap-3">
          
//         </CardFooter>
//       </Card>
//     </motion.div>
//   );