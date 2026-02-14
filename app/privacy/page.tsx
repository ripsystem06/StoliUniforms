export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-24">
      <h1 className="font-display text-3xl font-bold mb-8">Aviso de Privacidad</h1>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Responsable del tratamiento de sus datos personales:</h2>
        <p className="text-muted-foreground leading-relaxed">
          StoliUniforms, con domicilio en Ensenada, Baja California, es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Finalidades del tratamiento:</h2>
        <p className="text-muted-foreground leading-relaxed">Sus datos serán utilizados para:</p>
        <ul className="list-disc ml-6 mt-4 space-y-2 text-muted-foreground">
          <li>Proveer los servicios de sublimación y uniformes personalizados solicitados.</li>
          <li>Notificar sobre cambios en el servicio o estado de pedidos.</li>
          <li>Realizar la facturación correspondiente.</li>
          <li>(Opcional) Envío de promociones y boletines informativos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Datos recabados:</h2>
        <p className="text-muted-foreground">Nombre completo, domicilio de entrega, teléfono, correo electrónico y datos de facturación.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Derechos ARCO:</h2>
        <p className="text-muted-foreground leading-relaxed">
          Usted tiene derecho a Acceder, Rectificar, Cancelar sus datos personales, así como de Oponerse al tratamiento de los mismos. Para ello, puede contactarnos en: <a href="mailto:contacto@stoluniforms.com" className="text-primary underline font-medium">contacto@stoluniforms.com</a>.
        </p>
      </section>
    </main>
  )
}