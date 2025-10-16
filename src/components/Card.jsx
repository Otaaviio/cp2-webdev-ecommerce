export default function Card({ product }) {
  return (
    <div className="bg-gray-800 p-4 rounded flex flex-col">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-48 object-contain mb-4 rounded"
        />
        <h3 className="font-bold truncate text-white">{product.title}</h3>
        <p className="text-gray-300 text-lg">R${product.price}</p>
        <p className="text-gray-300 text-lg p-6">R${product.description}</p>
        <button className="bg-blue-500 rounded-2xl">Adicionar ao carrinho</button>
    </div>
  );
}