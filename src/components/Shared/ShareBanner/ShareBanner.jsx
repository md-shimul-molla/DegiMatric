

const SharedBanner = ({ title, description }) => {
  return (
    <section id="sharedBanner" className="bg-secondary">
      <div className="main_container h-full">
        <div className="flex h-full flex-col items-center justify-center gap-5">
          <h2 className="text-2xl md:text-4xl font-semibold capitalize text-white  ">
            {title}
          </h2>
          <p className="w-full md:w-2/3 text-center text-[#E6E6E6] text-base md:text-lg">{description}</p>
        </div>
      </div>
     
    </section>
  );
};

export default SharedBanner;
