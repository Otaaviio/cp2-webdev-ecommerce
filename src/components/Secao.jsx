import Card from "./Card";

export default function Secao({ title, products }) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
      {
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map(prod => (
            <Card key={prod.id} product={prod} />
          ))}
        </div>
      }
    </section>
  );
}