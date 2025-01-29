import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ContactForm = () => {
  const label = "text-[17px] mb-2 block";
  const input = "input focus:outline-none w-full ";

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    emailjs
      .send("service_6bg8wxw", "template_idi3m9d", values, "OnFvf0nGGwNmXVnuA")
      .then(
        (result) => {
           resetForm();
        },
         
      );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="lg:w-4/6 w-[90%] mx-auto">
          {/* Form Fields */}
          <div
            className="my-9 lg:my-12"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <label htmlFor="name" className={label}>
              write your Name:
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className={`${input}`}
              placeholder="write your name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div
            className="mb-9 lg:mb-12"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <label htmlFor="email" className={label}>
              write Your Email:
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className={`${input}`}
              placeholder="write your email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div
            className="mb-9 lg:mb-12"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            <label htmlFor="subject" className={label}>
              write your Subject:
            </label>
            <Field
              type="text"
              id="subject"
              name="subject"
              className={`${input}`}
              placeholder="write  your subject"
            />
            <ErrorMessage
              name="subject"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div
            className="mb-9 lg:mb-12"
            data-aos="fade-down"
            data-aos-delay="700"
          >
            <label htmlFor="message" className={label}>
              write your Message:
            </label>
            <Field
              as="textarea"
              id="message"
              name="message"
              className={`${input} w-full resize-none textarea h-32`}
              placeholder="write your  message"
              rows={3}
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Submit Button */}
          <div
            className="flex items-center gap-5 mb-8"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer px-3 py-4   text-lg rounded-xl bg-teal-600 text-white w-24  "
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
            <span> OR </span>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/+201008059594"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-2.5  py-4   text-lg rounded-xl bg-green-600 text-white text-center your "
            >
              Contact via
              <FontAwesomeIcon icon={faWhatsapp} className="ml-1 text-xl" />
            </a>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
