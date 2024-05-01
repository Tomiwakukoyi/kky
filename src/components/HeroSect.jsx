import SectionIntro from "./reusable/SectionIntro";

const HeroSect = () => {
  return (
    <section className="text-white flex flex-col  gap-10">
      {/* greeting */}
      <SectionIntro title="HI, I'M" heading="Tomiwa Kukoyi" introSize="lg" />

      {/* intoriduction */}
      <span>
        Tomiwa Kukoyi is a highly skilled Software Engineer and proven ability
        for solving problems and writing clean and efficient code. <br /> With
        his background and experience in Mathematics and Computer science and
        also technical background in skills like React.js, Python, and AWS,
        <br /> Tomiwa Kukoy poses as a valuable asset.
      </span>
      <img src="/images/tomiwa.jpg" alt="Tomiwa Kukoyi picture" />
    </section>
  );
};

export default HeroSect;
