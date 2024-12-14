import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import API from '../../services/api';
import axios from "axios";
import {toast} from 'sonner';
import { UserData } from "../../context/UserContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock, DollarSign, User } from 'lucide-react';
import Razorpay from "razorpay";

const CourseDescription = ({ user }) => {
  const params = useParams();
  const navigate = useNavigate();


  const { fetchUser } = UserData();

  const { fetchCourse, course, fetchCourses, fetchMyCourse } = CourseData();

  useEffect(() => {
    fetchCourse(params.id);
  }, []);

  const checkoutHandler = async () => {
    const token = localStorage.getItem("token");

    const {
      data: { order },
    } = await API.post(
      `/course/checkout/${params.id}`,
      {},
      {
        headers: {
          token,
        },
      }
    );

    const options = {
      key: "rzp_test_qOoG6bmXwmH2op", 
      amount: order.id,
      currency: "INR",
      name: "anmol", 
      description: "Learn with us",
      order_id: order.id,
      handler: async function (response) {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
          response;

        try {
          const { data } = await API.post(
            `/verification/${params.id}`,
            {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
            },
            {
              headers: {
                token,
              },
            }
          );

          await fetchUser();
          await fetchCourses();
          await fetchMyCourse();
          toast.success(data.message);
          setLoading(false);
          navigate(`/payment-success/${razorpay_payment_id}`);
        } catch (error) {
          toast.error(error.response.data.message);
        }
      },
      theme: {
        color: "#8a4baf",
      },
    };
    const razorpay = new window.Razorpay(options);

    razorpay.open();
  };


  return (
    <div className="container mx-auto px-4 py-8">
      {course && (
        <Card className="overflow-hidden">
          <div className="relative h-64 md:h-96">
            <img
              src={`http://localhost:5000/${course.image}`}
              alt={course.title}
              className="w-full h-full object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{course.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span>Instructor: {course.createdBy}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>Duration: {course.duration} weeks</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="mr-2 h-4 w-4" />
                <span>Price: ₹{course.price}</span>
              </div>
            </div>
            <p className="text-gray-600">{course.description}</p>
          </CardContent>
          <CardFooter>
            {user && user.subscription.includes(course._id) ? (
              <Button 
                onClick={() => navigate(`/course/study/${course._id}`)}
                className="w-full"
              >
                Study Now
              </Button>
            ) : (
              <Button onClick={checkoutHandler} className="w-full">
                Buy Now
              </Button>
            )}
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

const LoadingSkeleton = () => (
  <div className="container mx-auto px-4 py-8">
    <Card>
      <Skeleton className="h-64 md:h-96 w-full" />
      <CardHeader>
        <Skeleton className="h-8 w-3/4" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-4 w-1/4" />
        </div>
        <Skeleton className="h-24 w-full mt-4" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  </div>
);

export default CourseDescription;