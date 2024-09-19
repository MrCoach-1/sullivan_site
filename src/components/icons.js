import React from 'react';

export const ClubDeal = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
    return (
        <svg
    
        className={className}
        preserveAspectRatio="xMidYMid meet"
        data-bbox="20 20 160 160"
        viewBox="20 20 160 160"
        height="200"
        width="200"
        xmlns="http://www.w3.org/2000/svg"
        data-type="color"
        role="presentation"
        aria-hidden="true"
        aria-label=""
    >
      <defs>
        <style>
          {`#comp-m0fb8cd5 svg [data-color="1"] { fill: #5B408D; }`}
        </style>
      </defs>
      <g>
        <path
          d="M20 20v160c44.183 0 80-35.817 80-80S64.183 20 20 20z"
          fill={color}
          clipRule="evenodd"
          fillRule="evenodd"
          data-color="1"
        ></path>
        <path
          d="M100 100c0 44.183 35.817 80 80 80V20c-44.183 0-80 35.817-80 80z"
          fill={color}
          clipRule="evenodd"
          fillRule="evenodd"
          data-color="1"
        ></path>
      </g>
    </svg>
    )
  }



export const CTOasAService = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
    return (
        <svg
      className={className} 
      preserveAspectRatio="xMidYMid meet"
      data-bbox="20 20 160 160"
      viewBox="20 20 160 160"
      height="200"
      width="200"
      xmlns="http://www.w3.org/2000/svg"
      data-type="shape"
      role="presentation"
      aria-hidden="true"
      aria-label=""
    >
      <g>
        <path
          d="M100 20c-44.118 0-80 35.882-80 80s35.882 80 80 80 80-35.882 80-80h-80V20z"
          fill={color} 
        ></path>
      </g>
    </svg>
    )
  }


export const Growth = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
    return (    
        <svg
            className={className}
            preserveAspectRatio="xMidYMid meet"
            data-bbox="38.5 20 123 160"
            viewBox="38.5 20 123 160"
            height="200"
            width="200"
            xmlns="http://www.w3.org/2000/svg"
            data-type="color"
            role="presentation"
            aria-hidden="true"
            aria-label=""
            >
            <g>
                <path
                d="M102.887 20v117.469c32.371 0 58.613-26.296 58.613-58.734C161.5 46.296 135.258 20 102.887 20z"
                fill={color} // Usa la prop `color` per modificare il colore
                clipRule="evenodd"
                fillRule="evenodd"
                data-color="1"
                ></path>
                <path
                d="M38.5 121.266C38.5 153.704 64.742 180 97.113 180V62.532c-32.371 0-58.613 26.296-58.613 58.734z"
                fill={color} // Usa la prop `color` anche per questa parte dell'icona
                clipRule="evenodd"
                fillRule="evenodd"
                data-color="1"
                ></path>
            </g>
        </svg>
    )
  }


export const Health = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
    return (  
        <svg
        className={className} // Permette di passare classi CSS personalizzate
        preserveAspectRatio="xMidYMid meet"
        data-bbox="20 20 160 160"
        viewBox="20 20 160 160"
        height="200"
        width="200"
        xmlns="http://www.w3.org/2000/svg"
        data-type="color"
        role="presentation"
        aria-hidden="true"
        aria-label=""
      >
        <g>
          <path
            d="M100 20v80H20c0 44.183 35.817 80 80 80s80-35.817 80-80-35.817-80-80-80z"
            fill={color} // Usa la prop `color` per modificare il colore
            clipRule="evenodd"
            fillRule="evenodd"
            data-color="1"
          ></path>
        </g>
      </svg>
    )
}

export const InvestmentClubDealIcon = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
  return (
    <svg
      className={className}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 200 200"
      height="200"
      width="200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <g>
        {/* Cerchio esterno rappresenta il "Club Deal" */}
        <circle
          cx="100"
          cy="100"
          r="80"
          stroke={color}
          strokeWidth="10"
          fill="none"
        />

        {/* Freccia di crescita, rappresenta "Investimento" */}
        <path
          d="M60,140 L100,100 L140,140"
          stroke={color}
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Linee aggiuntive per dare dinamismo */}
        <path
          d="M100,20 L100,100"
          stroke={color}
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M140,60 L100,100 L60,60"
          stroke={color}
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const CTOAsAServiceIcon = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
  return (
    <svg
      className={className}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 200 200"
      height="200"
      width="200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <g>
        {/* Ingranaggio rappresenta il lato tecnologico (CTO) */}
        <circle
          cx="100"
          cy="100"
          r="40"
          stroke={color}
          strokeWidth="10"
          fill="none"
        />
        <path
          d="M80,100 L120,100"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M100,80 L100,120"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Denti dell'ingranaggio per simulare un CTO tecnico */}
        <path
          d="M100,40 L100,20"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M160,100 L180,100"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M100,160 L100,180"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M40,100 L20,100"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
        />

        
      </g>
    </svg>
  );
};


