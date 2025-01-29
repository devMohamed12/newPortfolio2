import { Skill } from "./export";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = ({ data }) => {
  return (
    <section className="section-spacing">
      <div className="section-container">
        <h2 data-aos="fade-down" className="main-title ">
          My Skills
        </h2>

        <p
          data-aos="fade-down"
          data-aos-delay="250"
          className="mb-10 text-center"
        >
          Always love to learn new skills.
        </p>

        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-10 lg:gap-16 justify-center items-center w-full "
        >
          {data.map((skill, index) => (
            <Skill key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
