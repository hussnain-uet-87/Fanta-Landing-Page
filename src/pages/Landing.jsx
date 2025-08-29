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
        end: "+=400%",
        markers: true,
        scrub: true,
        pin: imageRef.current,
      },
    });

    // Home (initial position) → About
    tl.to(imageRef.current, {
      x: "30vw",
      duration: 1,
      rotate: 25,
      scale: 1.1,
    });

    // About → Flavors
    tl.to(imageRef.current, {
      x: "-25vw",
      duration: 1,
      rotate: -25,
      scale: 0.8,
    });

    // Flavors → Contact
    tl.to(imageRef.current, {
      x: "-65vw",
      duration: 1,
      rotate: 0,
      scale: 0.7,
    });
  });

  return () => ctx.revert(); // cleanup
}, []);
  return (
    <div
      ref={containerRef}
      className="relative h-[400vh] bg-white text-purple-900 font-poppins"
    >
      {/* Sticky Image */}
      <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none">
        <img
          ref={imageRef}
          src={bottle}
          alt="Fanta Bottle"
          className="w-[500px] drop-shadow-2xl"
        />
      </div>

      {/* Page 1 - Home */}
      <section className="h-screen flex flex-col justify-center items-start pl-20 bg-orange-400 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Fanta World 🍊</h1>
        <p className="text-lg max-w-lg">
          Refresh your moments with fruity fun. Scroll to explore our story,
          flavors & more!
        </p>
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
            <div className="flavor-slot w-24 h-24 mx-auto mt-4  rounded-lg"></div>
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
  );
}
