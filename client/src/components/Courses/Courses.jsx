import React from "react";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/Courses/CourseCard";
import { motion } from "framer-motion";


const Courses = () => {
  const { courses } = CourseData();
  console.log(courses);
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Available Courses
        </h1>

        {courses && courses.length > 0 ? (
          <div className="flex flex-col space-y-8">
            {courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No Courses Available Yet!</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Courses;