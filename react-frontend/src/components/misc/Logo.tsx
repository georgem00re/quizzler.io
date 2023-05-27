import React from "react";
import { SPACE_GREY, WHITE } from "../../constants/colours.js";
import { useSelector } from "react-redux";

interface LogoProps {
  width: string;
}

export default function Logo(props: LogoProps): JSX.element {
  const lightTheme = useSelector((state) => state.lightTheme);
  const color = lightTheme ? SPACE_GREY : WHITE;

  return (
    <svg
      style={style}
      width={props.width ?? "60"}
      viewBox="0 0 150 150"
      version="1.1"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          d="M75,0 C116.421356,0 150,33.5786438 150,75 C150,116.421356 116.421356,150 75,150 C33.5786438,150 0,116.421356 0,75 C0,33.5786438 33.5786438,0 75,0 Z M106.128216,93.5950913 C103.324318,94.2241001 101.76219,95.5955126 99.8004526,98.2939394 L99.5807539,98.5992553 L98.9906736,99.4238086 L98.7215462,99.7842752 L98.4776632,100.095402 L98.2551738,100.361172 C97.7579956,100.931483 97.4040813,101.163907 96.9732831,101.286141 C96.7974891,101.33602 96.5657667,101.317175 96.1896382,101.175716 L96.0416481,101.116816 L95.7920111,101.005531 L95.5060811,100.86483 L95.4285178,100.824809 L95.3484127,100.782783 L95.0014821,100.593961 L94.6095101,100.370395 L93.309279,99.5976812 C89.8713508,97.5763849 87.7014217,96.8399084 84.5582623,97.3941322 C81.8653233,97.86897 79.9455401,99.0169297 77.2546023,101.389325 L76.9141069,101.692292 L76.2600759,102.287832 L75.6854593,102.821567 L74.842561,103.596525 L74.4756936,103.927148 L73.9874034,104.35722 L73.5668954,104.713813 L73.2067103,105.003176 L72.9964158,105.161821 L72.8074058,105.295214 L72.6374701,105.405209 L72.4843985,105.493656 L72.3459808,105.562408 L72.2815764,105.589976 L72.2200066,105.613315 L72.1042657,105.64823 L72.0252459,105.663295 L71.9975979,105.663393 L71.9306148,105.653434 L71.8453297,105.627656 L71.7384794,105.583321 L71.6068008,105.517692 L71.3555913,105.373335 L71.1475652,105.242496 L70.7665383,104.987493 L70.4617698,104.774336 L69.4465461,104.040187 L68.8255949,103.604448 C66.1969673,101.801798 64.3332333,101.109498 61.5496659,101.456359 C57.0536365,102.016611 53.568247,105.422837 50.866375,111.101107 C49.9171837,113.095933 50.7648381,115.48253 52.7596642,116.431722 C54.7544902,117.380913 57.1410879,116.533259 58.0902792,114.538433 C59.6861324,111.184578 61.1972603,109.649894 62.4178186,109.414219 L62.5388982,109.394962 L62.6490326,109.388816 C62.7708171,109.390309 62.9084462,109.418918 63.0816928,109.487654 L63.2186151,109.546934 L63.4113745,109.644054 L63.6315205,109.768977 L63.8826735,109.924084 L64.1684542,110.111759 L64.2457342,110.164046 L64.3254613,110.218555 L64.6699719,110.45955 L65.7236626,111.221131 C68.6182658,113.283563 70.6016153,114.085297 73.5603075,113.516323 C74.8527235,113.267784 75.8090536,112.925911 76.8685322,112.251745 L77.1358049,112.076142 L77.5112862,111.811897 L77.9015796,111.518046 L78.0019252,111.439708 L78.103502,111.359353 L78.523341,111.017105 L78.9677623,110.639935 L79.4406738,110.225717 L79.9459837,109.772324 L80.4876,109.277631 L81.3766481,108.453502 L82.083219,107.804593 L82.5151764,107.420095 L82.9183401,107.072373 L83.294834,106.759958 L83.646782,106.481385 C84.6112007,105.738652 85.3056229,105.385765 85.9474477,105.272594 C86.2563307,105.21813 86.5795392,105.239339 87.0043087,105.374267 L87.1928251,105.439167 L87.4661627,105.54851 L87.5387993,105.580084 L87.6132699,105.613402 L87.9306218,105.76461 L88.0151097,105.80702 L88.1017707,105.851322 L88.4712754,106.047944 L88.5696494,106.102077 L88.6705354,106.15825 L89.1003315,106.403837 L90.6692751,107.333085 C93.8580441,109.173586 96.1514635,109.835117 99.1569836,108.982338 C101.999278,108.175872 103.55693,106.759467 105.58219,103.961808 L105.809233,103.645234 L106.364755,102.869521 L106.603316,102.550261 L106.8148,102.280086 L107.002591,102.05486 L107.170071,101.870452 L107.320624,101.722726 C107.535451,101.526583 107.704568,101.440294 107.879363,101.401082 C109.04088,101.140514 110.997399,102.041301 113.707728,104.723223 C115.278033,106.277069 117.810657,106.263727 119.364504,104.693422 C120.91835,103.123117 120.905008,100.590493 119.334703,99.0366463 C114.886637,94.6352008 110.498206,92.6147556 106.128216,93.5950913 Z M49,28 C34.6405965,28 23,39.6405965 23,54 C23,68.3594035 34.6405965,80 49,80 C63.3594035,80 75,68.3594035 75,54 C75,39.6405965 63.3594035,28 49,28 Z M105,28 C93.954305,28 85,36.954305 85,48 C85,59.045695 93.954305,68 105,68 C116.045695,68 125,59.045695 125,48 C125,36.954305 116.045695,28 105,28 Z M49.5,42 C56.4035594,42 62,47.5964406 62,54.5 C62,61.4035594 56.4035594,67 49.5,67 C42.5964406,67 37,61.4035594 37,54.5 C37,47.5964406 42.5964406,42 49.5,42 Z M105.384615,38.7692308 C110.695046,38.7692308 115,43.0741851 115,48.3846154 C115,53.6950457 110.695046,58 105.384615,58 C100.074185,58 95.7692308,53.6950457 95.7692308,48.3846154 C95.7692308,43.0741851 100.074185,38.7692308 105.384615,38.7692308 Z"
          id="Combined-Shape"
          fill={color}
        ></path>
      </g>
    </svg>
  );
}

const style = {
  margin: "0px",
  marginLeft: "20px",
};
