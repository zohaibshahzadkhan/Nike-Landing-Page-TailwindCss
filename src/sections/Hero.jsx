import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center gap-10 min-h-screen "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 lg:pl-56">
        <p className="text-xl font-montserrat text-coral-red">
          {" "}
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>{" "}
          <br />{" "}
          <span className="text-coral-red inline-block mt-3"> Nike </span> Shoes
        </h1>
        <p className="font-montserrat text-lg leading-8 text-slate-gray mb-14 sm:max-w-sm">
          Discover stylish nike arrivals, quality comfort and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-8 text-slate-gray font-montserrat">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="z-10 relative object-contain"
        />
        <div className=" flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] mx-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe) => { setBigShoeImg(shoe)}} bigShoeImg={bigShoeImg}/>       
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
