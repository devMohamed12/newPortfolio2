const Header = () => {
  return (
    <header className="bg-teal-700 py-5 lg:py-6 shadow-md shadow-black/15 mb-10 lg:mb-3">
      <div className="section-container">
        <div className="flex justify-between items-center lg:flex-row flex-col gap-4 text-white text-xl">
          <div>
            <h4 className="font-Jost text-2xl font-extrabold uppercase">
              mohammed samy
            </h4>
          </div>

          <div className="flex justify-center gap-4 text-base lg:text-[19px]">
            <a href="" className="block hover:underline">
              about me
            </a>
            <a href="" className="block hover:underline">
              skills
            </a>
            <a href="" className="block hover:underline">
              projects
            </a>
            <a href="" className="block hover:underline">
              contact me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;