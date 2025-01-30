import ContactForm from "./ContactForm.jsx";

const ContactUs = () => {
  return (
    <section className="section-spacing" id="contactME">
      <div className="section-container">
        {/* Title */}
        <h2 className="main-title" data-aos="fade-right">
          Let's Work Together
        </h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUs;
