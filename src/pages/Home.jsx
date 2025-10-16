import useProducts from "../hooks/Produtos";
import Secao from "../components/Secao";

export default function Home() {

  const { menProducts, womenProducts, electronics } = useProducts();

  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-5xl font-bold text-center text-white mb-10">Nossa Loja</h1>
      
      <Secao title="Roupas Masculinas" products={menProducts} />
      
      <Secao title="Roupas Femininas" products={womenProducts} />

      <Secao title="Eletrônicos" products={electronics} />

    </div>
  );
}