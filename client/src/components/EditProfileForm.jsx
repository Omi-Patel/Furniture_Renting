import React from "react";
import { Button } from "@nextui-org/react";
import { Helmet } from "react-helmet";

const EditProfileForm = ({ editProfile, handleInputChange, handleImageChange, handleEditProfile, setEditMode }) => {
  return (
    <>
    <Helmet>
    <title>
        Edit Profile
    </title>
    </Helmet>
    <div className="mt-4 p-4">
      <h2 className="text-2xl font-bold">Edit Profile</h2>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={editProfile.name}
          onChange={handleInputChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={editProfile.email}
          onChange={handleInputChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Mobile</label>
        <input
          type="text"
          name="mobile"
          value={editProfile.mobile}
          onChange={handleInputChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Profile Image</label>
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mt-4 flex justify-end">
        <Button onClick={handleEditProfile} className="mr-2">Update Profile</Button>
        <Button onClick={() => setEditMode(false)} variant="flat">Cancel</Button>
      </div>
    </div>
    </>
  );
};

export default EditProfileForm;
