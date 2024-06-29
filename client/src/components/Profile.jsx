import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { userId } = useParams();
  const [profile, setProfile] = useState({});

  const fetchUser = async () => {
    try {
      const blob = await fetch(
        import.meta.env.VITE_BASE_URL + `/api/users/profile/${userId}`
      );

      const response = await blob.json();

      setProfile(response.user);
      // console.log(profile);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="h-screen ">
      <div className=" max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name :
          </label>
          <p className="text-lg text-gray-900">{profile.name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Mobile No. :
          </label>
          <p className="text-lg text-gray-900">{profile.number}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email :
          </label>
          <p className="text-lg text-gray-900">{profile.email}</p>
        </div>
        <button className="bg-black text-white py-2 px-4 rounded-xl hover:bg-gray-900 focus:outline-none focus:bg-gray-900">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
