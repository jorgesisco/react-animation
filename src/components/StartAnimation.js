import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { gsap, TweenMax, TimelineMax } from 'gsap';

function StartAnimation({ goToPage }) {
  const [stage_1, setStage_1] = useState();

  useEffect(() => {
    setStage_1(true);
    const ShapesData = [{}];
    const GetShapeData = () => {
      const svg = document.querySelectorAll('svg');
      svg.forEach(function (el, i) {
        let path = el.querySelectorAll('path');

        path.forEach(function (pt) {
          ShapesData.push({
            id: pt.id,
            d: pt.getAttribute('d'),
            fill: pt.getAttribute('fill'),
          });
        });
      });
    };
    GetShapeData();
    console.log(ShapesData);
    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(`#${ShapesData[1].id}`, { x: 200, duration: 4 });
  }, []);

  return (
    <Container>
      <svg
        viewBox='0 0 801 450'
        xmlns='http://www.w3.org/2000/svg'
        fill-rule='evenodd'
        clip-rule='evenodd'
        stroke-linejoin='round'
        stroke-miterlimit='2'
      >
        <g transform='translate(-.28 .19)'>
          <g id='Shark' transform='translate(.03 -1.13)'>
            <path
              id='Flap_1'
              d='M325.06 234.36l59.23-34.81-8.86 45.18-50.37-10.37z'
              fill='#0b0b0d'
            />
            <path
              id='Flap_2'
              d='M214.8 258.27l16.74 4.53 94.05-28.64-110.78 24.11z'
              fill='#1d1d1f'
            />
            <path
              d='M232.56 262.97l93.6-28.44 50.14 10.35.4 9.56-50.04-1.18-94.1 9.71z'
              fill='#1d1d1f'
              transform='translate(-1.1 -.22)'
              id='Flap_3'
            />
            <path
              d='M376.36 254.36l-.3-9.35 1.4-6.15 50.08 15.96-51.18-.46z'
              fill='#1d1d1f'
              transform='translate(-.87 -.21)'
              id='Flap_4'
            />
            <path
              d='M215.2 258.88l-30.29 43.85 27.16-11.1 19.66-28.28-16.53-4.47z'
              fill='#242426'
              transform='translate(-.23 -.58)'
              id='Flap_5'
            />
            <path
              d='M226.65 296.88l5.3-32.76-18.7 26.9 13.4 5.86z'
              fill='#1f1f22'
              transform='translate(-.43 -1.38)'
              id='Flap_6'
            />
            <path
              d='M184.5 303.28l17.96.52 9.22-11.62-27.17 11.1z'
              fill='#232326'
              transform='translate(.18 -1.13)'
              id='Flap_7'
            />
            <path
              id='Flap_8'
              d='M226.4 295.44l-24.28 7.68 10.7-13.52 13.58 5.84z'
              fill='#212123'
            />
            <path
              d='M202.46 303.8l-8.49 10.48-11.03-5.74 1.81-5.26 17.7.52z'
              fill='#252528'
              transform='translate(.1 -1.16)'
              id='Flap_9'
            />
            <path
              id='Flap_10'
              d='M226.15 295.52l99.95-42.57-94.66 9.75-5.3 32.82z'
              fill='#1c1c1e'
            />
            <path
              id='Flap_11'
              d='M194.02 313l88.36 10.82L202 302.8l-7.98 10.2z'
              fill='#222225'
            />
            <path
              id='Flap_12'
              d='M202.2 302.99l24.13-7.69 62.31 28.48-6.31.02L202.2 303z'
              fill='#1f1f21'
            />
            <path
              id='Flap_13'
              d='M262.68 321.39l30.81 2.89 16.75 32.42-47.56-35.31z'
              fill='#111112'
            />
            <path
              id='Flap_14'
              d='M325.42 253.18l-19.3 27.9-8.4 29.55-71.59-15.13 99.29-42.32z'
              fill='#1a1a1c'
            />
            <path
              id='Flap_15'
              d='M325.52 252.97l102.65 55.04-122.14-26.94 19.49-28.1z'
              fill='#0d0d0f'
            />
            <path
              id='Flap_16'
              d='M305.82 280.94l96.03 61.08 26.36-34-122.38-27.08z'
              fill='#0c0c0d'
            />
            <path
              id='Flap_17'
              d='M426.67 254.6l1.53 53.43-102.64-55 101.1 1.57z'
              fill='#0b0b0d'
            />
            <path
              id='Flap_18'
              d='M426.63 254.6l107.05 33.6 3.1 5.78-108.58 14.05-1.57-53.42z'
              fill='#0a0a0b'
            />
            <path
              id='Flap_19'
              d='M428.2 308.02l108.67-14.08-32.54 15.17-102.48 32.86 26.35-33.95z'
              fill='#0a0a0b'
            />
            <path
              id='Flap_20'
              d='M533.63 288.21l26.78-5.05 49.72 8.96-39.24 11.07-34.17-9.23-3.09-5.75z'
              fill='#09090b'
            />
            <path
              id='Flap_21'
              d='M306.06 281.07l-8.6 29.36 104.38 31.56-95.78-60.92z'
              fill='#101012'
            />
            <path
              id='Flap_22'
              d='M326.14 318.7l1.98 12.05 73.75 11.23-75.73-23.27z'
              fill='#101012'
            />
            <path
              id='Flap_23'
              d='M348.05 375.4l-73.8-69.75 23.26 4.76 31.87 36.47 18.67 28.53z'
              fill='#0e0e0f'
            />
            <path
              id='Flap_24'
              d='M225.96 295.45l2.23.47 45.95 9.57 20.03 18.8-5.83-.27-62.38-28.57z'
              fill='#1a1a1c'
            />
            <path
              id='Flap_25'
              d='M297.38 310.34l31.58 36.08-.83-15.68-1.89-11.85-28.86-8.55z'
              fill='#0f0f11'
            />
          </g>
        </g>
      </svg>
      {!stage_1 ? (
        <button onClick={goToPage}>explore the exhibition</button>
      ) : null}
    </Container>
  );
}

export default StartAnimation;

const Container = styled.div`
  /* background: #1a1a1d; */
  background: grey;
  height: 100vh;
`;

// const SharkImg = styled.img``;
