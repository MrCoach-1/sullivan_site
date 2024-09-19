import * as React from "react"
import { useState } from 'react';
import Html from "./../components/html"
import { ClubDeal, CTOasAService, Growth, Health, 
  InvestmentClubDealIcon, CTOAsAServiceIcon, GrowthPerformanceIcon,
  RoundGovernanceIcon, LeadGenerationIcon, InvestorsNetworkIcon,
  AerospaceIcon, DigitalHealthIcon, ArtificialIntelligenceIcon, ProptechIcon, IoTIcon
} from "./../components/icons"

const Template = () => {
  return (<>
  
  
  </>)
}


const Hero = () => {
  return (<>
  
    <div id="hero" class="bg-sullivan">
      <div class="container mx-auto p-4 flex justify-center items-center h-screen">
        <img src="static/img/logo.webp" alt="Sullivan Ventures Desktop" class="hidden sm:block max-w-full h-auto" />
        <img src="static/img/logo_sm.webp" alt="Sullivan Ventures Mobile" class="block sm:hidden max-w-full h-auto" />
      </div>
    </div>
  
  </>)
}


const Who = () => {
  return (<>
  
    <div id="who" class="bg-white">
      <div class="container mx-auto py-16">
        <div class="flex flex-col sm:flex-row">

          <div class="bg-sullivan text-white p-8 sm:w-1/2">
            <h1 class="text-3xl font-bold leading-tight">
              Il VC partner per <br />
              Enablers & <br />
              Disruptors
            </h1>
          </div>

          <div class="bg-white text-sullivan p-8 sm:w-1/2">
            <p class="text-lg font-extrabold">
              Sullivan Ventures è una VC-firm italiana specializzata nel supporto a startup early-stage che sviluppano tecnologie che abilitano l'innovazione e che introducono modelli di business, prodotti e servizi innovativi in grado di rivoluzionare il mercato.
            </p>
            <p class="text-lg font-extrabold mt-4">
              La nostra missione è quella di stimolare il cambiamento e l'innovazione attraverso investimenti strategici e attività di mentoring e consulenza di alta qualità, contribuendo così alla crescita sostenibile delle aziende nel nostro portafoglio.
            </p>
          </div>
        </div>
      </div>
    </div>
  
  </>)
}


const services = [
  {
    icon: <InvestmentClubDealIcon />, 
    title: 'Investimento e Club Deal',
    description: 'Investimento diretto di Sullivan Ventures in equity, anche in club deal'
  },
  {
    icon:  <CTOAsAServiceIcon />, 
    title: 'CTO as-a-Service',
    description: 'Assistenza nella strategia tecnologica e nello scouting di partner esterni'
  },
  {
    icon: <GrowthPerformanceIcon />,
    title: 'Growth Performance',
    description: 'Consulenza per definire strategie di crescita, KPI e analisi delle performance'
  },
  {
    icon: <RoundGovernanceIcon />, 
    title: 'Round Governance',
    description: 'Supporto per round d\'investimento, due diligence e strategie M&A'
  },
  {
    icon: <LeadGenerationIcon />, 
    title: 'Lead Generation',
    description: 'Affiancamento nella ricerca e nell\'attivazione di clienti e partner strategici'
  },
  {
    icon: <InvestorsNetworkIcon />,
    title: 'Investors Network',
    description: 'Introduzione nel network di investitori partner di Sullivan Ventures'
  }
];

const Service = ({ icon, title, description }) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-12 h-12" >
          {icon}
        </div>
      </div>
      
      <h3 className="text-2xl font-extrabold text-sullivan mt-4">{title}</h3>
      <p className="text-sullivan text-lg font-extrabold mt-2">{description}</p>
    </div>
  );
};

