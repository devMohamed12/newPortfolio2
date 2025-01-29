const Project = ({ project }) => {
  const {
    category,
    demoLink,
    description,
    githubLink,
    image,
    title,
    usedSkills,
  } = project;

  return (
    <div className="py-6" data-aos="fade-down" data-aos-delay="500">
      <div>
        <h2 className="text-2xl font-bold  mb-6 uppercase rounded-xl text-Jost">
          {title}
        </h2>
        <div>
          <div className="flex flex-wrap items-center gap-3 lg:gap-4 ">
            {usedSkills.map(({ name, backgroundColor }) => (
              <div
                key={name}
                style={{ backgroundColor }}
                className="py-2 px-3 rounded-full text-base text-white"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 mb-8">{description}</p>

        <div className=" mb-6">
          <a
            href={githubLink}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  px-4 rounded mr-4 lg:mr-8"
          >
            GitHub
          </a>
          <a
            href={demoLink}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Demo
          </a>
        </div>
      </div>

      <img src={image} className="rounded-lg shadow-lg" />
    </div>
  );
};

export default Project;
