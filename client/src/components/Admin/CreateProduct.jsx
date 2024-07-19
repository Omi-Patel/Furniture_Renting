import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

const CreateProduct = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState(true);

    // createMenu Handle
    const createProductHandle = async () => {
        // client side validation
        if (!name || !description || !available || !imageUrl || !price) {
            return toast.error("Please Provide All The Data..!");
        }

        const response = await fetch(
            import.meta.env.VITE_BASE_URL + `/api/products`,
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    description,
                    imageUrl,
                    price,
                    available,
                }),
            }
        );

        //receiving response
        const createdProduct = await response.json();
        console.log(createdProduct);

        // condition
        if (createdProduct.error) {
            toast.error(createdProduct.error);
        } else {
            toast.success(createdProduct.success);
            setName("");
            setDescription("");
            setImageUrl("");
            setPrice("");
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/* go back */}
            <div className="bg-yellow-100 w-36 flex items-center justify-center p-2 rounded-full m-4">
                <NavLink to={"/dashboard"}>
                    <div className="flex gap-2 items-center">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <span>
                            {/* Text  */}
                            <h1 className="text-3xl font-medium">Back !</h1>
                        </span>
                    </div>
                </NavLink>
            </div>

            <section className="rounded-md bg-black/80 ">
                <div className="flex items-center justify-center bg-white  py-10 sm:px-6 sm:py-16 lg:px-8">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <div className="mb-2">
                            <svg
                                width="50"
                                height="56"
                                viewBox="0 0 50 56"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                        <h2 className="text-[32px] font-bold leading-tight text-black">
                            Create New Product..!
                        </h2>

                        <form action="#" method="POST" className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label
                                        htmlFor="product"
                                        className="text-base font-medium text-gray-900"
                                    >
                                        Product Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            name="name"
                                            placeholder="Chair"
                                            id="productname"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        ></input>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="description"
                                        className="text-base font-medium text-gray-900"
                                    >
                                        Description
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Description..."
                                            id="description"
                                            name="description"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        ></input>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="img"
                                        className="text-base font-medium text-gray-900"
                                    >
                                        Product Image
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Photo"
                                            id="img"
                                            name="imageUrl"
                                            value={imageUrl}
                                            onChange={(e) => setImageUrl(e.target.value)}
                                        ></input>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="price"
                                        className="text-base font-medium text-gray-900"
                                    >
                                        Price
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Price"
                                            id="price"
                                            name="price"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        ></input>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="availble"
                                        className="text-base font-medium text-gray-900"
                                    >
                                        Is Availble ?
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            name="available"
                                            id="isavailble"
                                            value={available}
                                            onChange={(e) => setAvailable(e.target.value)}
                                        >
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <Button
                                        onClick={createProductHandle}
                                        variant="shadow"
                                        color="success"
                                        type="button"
                                        className="inline-flex mt-6 items-center justify-center rounded-md  py-2.5  px-6 tracking-wider text-[16px] leading-7 text-blue-950 font-bold "
                                    >
                                        Add Product
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CreateProduct;
