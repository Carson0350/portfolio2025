export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-section-mobile md:p-section-tablet lg:p-section">
      <div className="max-w-container text-center">
        <h1 className="text-h1-mobile text-primary md:text-h1">
          Carson Antoine
        </h1>
        <p className="text-body-large text-secondary mt-4">
          Full Stack Developer Portfolio
        </p>
        <p className="text-small text-secondary mt-2">Coming soon...</p>

        {/* Test custom colors */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="bg-primary h-12 w-12 rounded"></div>
          <div className="bg-secondary h-12 w-12 rounded"></div>
          <div className="bg-accent h-12 w-12 rounded"></div>
          <div className="bg-success h-12 w-12 rounded"></div>
          <div className="bg-warning h-12 w-12 rounded"></div>
          <div className="bg-error h-12 w-12 rounded"></div>
        </div>
      </div>
    </main>
  );
}
