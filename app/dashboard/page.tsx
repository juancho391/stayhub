"use client";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardContent from "../components/DashboardContent";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { Context } from "@/context/context";

export default function Dashboard() {
  const { userLogin, token, setUserProfileInfo, userProfileInfo } =
    useContext(Context);
  const getUserProfile = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/users/${userLogin.id}`
      );
      setUserProfileInfo(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardNavbar />
      <DashboardContent />
    </div>
  );
}
