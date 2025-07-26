import styled from 'styled-components';
import { media } from '../../../theme/media';
import { AnimatedNumber } from '../../common/animated-number';
import { Flex } from '../../common/flex';
import { useWheelContext } from './context';
import { memo } from 'react';

export const WheelTimeRange = memo(() => {
  const { dateRange } = useWheelContext();
  const [start, end] = dateRange;

  return (
    <StyledTimeRange $gap={110}>
      <AnimatedNumber value={start} color='#5D5FEF' />
      <AnimatedNumber value={end} color='#EF5DA8' />
    </StyledTimeRange>
  );
});
const StyledTimeRange = styled(Flex)`
  position: absolute;
  font-weight: bold;
  top: 50%;
  font-size: 200px;
  white-space: nowrap;
  z-index: 90;
  width: 100%;
  justify-content: center;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;

  ${media('transform', '', [{ 475: 'none' }])}
  ${media('font-size', 'px', [{ 1440: 150 }, { 1024: 130 }, { 768: 100 }, { 576: 80 }, { 425: 56 }])}
  ${media('gap', 'px', [{ 576: 32 }, { 425: 15 }])}
  ${media('position', '', [{ 475: 'static' }])}
`;
