import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const Login_first = () => {
    toast.error("You need to login first in order to choose this plan!");
    navigate("/signin");
  };

  return (
    <>
      <div>
        <Helmet>
          <title>Pricing</title>
        </Helmet>
      </div>
      <section className="relative my-12 overflow-hidden py-10 md:my-24 lg:my-32">
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:-mr-2 lg:w-1/3">
                <div className="mx-auto max-w-sm rounded-md border border-gray-200 bg-white pb-20 pl-5 pr-8 pt-6 lg:pb-8">
                  <span className="mb-2 block text-sm font-semibold text-gray-400">
                    PREMIUM
                  </span>
                  <span className="flex items-end">
                    <span className="text-4xl font-extrabold leading-none">
                      $150
                    </span>
                    <span className="text-sm font-semibold">/month</span>
                  </span>
                  <div className="mt-7 border-t border-gray-100 pt-5">
                    <ul className="mb-10">
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Access to Premium Furniture Collection
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Free Furniture Maintenance
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Priority Customer Support
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Flexible Rental Periods
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Free Furniture Assembly
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Insurance Coverage
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Unlimited Swaps
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Access to Seasonal Collections
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Early Access to New Arrivals
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Unlimited Users
                        </span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      onClick={() => Login_first()}
                      className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
              <div className="-mt-4 w-full lg:-mt-0 lg:w-1/3">
                <div className="pt-22 relative mx-auto max-w-sm rounded-lg bg-black px-10 pb-16 ">
                  <div className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white p-2">
                    <div className="flex-shrink-0 rounded-full bg-black px-5 py-4 text-sm font-semibold uppercase text-white">
                      Most Popular
                    </div>
                  </div>
                  <span className="mb-2 block pt-10 text-sm font-semibold text-white">
                    GOLD
                  </span>
                  <span className="flex items-end text-white">
                    <span className="text-4xl font-extrabold leading-none">
                      $100
                    </span>
                    <span className="text-sm font-semibold">/month</span>
                  </span>
                  <div className="mt-7 border-t border-orange-500 pt-5">
                    <ul className="mb-10">
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">
                          Access to Standard Furniture Collection
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">
                          Basic Furniture Maintenance
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">
                          Standard Customer Support
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">
                          Fixed Rental Periods
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">
                          Furniture Assembly on Request
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">
                          Limited Insurance Coverage
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">
                          Limited Swaps
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">
                          Seasonal Collections Access
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">
                          Early Access to New Arrivals
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-white">
                          Unlimited Users
                        </span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      onClick={() => Login_first()}
                      className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
              <div className="-mt-4 w-full lg:-ml-2 lg:-mt-0 lg:w-1/3">
                <div className="rounded-b-5xl lg:rounded-r-5xl mx-auto max-w-sm border border-gray-200 bg-white pb-8 pl-8 pr-5 pt-12 lg:rounded-b-none lg:pt-6">
                  <span className="mb-2 block text-sm font-semibold text-gray-400">
                    BASIC
                  </span>
                  <span className="flex items-end">
                    <span className="text-4xl font-extrabold leading-none">
                      $50
                    </span>
                    <span className="text-sm font-semibold">/month</span>
                  </span>
                  <div className="mt-7 border-t border-gray-100 pt-5">
                    <ul className="mb-10">
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Access to Basic Furniture Collection
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Basic Furniture Maintenance
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Standard Customer Support
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Fixed Rental Periods
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Furniture Assembly on Request
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Limited Insurance Coverage
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          No Swaps
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Limited Seasonal Collections Access
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Early Access to New Arrivals
                        </span>
                      </li>
                      <li className="mb-6 flex items-center">
                        <span className="ml-2 text-sm text-gray-900">
                          Unlimited Users
                        </span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      onClick={() => Login_first()}
                      className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
