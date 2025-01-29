const Skill = ({ skill: { image, name }, index }) => {
   return (
    <div
      className="flex justify-center items-center gap-3  flex-col py-3 rounded-xl "
      data-aos="fade-down-right" 
      data-aos-delay={`${500 + index * 200}`}
    >
      <img src={image} alt={name} className="w-44" />
      <h3 className="text-[#3ec1b9] uppercase font-semibold font-sans text-lg   mt-5   ">{name}</h3>
    </div>
  );
};

export default Skill;
