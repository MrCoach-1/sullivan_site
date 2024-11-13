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
    <img src='icons/what/Investimento.svg' style={{ filter: 'invert(20%) sepia(80%) saturate(300%) hue-rotate(180deg)' }} alt="icon" />
  );
};

export const CTOAsAServiceIcon = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
  return (

    <img src='icons/what/CTO.svg' style={{ filter: 'invert(20%) sepia(80%) saturate(300%) hue-rotate(180deg)' }} alt="icon" />

  );
};


export const GrowthPerformanceIcon = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
  return (
    <img src='icons/what/GROWTH performance.svg' style={{ filter: 'invert(20%) sepia(80%) saturate(300%) hue-rotate(180deg)' }} alt="icon" />
  );
};


export const RoundGovernanceIcon = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
  return (
    <img src='icons/what/round governance.svg' style={{ filter: 'invert(20%) sepia(80%) saturate(300%) hue-rotate(180deg)' }} alt="icon" />
  );
};

export const LeadGenerationIcon = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
  return (
    <img src='icons/what/lead generation.svg' style={{ filter: 'invert(20%) sepia(80%) saturate(300%) hue-rotate(180deg)' }} alt="icon" />
  );
};

export const InvestorsNetworkIcon = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
  return (
    <img src='icons/what/investor network.svg' style={{ filter: 'invert(20%) sepia(80%) saturate(300%) hue-rotate(180deg)' }} alt="icon" />
  );
};

export const AerospaceIcon = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
  return (
    <img src='icons/sectors/Aerospace.svg' style={{ filter: 'invert(100%) sepia(0%) saturate(900%) hue-rotate(180deg)' }} alt="icon" />
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
    <img src='icons/sectors/AI.svg' style={{ filter: 'invert(100%) sepia(0%) saturate(900%) hue-rotate(180deg)' }} alt="icon" />
  );
};

export const ProptechIcon = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
  return (
    <img src='icons/sectors/Proptech.svg' style={{ filter: 'invert(100%) sepia(0%) saturate(900%) hue-rotate(180deg)' }} alt="icon" />
  );
};



export const IoTIcon = ({ color = "rgb(36 2 103)", className = "w-12 h-12" }) => {
  return (
    <img src='icons/sectors/IoT.svg' style={{ filter: 'invert(100%) sepia(0%) saturate(900%) hue-rotate(180deg)' }} alt="icon" />
  );
};
