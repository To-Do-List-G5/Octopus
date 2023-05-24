import About1 from "../Images/about.png";

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4      ">
      <div className="flex flex-col lg:flex-row justify-between gap-8  aboutHero  ">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img className="w-full h-full" src={About1} alt="A group of People" />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12 aboutUS ">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Our Story
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8 ">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md ">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden w-40 h-40  "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIslvinS5jD5gVj9PhW8zoVyAh7nwKV7aGUtUqQDih&s  "
                alt="Alexa featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Bashar
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                alt="Olivia featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                dania{" "}
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                alt="Liam featued Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                abdalrahman drobi
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                alt="Elijah featured img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Amer Khawalda
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                alt="Elijah featured img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Hamzeh Dawahreh
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                alt="Elijah featured img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Issa Zeidan
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default About;
