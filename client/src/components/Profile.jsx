import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Avatar, Button } from "@nextui-org/react";
import Loader from "../components/Loader";
import { Helmet } from "react-helmet";
import EditProfileForm from "../components/EditProfileForm"; // Import the new component

const Profile = () => {
  const { userId } = useParams();
  const [profile, setProfile] = useState({});
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editProfile, setEditProfile] = useState({
    name: "",
    email: "",
    mobile: "",
    image: null,
  });

  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const blob = await fetch(
        import.meta.env.VITE_BASE_URL + `/api/users/profile/${userId}`
      );

      const response = await blob.json();

      setProfile(response.user);
      setOrders(response.user.orders);
      setLoading(false);
      setEditProfile({
        name: response.user.name,
        email: response.user.email,
        mobile: response.user.mobile,
        image: response.user.image,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setEditProfile((prevProfile) => ({
      ...prevProfile,
      image: e.target.files[0],
    }));
  };

  const handleEditProfile = async () => {
    const formData = new FormData();
    formData.append("name", editProfile.name);
    formData.append("email", editProfile.email);
    formData.append("mobile", editProfile.mobile);
    if (editProfile.image) {
      formData.append("image", editProfile.image);
    }

    try {
      const response = await fetch(
        import.meta.env.VITE_BASE_URL + `/api/users/profile/${userId}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (response.ok) {
        const updatedUser = await response.json();
        setProfile(updatedUser.user);
        setEditMode(false);
      } else {
        console.log("Failed to update profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <Helmet>
          <link rel="icon" type="image/svg+xml" href="./src/assets/Picture.png" />
          <title>{profile.name}</title>
        </Helmet>
      </div>
      <div className="min-h-screen max-w-7xl mx-auto ">
        {editMode ? (
          <EditProfileForm
            editProfile={editProfile}
            handleInputChange={handleInputChange}
            handleImageChange={handleImageChange}
            handleEditProfile={handleEditProfile}
            setEditMode={setEditMode}
          />
        ) : (
          <>
            <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
              <div className="flex sm:flex-row gap-4 sm:p-4 items-center">
                <Avatar
                  isBordered
                  color="primary"
                  radius="md"
                  src={profile.image || "https://i.pravatar.cc/150?u=a04258114e29026708c"}
                  className=""
                />
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter">
                  Welcome, {profile.name} 👋
                </h1>
                <abbr title="Edit Profile"><button
                    onClick={() => setEditMode(true)}
                    className="border-1 rounded-full p-2 border-slate-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                    </svg>
                  </button>
                </abbr>
              </div>
              <div className="sm:p-4">
                <h2 className="flex justify-center items-center gap-2 text-xl font-semibold">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Zm.437-.675L12 14.66l10.063-6.666A3 3 0 0 0 18 5.25H6a3 3 0 0 0-4.063 2.745Z" />
                    </svg>
                  </span>
                  <span>{profile.email}</span>
                </h2>
                <h3 className="flex gap-2 items-center justify-center sm:justify-start">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>+91 {profile.mobile}</span>
                </h3>
              </div>
            </div>

            <div className="mt-6">
              <div>
                <h1 className="flex gap-2 items-center text-zinc-700 p-4 text-2xl font-semibold tracking-tight">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                      />
                    </svg>
                  </span>
                  <span>Order History</span>
                </h1>
                <div>
                  {orders.length > 0 ? (
                    <div className="relative overflow-x-auto shadow-md sm:rounded-xl mb-4">
                      <table className="w-full border-2 border-black shadow-md text-sm text-left text-gray-900">
                        <thead className="text-lg bg-slate-400">
                          <tr>
                            <th scope="col" className="px-6 py-3">
                              Sr.No
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Product Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Product Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                              QTY.
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Payment Status
                            </th>
                          </tr>
                        </thead>
                        {loading ? (
                          <div className="p-4 w-full mx-auto">
                            <Loader size={"lg"} />
                          </div>
                        ) : (
                          <>
                            {orders.map((order, index) => {
                              return (
                                <tbody key={index}>
                                  <tr className="border-b-2 border-gray-300 text-slate-900 font-medium">
                                    <td className="px-6 py-4">{index + 1}.</td>
                                    <td className="px-6 py-4">
                                      <img
                                        src={order.product.imageUrl}
                                        alt={order.product.name}
                                        height={60}
                                        width={60}
                                        className="rounded-lg"
                                      />
                                    </td>
                                    <td className="px-6 py-4">
                                      {order.product.name}
                                    </td>
                                    <td className="px-6 py-4 uppercase">
                                      ₹ {order.product.price}
                                    </td>
                                    <td className="px-6 py-4 uppercase">
                                      {order.qty}
                                    </td>
                                    <td className="px-6 py-4 uppercase">DONE</td>
                                  </tr>
                                </tbody>
                              );
                            })}
                          </>
                        )}
                      </table>
                    </div>
                  ) : (
                    <div className="p-5 flex flex-col text-zinc-600 w-52 gap-2 ">
                      <h1 className="font-medium tracking-tight">
                        No Orders Yet...!
                      </h1>
                      <Button
                        color="primary"
                        variant="flat"
                        className="font-medium tracking-wider"
                      >
                        <NavLink to={"/products"} className="px-4 py-3">
                          Continue Shopping!
                        </NavLink>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
