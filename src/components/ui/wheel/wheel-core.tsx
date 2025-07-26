import { useGSAP } from '@gsap/react';
import styled, { css } from 'styled-components';
import { media } from '../../../theme/media';
import { normalizeAngle } from '../../../util/normalize-angle';
import gsap from 'gsap';
import { useWheelContext } from './context';

export const WheelCore = () => {
  const { items, activeIndex, rotation, buttonRefs, handleSetActiveIndex } = useWheelContext();

  useGSAP(
    () => {
      buttonRefs.current.forEach((node, idx) => {
        if (!node) return;
        const isActive = idx === activeIndex;
        gsap.to(node, isActive ? activeButtonStyles : inActiveButtonStyles);
      });
    },
    { dependencies: [activeIndex] }
  );

  return (
    <StyledWheelWrapper>
      <StyledWheel style={{ transform: `rotate(${rotation}deg)` }}>
        {items.map((_, idx) => {
          const angle = (360 / items.length) * idx;
          const isActive = activeIndex === idx;
          return (
            <StyledButtonWrapper key={idx}>
              <Button
                ref={node => {
                  if (node) buttonRefs.current[idx] = node;
                }}
                $angle={angle}
                onMouseEnter={() => gsap.to(buttonRefs.current[idx], activeButtonStyles)}
                onMouseLeave={() => !isActive && gsap.to(buttonRefs.current[idx], inActiveButtonStyles)}
                $isActive={isActive}
                onClick={() => handleSetActiveIndex(idx)}
              >
                <p style={{ transform: `rotate(-${normalizeAngle(rotation)}deg)` }}>{idx + 1}</p>
              </Button>
            </StyledButtonWrapper>
          );
        })}
      </StyledWheel>
    </StyledWheelWrapper>
  );
};

const lineStyles = css`
  content: '';
  position: absolute;
  opacity: 30%;
  background: ${({ theme }) => theme.colors.gray};
`;

const StyledWheelWrapper = styled.div`
  position: relative;
  max-width: fit-content;
  margin-top: 45px;

  --wheel-diameter: 530px;
  --wheel-radius: calc(var(--wheel-diameter) / 2);
  width: var(--wheel-diameter);
  height: var(--wheel-diameter);

  &::before {
    width: 100vw;
    height: 1px;
    top: 50%;
    left: -100%;
    ${lineStyles}

    ${media('width', 'px', [{ 576: 0 }])}
    ${media('height', 'px', [{ 576: 0 }])}
  }

  &::after {
    width: 1px;
    height: 97vh;
    right: 50%;
    top: -50%;
    ${lineStyles}

    ${media('width', 'px', [{ 576: 0 }])}
    ${media('height', 'px', [{ 576: 0 }])}
  }

  ${media('align-self', '', [{ 768: 'center' }])}

  @media (max-width: 1440px) {
    --wheel-diameter: 400px;
  }

  @media (max-width: 576px) {
    --wheel-diameter: 300px;
  }
`;

const StyledWheel = styled.div`
  position: relative;
  width: var(--wheel-diameter);
  height: var(--wheel-diameter);
  border-radius: 50%;
  border: 2px solid rgba(217, 217, 217, 0.3);
  transition: transform 0.7s cubic-bezier(1, 0, 0.2, 1);
`;

const StyledButtonWrapper = styled.div`
  button {
    position: absolute;
    overflow: hidden;
  }
`;

const activeButtonStyles = {
  width: '56px;',
  height: '56px',
  border: '1px solid #929aa9',
  backgroundColor: '#f4f5f9',
  duration: 0.3,
};

const inActiveButtonStyles = {
  width: 0,
  height: 0,
  duration: 0.3,
  color: '#42567a',
  border: '3px solid #42567a',
  backgroundColor: '#42567a',
};

const Button = styled.button<{ $isActive?: boolean; $angle?: number }>`
  top: 50%;
  left: 50%;
  font-weight: bold;
  border-radius: 50%;
  ${inActiveButtonStyles}
  z-index: 10;
  ${({ $isActive }) =>
    $isActive &&
    css`
      ${activeButtonStyles}
    `}

  p {
    transition: all 0.6s;
  }

  transform: ${({ $angle }) => `rotate(${$angle}deg) translate(var(--wheel-radius)) rotate(-${$angle}deg) translate(-50%, -50%)`};
`;
