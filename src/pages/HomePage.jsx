import React from "react";
import imgHome from "../assets/images/img-home.png";

const HomePage = () => {
  return (
    <div className="container mx-auto px-10 pb-10">
      <div className="hero pt-36 grid grid-cols-1 md:grid-cols-2 items-center gap-20">
        <div className="box-1 md:order-2">
          <img
            src={imgHome}
            alt="tailwind-image"
            className="w-[150px] mx-auto mb-[-50px] md:w-full md:m-0"
          />
        </div>
        <div className="box-2 md:order-1">
          <h1 className="text-center md:text-left text-4xl md:text-4xl lg:text-6xl/tight font-medium">
            Belajar Membuat Website Dengan{" "}
            <span className="underline text-sky-500 font-semibold">
              Tailwind CSS
            </span>
          </h1>
          <p className="text-center md:text-left lg:text-base/8 mt-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            tempore aliquid debitis facilis dolorum vitae laboriosam
            necessitatibus. Omnis explicabo vero, in id aspernatur, aperiam
            temporibus iusto amet laboriosam blanditiis eveniet.
          </p>
          <button className="mx-auto block md:mx-0 mt-6 bg-sky-500 text-white py-3 px-10 rounded-full shadow text-sm md:text-lg">
            Tentang Kami
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
