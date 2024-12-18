export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl mb-8">Estamos aqui para ajudar com sua próxima aventura</p>
          
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md dark:bg-gray-800"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md dark:bg-gray-800"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md dark:bg-gray-800"
                />
              </div>
              
              <button type="submit" className="btn-primary">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
