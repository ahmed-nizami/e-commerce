import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/ui/input";
import { Product01Img, Product02Img } from "../common/Images";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="px-7 md:px-14 py-6">
      <HeroSection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Link to={"/shop"} className="text-3xl opacity-70 hover:opacity-100">
          Men
        </Link>
        <Link to={"/shop"} className="text-3xl opacity-70 hover:opacity-100">
          Women
        </Link>
        <Link to={"/shop"} className="text-3xl opacity-70 hover:opacity-100">
          Kid
        </Link>

        <Input placeholder={"Search"} />
      </div>
      <div className="flex justify-between mt-12 gap-8  lg:flex-row flex-col">
        <div className="lg:w-1/2 w-full flex flex-col justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-6xl lg:text-7xl font-black">
              New <br /> Collection
            </h1>
            <p className="text-black/70 text-base">
              <p>Summer</p>
              <p> 2024</p>
            </p>
          </div>
          <Link
            to={"/shop"}
            className="w-full bg-[#D9D9D9] rounded px-8 py-3 capitalize text-lg font-semibold lg:flex justify-between items-center hover:px-6 ease-in transition-all hidden "
          >
            <span>Go to shop</span>
            <ArrowRight />
          </Link>
        </div>
        <div className="flex w-full justify-between items-center gap-4">
          <Link to="/shop" className="w-full z-5">
            <Product01Img className={"w-full"} />
          </Link>
          <Link to="/shop" className="w-full z-5">
            <Product02Img className={"w-full"} />
          </Link>
        </div>
        <Link
          to={"/shop"}
          className="lg:hidden w-full bg-[#D9D9D9] rounded px-8 py-3 capitalize text-lg font-semibold flex justify-between items-center hover:px-6 ease-in transition-all"
        >
          <span>Go to shop</span>
          <ArrowRight />
        </Link>
      </div>
    </>
  );
};

export default Home;