const What = () => {
  return (
    <div id="what" className="container mx-auto py-16 px-4 text-center">
      <h1 className="text-4xl font-bold text-sullivan">Cosa offriamo</h1>
      <p className="text-lg text-sullivan mt-4">
        Investimenti, competenze e servizi che Sullivan Ventures offre per accelerare la crescita delle startup
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 mt-20">
        {services.map((service, index) => (
          <Service 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  )
}

const sectors = [
  { name: 'Aerospace', icon: <AerospaceIcon color="#FFFFFF" /> }, 
  { name: 'Digital Health', icon:  <DigitalHealthIcon color="#FFFFFF" />,   }, 
  { name: 'Property Tech', icon:  <ProptechIcon color="#FFFFFF" />,   },   
  { name: 'Artificial Intelligence', icon: <ArtificialIntelligenceIcon color="#FFFFFF" /> },
  { name: 'IoT', icon: <IoTIcon color="#FFFFFF" /> },
];

const Sector = ({ name, icon }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12" >
          {icon}
        </div>
      </div>
      <p className="text-2xl text-white font-semibold">{name}</p>
    </div>
  );
};

const SectorsGrid = () => {
  return (
    <div id="sectors" className="bg-sullivan py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Settori</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {sectors.map((sector, index) => (
            <Sector key={index} name={sector.name} icon={sector.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};


const CallToAction = () => {
  return (
    <div id="cta" className="bg-gray-100 py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 text-center">
        
        {/* Sezione "Candida la tua Startup" */}
        <div className="bg-white p-8">
          <h2 className="text-4xl font-bold text-sullivan mb-4">Candida la tua Startup</h2>
          <p className="text-lg text-sullivan mb-8">
            Sei una startup early-stage o un imprenditore con un'idea di business e sei in cerca di un partner per crescere?
          </p>
          <button className="bg-sullivan text-white px-6 py-3 rounded hover:bg-[#3D2673] transition duration-300">
            Candidati
          </button>
        </div>

        {/* Sezione "Investi con noi" */}
        <div className="bg-white p-8">
          <h2 className="text-4xl font-bold text-sullivan mb-4">Investi con noi</h2>
          <p className="text-lg text-sullivan mb-8">
            Sei un investitore privato o istituzionale e sei interessato ad entrare a far parte dell'Investors Network di Sullivan Ventures?
          </p>
          <button className="bg-sullivan text-white px-6 py-3 rounded hover:bg-[#3D2673] transition duration-300">
            Contattaci
          </button>
        </div>

      </div>
    </div>
  );
};

const logos = [
  { name: 'soccerment', src: 'static/loghi/soccerment__.png', url: "https://soccerment.com/" }, 
  { name: 'soccerment', src: 'static/loghi/soccerment__.png', url: "https://soccerment.com/" }, 

];


const Portfolio = () => {

  return (
    <div id="portfolio" className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-sullivan mb-8">Portfolio</h2>

        <div
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16 overflow-hidden"
        >
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="flex justify-center items-center w-full ">
              <a url="{logo.url}">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-full"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



const Footer = () => {
  return (
    <footer className="bg-sullivan text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <img
            src="static/img/logo_sm.webp" 
            alt="Sullivan Ventures Logo"
            className="w-full"
          />
        </div>

        <div className="text-center md:text-right space-y-2">
          <p>(+39) 3405511259</p>
          <p>info@sullivanventures.it</p>
          <p>Piazza Giuseppe Massari, 6, 70122 Bari BA, Italy</p>
        </div>
      </div>
    </footer>
  );
};

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'who', label: 'Chi siamo' },
  { id: 'what', label: 'Cosa facciamo' },
  { id: 'sectors', label: 'Settori' },
  { id: 'cta', label: 'Candidati' },
  { id: 'portfolio', label: 'Portfolio' },
];


const StickyNav = ({ sections }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`fixed top-4 right-4 p-4 space-y-2 transition-opacity duration-300 ${
        isHovered ? 'bg-white opacity-100 shadow-lg' : 'bg-transparent opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className={`font-bold text-lg text-[#1D0C48] ${isHovered ? 'block' : 'hidden'}`}>
        Navigazione
      </h3>
      <ul className="space-y-2">
        {sections.map((section, index) => (
          <li key={index}>
            <button
              onClick={() => {
                const sectionElement = document.getElementById(section.id);
                if (sectionElement) {
                  sectionElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`text-blue-600 hover:underline ${isHovered ? 'block' : 'hidden'}`}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


const Sections = () => {
  return (
    <>
      <StickyNav sections={sections} />
      <Hero />
      <Who />
      <What />
      <SectorsGrid />
      <CallToAction/>
      <Portfolio />
      <Footer />
    </>
  )
}

const Head = () => {
  return (<>
    <title>Sullivan Ventures</title>
  </>)
}

const IndexPage = () => {
  return (
    <Html 
      body={<Sections />}
      head={<Head />}
    />
  )
}

export default IndexPage

