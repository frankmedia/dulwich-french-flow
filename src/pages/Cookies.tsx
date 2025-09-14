const Cookies = () => {
  return (
    <div className="min-h-screen pt-20" style={{ paddingTop: 'calc(5rem + 10px)' }}>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-heading font-bold mb-6">Cookies Policy</h1>
          <p className="text-muted-foreground mb-4">
            This site uses minimal cookies to provide a smooth experience. We do not use tracking cookies unless explicitly stated.
          </p>
          <h2 className="text-2xl font-heading font-semibold mt-8 mb-3">What Are Cookies?</h2>
          <p className="text-muted-foreground">
            Cookies are small text files stored on your device that help websites function correctly.
          </p>
          <h2 className="text-2xl font-heading font-semibold mt-8 mb-3">Managing Cookies</h2>
          <p className="text-muted-foreground">
            You can control cookies via your browser settings. Disabling cookies may affect some site features.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cookies;


