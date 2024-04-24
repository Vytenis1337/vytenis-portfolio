import { socialIcons } from "../utils/contactServices";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "../utils/send-email";
import { MailValidator } from "../lib/validators/mail-validator";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(MailValidator) });

  function onSubmit(data) {
    sendEmail(data);
    reset();
  }
  return (
    <div id="contact" className="w-full lg:h-screen ">
      <div className="mx-auto pt-8 lg:pt-20 text-center ">
        <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl capitalize font-bold text-white mb-4">
          contacts
        </h1>

        <div
          data-aos="zoom-in-down"
          className="flex flex-col md:flex-row gap-4 lg:gap-8 mt-20"
        >
          <div className="w-full md:w-1/2 h-full rounded-xl lg:mt-10 p-4">
            <div className="grid mx-auto space-y-4">
              {socialIcons.map(({ id, href, child, color }) => (
                <a key={id} href={href} target="_blank" rel="noreferrer">
                  <div
                    className={`flex flex-col items-center justify-center hover:scale-105 duration-200 p-3 lg:p-6 cursor-pointer text-${color} hover:text-white`}
                  >
                    {child}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* form  */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full md:w-1/2 lg:w-1/3 xl:w-1/4 gap-10 my-auto text-center text-transform: capitalize text-black bg-transparent border-4 p-4 shadow-lg rounded-lg"
          >
            <h1 className="text-3xl font-semibold text-white">Write Me</h1>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-2xl text-transform: capitalize text-white"
              >
                name
              </label>
              <input
                type="text"
                placeholder="Name"
                className={`input text-xl p-4 border-2 border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 rounded-lg outline-none transition duration-150 ${
                  errors.name ? "border-red-500" : ""
                }`}
                {...register("name", { required: true })}
              />
              {errors?.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-2xl text-transform: capitalize text-white"
              >
                email
              </label>
              <input
                type="email"
                placeholder="example@domain.com"
                className={`input text-xl p-4 border-2 border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 rounded-lg outline-none transition duration-150 ${
                  errors.email ? "border-red-500" : ""
                }`}
                {...register("email")}
              />
              {errors?.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-2xl text-transform: capitalize text-white"
              >
                message
              </label>
              <textarea
                rows={4}
                placeholder="Type your message"
                className={`input text-xl p-4 border-2 border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 rounded-lg outline-none transition duration-150 ${
                  errors.message ? "border-red-500" : ""
                }`}
                {...register("message", { required: true })}
              ></textarea>
              {errors?.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>
            <button
              disabled={isSubmitting}
              className="uppercase px-6 py-4 lg: w-1/2 mx-auto font-bold text-white transition duration-300 ease-in-out transform border-0 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 hover:scale-105  disabled:opacity-50"
            >
              {isSubmitting ? "Loading..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
