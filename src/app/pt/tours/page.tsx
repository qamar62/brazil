export default function ToursPage() {
  return (
    <main className="flex-1">
      <section className="py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-6">Nossos Passeios</h1>
          <p className="text-xl mb-8">Explore nossas experiências únicas no Brasil</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tour cards will go here */}
          </div>
        </div>
      </section>
    </main>
  );
}
