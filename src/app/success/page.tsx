"use client"

export default function Success() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center p-8 max-w-md mx-auto">
        {/* Icona di successo */}
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--verde)' }}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>

        {/* Titolo */}
        <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--verde)' }}>
          Pagamento Completato!
        </h1>

        {/* Sottotitolo */}
        <h2 className="text-xl mb-4 blue">
          Il tuo acquisto è stato elaborato con successo
        </h2>

        {/* Descrizione */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          Riceverai una email di conferma a breve. Puoi trovare i tuoi acquisti nella sezione 'Acquistati' della tua area personale.
        </p>

        {/* Pulsante */}
        <button
          onClick={() => window.location.href = '/personal-area'}
          className="bg-blue text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          Vai all'Area Personale
        </button>
      </div>
    </main>
  );
}

