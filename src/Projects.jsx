import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Project } from "./export";

const Projects = ({ data }) => {
  return (
    <section className="section-spacing" id="projects">
      <div className="section-container">

      {/* Heading */}
      <h2
        className="main-title"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        My Projects
      </h2>

      {/* Swiper Carousel */}
      <div>
        <Swiper
          className="mySwiper"
          modules={[Navigation, Pagination, Scrollbar]}
          navigation
          loop={true}
        >
          {data.map((project, idx) => (
            <SwiperSlide key={idx} className="min-h-28">
              <div className="project-slide">
                <Project project={project} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
    </section>
  );
};

export default Projects;
