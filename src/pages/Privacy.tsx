import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen pt-20" style={{ paddingTop: 'calc(5rem + 10px)' }}>
      <SEO
        title="Privacy Policy"
        description="Privacy policy for French Flow: how we collect, use, and protect your personal data."
        keywords="French Flow privacy policy, data protection, Dulwich French lessons privacy"
        url="/privacy"
      />
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-heading font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-4">
            We respect your privacy. This policy explains how French Flow collects and uses your personal data.
          </p>
          <h2 className="text-2xl font-heading font-semibold mt-8 mb-3">What We Collect</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Name, email address, and phone number when you contact us.</li>
            <li>Message details regarding your goals and availability.</li>
          </ul>
          <h2 className="text-2xl font-heading font-semibold mt-8 mb-3">How We Use Your Data</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>To respond to enquiries and arrange lessons.</li>
            <li>To provide updates you explicitly request.</li>
          </ul>
          <h2 className="text-2xl font-heading font-semibold mt-8 mb-3">Your Rights</h2>
          <p className="text-muted-foreground">
            You can request access, correction, or deletion of your personal data at any time by contacting us.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;


