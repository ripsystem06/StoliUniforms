export default function FAQPage() {
  const faqs = [
    {
      question: "1. ¿Cuál es el tiempo de entrega de mis uniformes?",
      answer: "Normalmente nuestro tiempo de producción es de 2 a 4 semanas hábiles tras la aprobación del diseño y el pago del anticipo, dependiendo del volumen del pedido y la cadena de produccion."
    },
    {
      question: "2. ¿Hay un pedido mínimo para sublimación?",
      answer: "En StoliUniforms trabajamos desde una pieza para muestras o regalos, pero ofrecemos precios preferenciales por mayoreo a partir de 12 unidades."
    },
    {
      question: "3. ¿Qué tipo de tela utilizan?",
      answer: "Utilizamos telas con alto porcentaje de poliéster (como Dry-Fit o Tacto Algodón), ya que son las únicas que permiten que la tinta de sublimación se fusione correctamente con la fibra, garantizando que el diseño nunca se des lave ni se cuartee."
    },
    {
      question: "4. ¿Hacen envíos fuera de Ensenada?",
      answer: "Sí, realizamos envíos a todo México a través de paqueterías líderes. El costo se calcula según el peso y destino."
    },
    {
      question: "5. ¿Necesito un diseño nuevo, ustedes lo pueden realizar?",
      answer: "Sí, contamos con servicio de diseño grafico al momento de realizar tu pedido."
    }
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-24">
      <h1 className="font-display text-3xl font-bold mb-12">Preguntas Frecuentes (FAQ)</h1>
      
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <section key={index} className="border-b border-gray-100 pb-8 last:border-0">
            <h2 className="text-xl font-bold mb-4">{faq.question}</h2>
            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
          </section>
        ))}
      </div>
    </main>
  )
}