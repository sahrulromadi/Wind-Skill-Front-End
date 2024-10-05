import React from "react";
import imgHome from "../../public/assets/img/img-home.png";
import imgAbout from "../../public/assets/img/logo.png";

const HomePage = () => {
  return (
    <main>
      <div className="container mx-auto px-10 py-36">
        {/* hero section */}
        <section>
          <div className="hero-section grid grid-cols-1 text-center gap-20 items-center mb-24 md:mb-32 md:text-left md:grid-cols-2">
            <div className="box-1 md:order-2">
              <img
                src={imgHome}
                alt="tailwind-image"
                className="w-[150px] mx-auto mb-[-50px] md:w-full md:m-0"
              />
            </div>
            <div className="box-2 md:order-1">
              <h1 className="text-4xl font-medium lg:text-6xl/tight">
                Belajar Membuat Website Dengan{" "}
                <span className="underline text-sky-500 font-semibold">
                  Tailwind CSS
                </span>
              </h1>
              <p className="lg:text-lg/8 mt-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat tempore aliquid debitis facilis dolorum vitae laboriosam
                necessitatibus. Omnis explicabo vero, in id aspernatur, aperiam
                temporibus iusto amet laboriosam blanditiis eveniet.
              </p>
              <button className="mx-auto block md:mx-0 mt-6 bg-sky-500 text-white py-3 px-10 rounded-full shadow text-sm md:text-lg">
                Tentang Kami
              </button>
            </div>
          </div>
        </section>
        {/* hero section end */}

        {/* about section */}
        <section>
          <h1 className="text-4xl font-medium mb-8 text-center md:mb-20 md:text-5xl lg:text-6xl">
            About
          </h1>
          <div className="about-section grid grid-cols-1 gap-20 text-center items-center md:grid-cols-2 md:text-right">
            <div className="box-1">
              <img
                src={imgAbout}
                alt="logo"
                className="w-[150px] mx-auto mb-[-50px] md:w-full"
              />
            </div>
            <div className="box-2">
              <h3 className="text-3xl font-semibold text-sky-500 mb-5 md:text-4xl lg:text-5xl">
                Wind Skill🌀
              </h3>
              <p className="lg:text-xl/8">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo, nam? Autem quibusdam earum aliquid minima,
                accusantium molestiae officiis, cupiditate officia
                necessitatibus delectus placeat velit reprehenderit libero cum
                debitis exercitationem fuga.
              </p>
            </div>
          </div>
        </section>
        {/* about section end */}
      </div>
    </main>
  );
};

export default HomePage;
