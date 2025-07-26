import { memo } from 'react';
import styled from 'styled-components';
import { media } from '../../../theme/media';
import { Flex } from '../../common/flex';
import { useWheelContext } from './context';

export const WheelControls = memo(() => {
  const { items, activeIndex, handlePrevSlide, handleNextSlide } = useWheelContext();

  return (
    <StyledControls $col $gap={14}>
      <span>
        {String(activeIndex + 1).padStart(2, '0')}/{String(items.length).padStart(2, '0')}
      </span>

      <Flex $gap={10}>
        <ControlButton onClick={handlePrevSlide}>
          <img src='/img/left-arrow.svg' alt='prev' />
        </ControlButton>
        <ControlButton onClick={handleNextSlide}>
          <img src='/img/right-arrow.svg' alt='next' />
        </ControlButton>
      </Flex>
    </StyledControls>
  );
});

const StyledControls = styled(Flex)`
  padding-left: 80px;
  font-weight: bold;

  button {
    ${media('width', 'px', [{ 768: 38 }, { 576: 25 }])}
    ${media('height', 'px', [{ 768: 38 }, { 576: 25 }])}
  }

  img {
    ${media('width', 'px', [{ 576: 6 }])}
    ${media('height', 'px', [{ 576: 12 }])}
  }

  ${media('padding-left', 'px', [{ 1024: 40 }, { 768: 0 }])}
  ${media('gap', 'px', [{ 768: 10 }])}
`;

const ControlButton = styled.button`
  background: transparent;
  border: 1px solid rgba(66, 86, 122, 0.5);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(66, 86, 122, 0.2);
  }
`;
