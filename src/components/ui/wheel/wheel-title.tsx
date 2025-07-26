import { css } from 'styled-components';
import { styled } from 'styled-components';
import { media } from '../../../theme/media';
import { memo } from 'react';

export const WheelTitle = memo(() => {
  return (
    <StyledTitle>
      <span>Исторические</span>
      <br />
      <span>даты</span>
    </StyledTitle>
  );
});

const StyledTitle = styled.h1`
  font-size: 56px;
  max-width: 450px;
  padding-left: 80px;
  position: relative;
  max-height: fit-content;

  &::before {
    content: '';
    position: absolute;
    transform: translateY(10%);
    inset: 0;
    height: 120px;
    width: 5px;
    ${({ theme }) => css`
      background: linear-gradient(135deg, ${theme.colors.highlightDark}, ${theme.colors.highlightLight});
    `}
    z-index: 0;

    ${media('background', '', [{ 768: 'transparent' }])}
  }

  ${media('padding-left', 'px', [{ 1024: 40 }, { 768: 0 }])}
  ${media('font-size', 'px', [{ 1440: 40 }, { 1024: 30 }, { 768: 25 }, { 572: 20 }])}
`;
