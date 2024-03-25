import React from "react";
import { FaRegCheckSquare, FaRegClock, FaRegHeart } from 'react-icons/fa';
import './StudentProgress.css'

function StudentProgress() {
  const [purchasedCourses, setPurchasedCourses] = React.useState(5);
  const [wishlistCourses, setWishlistCourses] = React.useState(3);

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Student Progress</h1>
      <div className="flex justify-center">
        <div className="bg-gray-200 p-4 rounded-lg m-4">
          <FaRegCheckSquare className="text-green-500 text-4xl mb-2" />
          <p className="text-lg">Purchased Courses: {purchasedCourses}</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg m-4">
          <FaRegClock className="text-yellow-500 text-4xl mb-2" />
          <p className="text-lg">Total Courses: 10</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg m-4">
          <FaRegHeart className="text-red-500 text-4xl mb-2" />
          <p className="text-lg">Wishlist Courses: {wishlistCourses}</p>
        </div>
      </div>
    </div>
  );
}

export default StudentProgress;