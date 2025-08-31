import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import bottle from "../assets/fanta.png";

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

useEffect(() => {
  let ctx = gsap.context(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=410%",
        scrub: true,
        pin: imageRef.current,
      },
    });
    // From initial position to Home
    tl.to(imageRef.current, {
      x: "28vw",
      duration: 1,
      rotate: 25,
      scale: 1.1,
    });
    // Home -> About
    tl.to(imageRef.current, {
      x: "-26vw",
      duration: 1,
      rotate: -25,
      scale: 1.2,
    });
    // about -> flavors 
    tl.to(imageRef.current, {
      x: "-25vw",
      y:"10vh",
      duration: 1,
      rotate: 0,
      scale: 0.4,
    });
    //flavors -> contact
    tl.to(imageRef.current, {
      x: "22vw",
      y:"0vh",
      duration: 1,
      rotate: 25,
      scale: 1.2,
    });

    
  });

  return () => ctx.revert(); // cleanup
}, []);
  return (
    <>
      <div className="flex xl:hidden flex-col font-bold items-center justify-center px-20 py-8  rounded-xl">
        <h1 className="text-xl mb-2 mt-20 text-center text-red-700">NOTE</h1>
        <p>Open this website on Desktop Screen</p>
      </div>
    <div
      ref={containerRef}
      className="relative hidden xl:block h-[400vh] bg-orange-100 text-purple-900 font-poppins"
    >
      <div className="absolute  top-12 left-30 font-bold">
        <h1 className="text-6xl">“Unleash the Fizz. Taste the Fun.”</h1>
        <p className="ml-10">Dive into the world of Fanta — a burst of fruity flavor, refreshing fizz, and endless energy that keeps the vibe alive.</p>
      </div>
      <div className="absolute top-135 bg-amber-600 w-full py-2 text-center text-white tracking-wider font-bold">
        <p>We’re not just a drink — we’re a vibe. A refreshing escape into bold flavors, fun times, and vibrant energy.</p>
      </div>
        <button className="absolute top-145 bg-purple-900 px-8 py-2 ml-135 mt-5 font-bold text-white rounded-lg">Discover More</button>
      {/* Sticky Image */}
      <div className="sticky flex z-10 top-0 h-screen  items-center justify-center pointer-events-none">
        <img
          ref={imageRef}
          src={bottle}
          alt="Fanta Bottle"
          className="w-[500px]  drop-shadow-2xl"
        />
      </div>

      {/* Page 1 - Home */}
      <section className="h-screen flex flex-col justify-center items-start pl-20 bg-[#eea12d] text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Fanta World 🍊</h1>
        <p className="text-lg max-w-lg">
          Refresh your moments with fruity fun. Scroll to explore our story,
          flavors & more!
        </p>
        <button className="mt-4 px-8 py-2 rounded-lg text-white bg-purple-900">Taste Now</button>
      </section>

      {/* Page 2 - About */}
      <section className="h-screen flex justify-end items-center px-20 bg-white text-purple-900">
        <div className="w-1/2 ">
          <h2 className="text-5xl font-bold mb-4">About Fanta</h2>
          <p className="text-lg">
            Born in the 1940s, Fanta is a global favorite with bold fruit
            flavors and fun vibes. It’s enjoyed in more than 190 countries today
            🍓🍋🍑
          </p>
        </div>
      </section>

      {/* Page 3 - Flavors */}
      <section className="h-screen flex flex-col justify-center items-center bg-gray-100 px-20">
        <h2 className="text-5xl font-bold mb-10 text-orange-500">
          Our Flavors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-orange-200 p-6 rounded-2xl text-center shadow-md relative">
            <h3 className="text-xl font-bold">Orange</h3>
            <div className="flavor-slot w-34 h-34 mx-auto mt-4  rounded-lg"></div>
          </div>
          <div className="bg-purple-300 p-6 rounded-2xl text-center shadow-md">
            <h3 className="text-xl font-bold">Grape</h3>
          </div>
          <div className="bg-pink-300 p-6 rounded-2xl text-center shadow-md">
            <h3 className="text-xl font-bold">Strawberry</h3>
          </div>
          <div className="bg-yellow-300 p-6 rounded-2xl text-center shadow-md">
            <h3 className="text-xl font-bold">Pineapple</h3>
          </div>
        </div>
      </section>

      {/* Page 4 - Contact */}
      <section className="h-screen flex justify-between items-center px-20 bg-lime-200">
        <div className="w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-purple-900">
            Contact Us
          </h2>
          <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 p-3 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 p-3 border rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full mb-4 p-3 border rounded-lg"
            ></textarea>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg w-full hover:bg-orange-600 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
    </>
  );
}
