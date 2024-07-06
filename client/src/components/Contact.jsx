import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify"

export default function Contact() {
  // emailjs, name, subject, message
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !name || !subject || !message) {
      toast.error("Please provide all the required data...")
    }

    try {
      emailjs.sendForm(
        'service_1fx4v2a',
        'template_q6cqk0p',
        e.target,
        'RcJS2rrh_yC4RmUQh'
      )
        .then((result) => {
          console.log(result.text)
          toast.success("Message sent successfully!")
          setEmail("")
          setName("")
          setSubject("")
          setMessage("")
        })
        .catch((error) => {
          console.log(error.text)
          toast.error("Try again...")
        });
    } catch(error) {
      toast.error("Something went wrong...")
    }
  };

  return (
    <>
      <div>
        <Helmet>
          <title>
            Contact us
          </title>
        </Helmet>
      </div>
      <section className="bg-white text-black">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8" >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-black "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-black "
              >
                Name
              </label>
              <input
                type="text"
                id="text"
                className="shadow-sm border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-black bg-white"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-black bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-black bg-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-black bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-bold text-center text-white rounded-lg bg-black sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