export const GrowthPerformanceIcon = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
  return (
    <svg
      className={className}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 200 200"
      height="200"
      width="200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <g>
        {/* Grafico di base */}
        <rect
          x="30"
          y="30"
          width="140"
          height="140"
          stroke={color}
          strokeWidth="10"
          fill="none"
        />

        {/* Linea del grafico che indica crescita */}
        <path
          d="M40 140 L80 100 L120 130 L160 70"
          stroke={color}
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Freccia che indica performance */}
        <path
          d="M160 70 L140 90"
          stroke={color}
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon
          points="160,70 170,60 160,50"
          fill={color}
        />
      </g>
    </svg>
  );
};


export const RoundGovernanceIcon = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
  return (
    <svg
      className={className}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 200 200"
      height="200"
      width="200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <g>
        {/* Cerchio esterno rappresenta la governance circolare */}
        <circle
          cx="100"
          cy="100"
          r="80"
          stroke={color}
          strokeWidth="10"
          fill="none"
        />

        {/* Frecce interne che rappresentano ciclicità e distribuzione */}
        <path
          d="M100,30 L120,70 L80,70 L100,30"
          fill={color}
        />
        <path
          d="M170,100 L130,120 L130,80 L170,100"
          fill={color}
        />
        <path
          d="M100,170 L80,130 L120,130 L100,170"
          fill={color}
        />
        <path
          d="M30,100 L70,80 L70,120 L30,100"
          fill={color}
        />

        {/* Cerchio interno per rappresentare il centro comune della governance */}
        <circle
          cx="100"
          cy="100"
          r="30"
          stroke={color}
          strokeWidth="10"
          fill="none"
        />
      </g>
    </svg>
  );
};

export const LeadGenerationIcon = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
  return (
    <svg
      className={className}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 200 200"
      height="200"
      width="200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <g>
        {/* Imbuto */}
        <path
          d="M50 30 L150 30 L100 130 L100 160"
          stroke={color}
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Freccia che entra nell'imbuto */}
        <path
          d="M100,10 L100,30"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
        />
        <polygon
          points="95,10 100,0 105,10"
          fill={color}
        />

        {/* Punti che rappresentano i lead in uscita */}
        <circle cx="100" cy="170" r="10" fill={color} />
        <circle cx="100" cy="190" r="5" fill={color} />
      </g>
    </svg>
  );
};

export const InvestorsNetworkIcon = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
  return (
    <svg
      className={className}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 200 200"
      height="200"
      width="200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <g>
        {/* Nodi della rete */}
        <circle cx="50" cy="50" r="15" stroke={color} strokeWidth="5" fill="none" />
        <circle cx="150" cy="50" r="15" stroke={color} strokeWidth="5" fill="none" />
        <circle cx="50" cy="150" r="15" stroke={color} strokeWidth="5" fill="none" />
        <circle cx="150" cy="150" r="15" stroke={color} strokeWidth="5" fill="none" />

        {/* Linee che collegano i nodi */}
        <line x1="50" y1="50" x2="150" y2="50" stroke={color} strokeWidth="5" />
        <line x1="50" y1="50" x2="50" y2="150" stroke={color} strokeWidth="5" />
        <line x1="150" y1="50" x2="150" y2="150" stroke={color} strokeWidth="5" />
        <line x1="50" y1="150" x2="150" y2="150" stroke={color} strokeWidth="5" />

        {/* Linee diagonali per maggiore connessione */}
        <line x1="50" y1="50" x2="150" y2="150" stroke={color} strokeWidth="5" />
        <line x1="150" y1="50" x2="50" y2="150" stroke={color} strokeWidth="5" />
      </g>
    </svg>
  );
};

export const AerospaceIcon = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
  return (
    <svg
      className={className}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 200 200"
      height="200"
      width="200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <g>
        {/* Satellite stilizzato */}
        <rect
          x="80"
          y="80"
          width="40"
          height="40"
          stroke={color}
          strokeWidth="10"
          fill="none"
        />

        {/* Pannelli solari del satellite */}
        <rect x="50" y="90" width="30" height="20" stroke={color} strokeWidth="5" fill="none" />
        <rect x="120" y="90" width="30" height="20" stroke={color} strokeWidth="5" fill="none" />

        {/* Antenna */}
        <path
          d="M100,80 L100,60"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
        />
        <circle cx="100" cy="50" r="10" fill={color} />

        {/* Orbita del satellite */}
        <circle cx="100" cy="100" r="80" stroke={color} strokeWidth="5" fill="none" />
      </g>
    </svg>
  );
};


