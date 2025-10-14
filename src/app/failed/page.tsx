"use client"

export default function Failure() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center p-8 max-w-md mx-auto">
        {/* Icona di errore */}
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
        </div>

        {/* Titolo */}
        <h1 className="text-3xl font-bold mb-4 text-red-600">
          Pagamento Fallito
        </h1>

        {/* Sottotitolo */}
        <h2 className="text-xl mb-4 blue">
          Si è verificato un problema durante l&apos;elaborazione del pagamento
        </h2>

        {/* Descrizione */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          Il tuo pagamento non è stato completato. Nessun addebito è stato effettuato sul tuo conto.
           <br/> Contattaci per ricevere assistenza
        </p>

        {/* Pulsanti */}
        <div className="space-y-3">
          <button
            onClick={() => window.location.href = "/"}
            className="w-full bg-blue text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            Riprova
          </button>

          <button
            onClick={() => window.location.href = '/supporto'}
            className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Contatta Supporto
          </button>
        </div>
      </div>
    </main>
  );
}

