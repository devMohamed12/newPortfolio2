const AboutMe = () => {
  return (
    <section className="section-spacing !mt-0">
      <div className="section-container ">
        <div className="flex justify-center items-center flex-col text-center  min-h-96">
          {/* maiin  */}
          <h2 data-aos="fade-down" className="main-title" data-os-delay="200">
            <span className="!text-black ">I am Mohamed Samy </span>
            <span className="capitalize text-teal-600 font-extrabold">
              front end developer
            </span>
          </h2>
          

         
 
          <p
            data-aos="fade-down"
            data-aos-delay="400"
            className="text-base text-gray-700 my-3.5 lg:my-6 w-[90%]"
          >
            Hi there! I'm a passionate developer with a knack for creating
            elegant solutions in the least amount of time. As a lifelong
            learner, I'm always looking for new challenges and opportunities to
            grow. My journey started with a curiosity for how things work, which
            eventually blossomed into a career in software development.
            <span className="block mt-5">
              Let's build something amazing together!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
