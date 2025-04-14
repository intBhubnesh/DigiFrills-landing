import ExpandableCardsSection from "../components/expandable-cards-section";

export default function Work() {
  return (
    <main className="min-h-screen">
      <header className="flex justify-between items-center p-4 md:p-6 lg:px-12"></header>

      {/* Work Process Section */}
      <section className="text-center px-4 py-12">
        <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mx-auto mb-6">
          {/* Tilted N Icon with Dots */}
          <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5" // Reduced stroke width for the N lines
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transform: "rotate(20deg)", // Adding a tilt
                width: "12px", // Keeping circle size the same
                height: "12px", // Keeping circle size the same
              }}
            >
              <circle cx="5" cy="5" r="1.5" />
              <circle cx="19" cy="5" r="1.5" />
              <circle cx="5" cy="19" r="1.5" />
              <circle cx="19" cy="19" r="1.5" />
              <path d="M5 19L5 5M5 5L19 19M19 19L19 5" />
            </svg>
          </div>
          <span className="text-sm font-medium text-black">
            Our Work Process
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-black max-w-4xl mx-auto">
          From idea to impact—
          <br />
          our process makes it easy,
          <br />
          exciting, and effective!
        </h2>
      </section>

      <ExpandableCardsSection />
    </main>
  );
}