export const DigitalHealthIcon = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
  return (
    <svg
      className={className}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 200 200"
      height="200"
      width="200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <g>
        {/* Croce medica */}
        <rect x="80" y="50" width="40" height="100" fill={color} />
        <rect x="50" y="80" width="100" height="40" fill={color} />

        {/* Elementi digitali (quadrati dati) */}
        <rect x="150" y="50" width="20" height="20" fill={color} />
        <rect x="30" y="130" width="20" height="20" fill={color} />
        <rect x="50" y="150" width="20" height="20" fill={color} />
        <rect x="130" y="30" width="20" height="20" fill={color} />
      </g>
    </svg>
  );
};


export const ArtificialIntelligenceIcon = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
  return (
    <svg
      className={className}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 200 200"
      height="200"
      width="200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <g>
        {/* Forma di cervello */}
        <path
          d="M50,100 Q50,50 100,50 Q150,50 150,100 Q150,150 100,150 Q50,150 50,100"
          stroke={color}
          strokeWidth="10"
          fill="none"
        />

        {/* Nodi della rete neurale */}
        <circle cx="75" cy="75" r="5" fill={color} />
        <circle cx="125" cy="75" r="5" fill={color} />
        <circle cx="75" cy="125" r="5" fill={color} />
        <circle cx="125" cy="125" r="5" fill={color} />

        {/* Linee che collegano i nodi */}
        <line x1="75" y1="75" x2="125" y2="75" stroke={color} strokeWidth="5" />
        <line x1="75" y1="75" x2="75" y2="125" stroke={color} strokeWidth="5" />
        <line x1="125" y1="75" x2="125" y2="125" stroke={color} strokeWidth="5" />
        <line x1="75" y1="125" x2="125" y2="125" stroke={color} strokeWidth="5" />
      </g>
    </svg>
  );
};

export const ProptechIcon = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
  return (
    <svg
      className={className}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 200 200"
      height="200"
      width="200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <g>
        {/* Edificio centrale per rappresentare il settore immobiliare */}
        <rect
          x="70"
          y="50"
          width="60"
          height="100"
          stroke={color}
          strokeWidth="10"
          fill="none"
        />

        {/* Finestre dell'edificio */}
        <rect x="80" y="60" width="10" height="10" fill={color} />
        <rect x="110" y="60" width="10" height="10" fill={color} />
        <rect x="80" y="90" width="10" height="10" fill={color} />
        <rect x="110" y="90" width="10" height="10" fill={color} />
        <rect x="80" y="120" width="10" height="10" fill={color} />
        <rect x="110" y="120" width="10" height="10" fill={color} />

        {/* Simbolo digitale (linee e quadrati) che rappresenta la tecnologia */}
        <line x1="140" y1="50" x2="170" y2="20" stroke={color} strokeWidth="5" />
        <rect x="170" y="10" width="20" height="20" fill={color} />
        <line x1="50" y1="50" x2="20" y2="20" stroke={color} strokeWidth="5" />
        <rect x="10" y="10" width="20" height="20" fill={color} />

        {/* Linee di connessione simboliche per indicare la rete tecnologica */}
        <line x1="170" y1="30" x2="150" y2="50" stroke={color} strokeWidth="5" />
        <line x1="20" y1="30" x2="50" y2="50" stroke={color} strokeWidth="5" />
      </g>
    </svg>
  );
};



export const IoTIcon = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
  return (
    <svg
      className={className}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 200 200"
      height="200"
      width="200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <g>
        {/* Cerchio centrale per rappresentare il "nodo" centrale di connessione */}
        <circle cx="100" cy="100" r="20" stroke={color} strokeWidth="10" fill="none" />

        {/* Linee che collegano i dispositivi */}
        <line x1="100" y1="30" x2="100" y2="80" stroke={color} strokeWidth="5" />
        <line x1="100" y1="120" x2="100" y2="170" stroke={color} strokeWidth="5" />
        <line x1="30" y1="100" x2="80" y2="100" stroke={color} strokeWidth="5" />
        <line x1="120" y1="100" x2="170" y2="100" stroke={color} strokeWidth="5" />

        {/* Dispositivi connessi */}
        <circle cx="100" cy="20" r="10" fill={color} />
        <circle cx="100" cy="180" r="10" fill={color} />
        <circle cx="20" cy="100" r="10" fill={color} />
        <circle cx="180" cy="100" r="10" fill={color} />
      </g>
    </svg>
  );
};
