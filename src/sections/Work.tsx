import ExpandableCardsSection from "../components/expandable-cards-section"

export default function Work() {
  return (
    <main className="min-h-screen">
      <header className="flex justify-between items-center p-4 md:p-6 lg:px-12">
        <div className="flex items-center">
          <div className="text-[#ff5c35] font-bold text-2xl flex items-center">
            <div className="w-8 h-8 bg-[#ff5c35] rounded mr-2"></div>
            Agencie
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="font-medium">
            Services
          </a>
          <a href="#" className="font-medium">
            Projects
          </a>
          <a href="#" className="font-medium">
            Process
          </a>
          <a href="#" className="font-medium">
            Reviews
          </a>
          <a href="#" className="font-medium">
            Pricing
          </a>
        </nav>

        <div>
          <button className="hidden md:block bg-black text-white px-6 py-3 rounded-full font-medium">
            Get Template
          </button>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      <ExpandableCardsSection />
    </main>
  )
}
