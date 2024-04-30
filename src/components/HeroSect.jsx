import EastIcon from "@mui/icons-material/East";

const HeroSect = () => {
  return (
    <div className="text-white px-9 mt-16 flex flex-col justify-center items-start gap-10">
      {/* greeting */}
      <div>
        <span className="flex text-2xl gap-3">
          <h1>HI, I'M</h1>
          <span className="font-light">———></span>
        </span>
        <h1 className=" text-4xl">Tomiwa Kukoyi</h1>
      </div>
      {/* intoriduction */}
      <span>
        Tomiwa Kukoyi is a highly skilled Software Engineer and proven ability
        for solving problems and writing clean and efficient code. <br /> With his
        background and experience in Mathematics and Computer science and also technical
        background in skills like React.js, Python, and AWS, <br /> Tomiwa Kukoy poses as a valuable asset.
      </span>
      <img src="/images/tomiwa.jpg" alt="" />
    </div>
  );
};

export default HeroSect;
