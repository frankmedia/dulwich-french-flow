import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <div className="min-h-screen pt-20" style={{ paddingTop: 'calc(5rem + 10px)' }}>
      <SEO
        title="Terms & Conditions"
        description="Terms & Conditions for French Flow lessons and services in South East London."
        keywords="French Flow terms, terms and conditions, Dulwich French lessons"
        url="/terms"
      />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-heading font-bold mb-6">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-4">
            These Terms & Conditions govern the use of services provided by French Flow in Dulwich, South East London.
          </p>
          <h2 className="text-2xl font-heading font-semibold mt-8 mb-3">Bookings & Payments</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Payment for each 6-week block is due before the first lesson.</li>
            <li>We accept bank transfer, card payment, or cash.</li>
          </ul>
          <h2 className="text-2xl font-heading font-semibold mt-8 mb-3">Cancellations</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Missed lessons are non-refundable but we will try to offer alternatives where possible.</li>
            <li>In the unlikely event we cancel a session, a replacement session will be arranged.</li>
          </ul>
          <h2 className="text-2xl font-heading font-semibold mt-8 mb-3">Code of Conduct</h2>
          <p className="text-muted-foreground">
            We maintain a friendly, supportive environment. Be respectful to your teacher and classmates at all times.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Terms;


