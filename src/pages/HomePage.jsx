import React from "react";
import imgHome from "../../public/assets/img/img-home.png";
import imgAbout from "../../public/assets/img/logo.png";
import { projectApi } from "../data/ProjectApi";

const HomePage = () => {
  return (
    <main>
      <div className="container mx-auto px-10 pt-36 pb-32">
        {/* hero section */}
        <section>
          <div className="hero-section mb-24 md:mb-32">
            <div className="grid grid-cols-1 text-center gap-20 items-center md:text-left md:grid-cols-2">
              <div className="box-1 md:order-2">
                <img
                  src={imgHome}
                  alt="tailwind-image"
                  className="w-[150px] mx-auto mb-[-50px] md:m-0 md:w-full"
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
                  Placeat tempore aliquid debitis facilis dolorum vitae
                  laboriosam necessitatibus. Omnis explicabo vero, in id
                  aspernatur, aperiam temporibus iusto amet laboriosam
                  blanditiis eveniet.
                </p>
                <button className="mx-auto block md:mx-0 mt-6 bg-sky-500 border text-white py-3 px-10 rounded-full shadow text-sm md:text-lg hover:bg-white hover:text-sky-500 hover:border-sky-500 duration-300 transition-colors">
                  Tentang Kami
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* hero section end */}

        {/* about section */}
        <section>
          <div className="about-section mb-24 md:mb-32">
            <h1 className="text-4xl font-medium mb-8 text-center md:mb-20 md:text-5xl lg:text-6xl">
              About
            </h1>
            <div className="grid grid-cols-1 gap-20 text-center items-center md:grid-cols-2 md:text-right">
              <div className="box-1">
                <img
                  src={imgAbout}
                  alt="logo"
                  className="w-[150px] mx-auto mb-[-50px] md:m-0 md:w-full"
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
          </div>
        </section>
        {/* about section end */}

        {/* services section */}
        <section>
          <div className="services-section mb-24 md:mb-32">
            <div className="text-services text-center mb-10 md:mb-14 lg:mb-20">
              <h1 className="text-4xl font-medium mb-3 md:text-5xl md:mb-5 lg:mb-8 lg:text-6xl">
                Services
              </h1>
              <p className="lg:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="box-1 p-10 bg-sky-500 border-2 border-sky-500 text-white rounded-3xl shadow-md hover:bg-white hover:text-sky-500 hover:border-sky-500 duration-300 transition-colors">
                <h1 className="text-2xl mb-5 md:text-3xl lg:text-4xl">1</h1>
                <h2 className="text-xl font-semibold mb-1 md:mb-3 md:text-2xl lg:text-3xl">
                  lorem
                </h2>
                <h3 className="text-lg/7 md:text-2xl/8">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores necessitatibus quisquam fuga culpa odit aliquid
                  deserunt dolore cumque magni perferendis!
                </h3>
              </div>
              <div className="box-2 p-10 bg-sky-500 border-2 border-sky-500 text-white rounded-3xl shadow-md hover:bg-white hover:text-sky-500 hover:border-sky-500 duration-300 transition-colors">
                <h1 className="text-2xl mb-5 md:text-3xl lg:text-4xl">2</h1>
                <h2 className="text-xl font-semibold mb-1 md:mb-3 md:text-2xl lg:text-3xl">
                  lorem
                </h2>
                <h3 className="text-lg/7 md:text-2xl/8">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores necessitatibus quisquam fuga culpa odit aliquid
                  deserunt dolore cumque magni perferendis!
                </h3>
              </div>
              <div className="box-3 p-10 bg-sky-500 border-2 border-sky-500 text-white rounded-3xl shadow-md hover:bg-white hover:text-sky-500 hover:border-sky-500 duration-300 transition-colors">
                <h1 className="text-2xl mb-5 md:text-3xl lg:text-4xl">3</h1>
                <h2 className="text-xl font-semibold mb-1 md:mb-3 md:text-2xl lg:text-3xl">
                  lorem
                </h2>
                <h3 className="text-lg/7 md:text-2xl/8">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores necessitatibus quisquam fuga culpa odit aliquid
                  deserunt dolore cumque magni perferendis!
                </h3>
              </div>
            </div>
          </div>
        </section>
        {/* services section end */}

        {/* project section */}
        <section>
          <div className="project-section">
            <div className="text-project text-center mb-10 md:mb-14 lg-mb-20">
              <h1 className="text-4xl font-medium mb-3 md:text-5xl md:mb-5 lg:mb-7 lg:text-6xl">
                Project
              </h1>
              <p className="lg:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-4">
              {/* map untuk project */}
              {projectApi.map((data) => {
                return (
                  <div
                    className="box bg-white p-5 rounded-3xl shadow-xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                    key={data.id}
                  >
                    <img
                      src={data.imgUrl}
                      alt="gambar project 1"
                      className="w-full h-48 rounded-2xl object-cover"
                    />
                    <h1 className="text-xl font-semibold mt-7 mb-2 md:text-2xl lg:text-3xl">
                      {data.title}
                    </h1>
                    <p className="text-lg/7 mb-4">{data.description}</p>
                    <a
                      href="#"
                      className="text-sky-500 hover:text-sky-600 duration-300 transition-colors"
                    >
                      Read More...
                    </a>
                  </div>
                );
              })}
              {/* map untuk project end */}
            </div>
          </div>
        </section>
        {/* project section end */}
      </div>
    </main>
  );
};

export default HomePage;
