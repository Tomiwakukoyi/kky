import SectionIntro from "./reusable/SectionIntro";

const HeroSect = () => {
  return (
    <section className="text-white flex flex-col gap-10 md:mt-20 md:flex-row md:gap-24">
      <div className="  md:w-[500px] ">
        {/* greeting */}
        <SectionIntro title="HI, I'M" heading="Tomiwa Kukoyi" introSize="lg" />

        {/* intoriduction */}
        <span className=" ">
          Tomiwa Kukoyi is a highly skilled Software Engineer and proven ability
          for solving problems and writing clean and efficient code. <br /> With
          his background and experience in Mathematics and Computer science and
          also technical background in skills like React.js, Python, and AWS,
          <br /> Tomiwa Kukoy poses as a valuable asset.
        </span>
      </div>
      <img src="/images/tomiwa.jpg" alt="Tomiwa Kukoyi picture" className=" w-[400px] md:flex-1" />
    </section>
  );
};

export default HeroSect;
