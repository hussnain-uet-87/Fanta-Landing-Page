import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-orange-500 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Fanta</h1>
      <ul className="flex gap-6 text-lg font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/flavors">Flavors</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
