export type ServiceData = {
  title: string;
  icon: string[];
  description: string;
  tags: string[];
  image: string;
  usecase: string;
};

export const servicesData: ServiceData[] = [
    {
      title: "Web Design and Development",
      icon: [
        "/ui-ux-icon.svg",
        "/CWS-icon.svg",
        "/e-com-icon.svg",
        "/WMS-icon.svg",
        "/SEO-icon.svg",
        "/ui-ux-opt-icon.svg",
      ],
      description:
        "Your website is like your digital handshake—it's the first thing people notice about you online. Our Web Design & Development services are all about making that handshake firm, friendly, and unforgettable.",
      tags: [
        "UI/UX Design",
        "Custom Website Design",
        "E-Commerce Development",
        "Website Maintenance and Support",
        "SEO Integration",
        "UX/UI Optimization",
      ],
      image: "https://framerusercontent.com/images/ksoahdCs5wmZvCWkSavafYdY.png?scale-down-to=1024",
      usecase: `<section style="background-color: #f5f5f5; ">
    <div style="max-width: 800px; margin: 0 auto;">
      <h2 style=" color: #0F0F0F;
font-size: 22px;
opacity: 0.8;
font-style: semibold;
font-weight: 700;
line-height: 26px; /* 100% */
letter-spacing: -1.04px;  margin-bottom: 1rem;">What’s Included:</h2>
      <ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 2.4;">
        <li className="services-desc"><strong>UI Design:</strong> Eye candy for your website!</li>
        <li className="services-desc"><strong>UX Design:</strong> No frustrating clicks here!</li>
        <li className="services-desc"><strong>Custom Web Development:</strong> We'll code your dream site from scratch.</li>
        <li className="services-desc"><strong>E-commerce Development:</strong> We'll make checkout a breeze.</li>
        <li className="services-desc"><strong>CMS Integration:</strong> Use WordPress or Webflow with ease.</li>
        <li className="services-desc"><strong>Website Maintenance:</strong> Keep your site fit and fabulous.</li>
        <li className="services-desc"><strong>Responsive Design:</strong> Perfect on all screens, from big to small.</li>
      </ul>
    </div>
  </section>`
    },
    {
      title: "Digital Marketing",
      icon: [
        "/SEO-icon.svg",
        "/ppc-icon.svg",
        "/SMM-icon.svg",
        "/EM-icon.svg",
        "/CM-icon.svg",
      ],
      description:
        "Let's face it, the internet is a noisy place. But with our Digital Marketing services, you won't just stand out—you'll shine.",
      tags: [
        "SEO (Search Engine Optimization)",
        "PPC Advertising",
        "Social Media Marketing",
        "Email Marketing",
        "Content Marketing",
      ],
      image: "https://framerusercontent.com/images/7m973HFZjCZWMvqchrAth5xT1I.png",
      usecase: `<section style="background-color: #f5f5f5; padding: 2rem;">
    <div style="max-width: 800px; margin: 0 auto;">
      <h2 style="font-size: 1.75rem; margin-bottom: 1rem;">What’s Included:</h2>
      <ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 1.8;">
        <li><strong>SEO:</strong> Get found on Google by the right people.</li>
        <li><strong>PPC:</strong> Drive instant traffic with ads that convert.</li>
        <li><strong>Social Media:</strong> Reach your audience where they scroll.</li>
        <li><strong>Email Marketing:</strong> Nurture leads with high-converting campaigns.</li>
        <li><strong>Content Marketing:</strong> Tell stories that build loyalty and trust.</li>
      </ul>
    </div>
  </section>`
    },
    {
      title: "Branding & Creative Services",
      icon: [
        "/logo-design-icon.svg",
        "/BSP-icon.svg",
        "/VID-icon.svg",
        "/BG-icon.svg",
        "/SMG-icon.svg",
        "/ED-icon.svg",
        "/PDP-icon.svg",
        "/PD-icon.svg"
      ],
      description:
        "Your brand is so much more than a logo—it's your story, your personality, and your promise to customers.",
      tags: [
        "Logo Design",
        "Brand Strategy & Positioning",
        "Visual Identity Design",
        "Brand Guidelines",
        "Social media graphics",
        "Email design",
        "Pitch decks & presentations",
        "Packaging design"
      ],
      image: "https://framerusercontent.com/images/dvWLsep5ehoBJRyJPPReVs7PiM.png?scale-down-to=1024",
      usecase: `<section style="background-color: #f5f5f5; padding: 2rem;">
    <div style="max-width: 800px; margin: 0 auto;">
      <h2 style="font-size: 1.75rem; margin-bottom: 1rem;">What’s Included:</h2>
      <ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 1.8;">
        <li><strong>Logo Design:</strong> Make a lasting first impression.</li>
        <li><strong>Brand Strategy:</strong> Define your unique identity and positioning.</li>
        <li><strong>Visual Identity:</strong> Fonts, colors, and imagery that tell your story.</li>
        <li><strong>Brand Guidelines:</strong> Stay consistent across all touchpoints.</li>
        <li><strong>Graphics & Visuals:</strong> From Instagram to emails, always look on-brand.</li>
        <li><strong>Presentations & Decks:</strong> Wow investors and clients alike.</li>
        <li><strong>Packaging:</strong> Look as good on the shelf as you do online.</li>
      </ul>
    </div>
  </section>`
    },
    {
      title: "App Design & Development",
      icon: [
        "/ui-ux-icon.svg",
        "/CAD-icon.svg",
        "/MO-icon.svg",
        "/ASO-icon.svg",
      ],
      description:
        "Got a brilliant app idea? Let's make it a reality! From design to deployment, we’ve got you covered.",
      tags: [
        "UI/UX for Apps",
        "Custom App Development",
        "Mobile Optimization",
        "App Store Optimization"
      ],
      image: "https://framerusercontent.com/images/4PHCom6qXgaFbyPjGp0uduO2peM.png?scale-down-to=1024",
      usecase: `<section style="background-color: #f5f5f5; padding: 2rem;">
    <div style="max-width: 800px; margin: 0 auto;">
      <h2 style="font-size: 1.75rem; margin-bottom: 1rem;">What’s Included:</h2>
      <ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 1.8;">
        <li><strong>App UI/UX:</strong> Smooth, sleek, user-first interfaces.</li>
        <li><strong>Custom Development:</strong> Built from scratch to fit your vision.</li>
        <li><strong>Mobile Optimization:</strong> Lightning fast and buttery smooth on all devices.</li>
        <li><strong>App Store Optimization:</strong> Help your app get discovered in the wild.</li>
      </ul>
    </div>
  </section>`
    },
    {
        title: "Bubble Design & Development",
        icon: [
            "/ui-ux-icon.svg",
            "/CWS-icon.svg",
            "/e-com-icon.svg",
            "/WMS-icon.svg",
            "/SEO-icon.svg",
            "/ui-ux-opt-icon.svg",
          ],
          description:
            "Build powerful no-code applications with Bubble that help early-stage startups and SaaS founders launch MVPs and AI SaaS solutions quickly and securely in 2 weeks or less. Our Bubble expertise turns your ideas into reality without writing a single line of code.",
          tags: [
            "No-Code Development",
            "MVP Development",
            "AI SaaS Solutions",
            "Bubble App Development",
            "Rapid Prototyping",
            "Custom Workflows",
          ],
        image: "https://framerusercontent.com/images/4PHCom6qXgaFbyPjGp0uduO2peM.png?scale-down-to=1024",
        usecase: `<section style="background-color: #f5f5f5; padding: 2rem;">
      <div style="max-width: 800px; margin: 0 auto;">
        <h2 style="font-size: 1.75rem; margin-bottom: 1rem;">What’s Included:</h2>
        <ul style="list-style-type: disc; padding-left: 1.5rem; line-height: 1.8;">
          <li><strong>MVP Development:</strong> Launch your minimum viable product in 2 weeks or less.</li>
          <li><strong>No-Code Solutions:</strong> Build powerful applications without writing code.</li>
          <li><strong>AI Integration:</strong> Incorporate AI capabilities into your Bubble app.</li>
          <li><strong>Custom Workflows:</strong> Automate processes and create efficient user journeys.</li>
          <li><strong>Database Design:</strong> Structure your data for optimal performance and scalability.</li>
          <li><strong>Third-Party Integrations:</strong> Connect with APIs and services to extend functionality.</li>
        </ul>
      </div>
    </section>`
      }
  ];
