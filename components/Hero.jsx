// components
import SearchBox from "./SearchBox";

const Hero = () => {
  return (
    <section className=" pt-24 pb-12 xl:py-0 xl:h-[1087px] bg-hero2 xl:bg-hero bg-cover bg-no-repeat flex justify-center items-center">
      <div className=" container mx-auto flex items-center justify-center xl:justify-start">
        <SearchBox />
      </div>
    </section>
  );
};

export default Hero;
