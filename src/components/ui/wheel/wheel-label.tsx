import styled from 'styled-components';
import { useWheelContext } from './context';
import { media } from '../../../theme/media';

export const WheelLabel = () => {
  const { label } = useWheelContext();

  return (
    <StyledLabelContainer>
      <span>{label}</span>
    </StyledLabelContainer>
  );
};

const StyledLabelContainer = styled.div`
  position: relative;
  top: 50px;
  font-weight: bold;
  font-size: 20px;

  span {
    position: absolute;
    left: -100px;
    ${media('position', '', [{ 576: 'static' }])}
    ${media('left', 'px', [{ 1440: -50 }])}
  }

  ${media('top', 'px', [{ 576: 0 }])}
  @media (max-width: 475px) {
    padding-bottom: 10px;
    border-bottom: ${({ theme }) => `2px solid ${theme.colors.gray}`};
  }
`;
