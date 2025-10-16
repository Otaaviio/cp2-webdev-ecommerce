import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-yellow-400 text-black px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Fiap Commerce</h1>
      <nav className="space-x-4">
        <Link to="/" className="text-gray-400 hover:underline">Home</Link>
        <Link to="/perfil" className="text-gray-400 hover:underline">Perfil</Link>
        <Link to="/carrinho" className="text-gray-400 hover:underline">Carrinho</Link>
      </nav>
    </div>
  );
}