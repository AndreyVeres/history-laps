import styled from 'styled-components';

type Props = {
  $justify?: string;
  $col?: boolean;
  $gap?: number;
  $align?: string;
  $wrap?: string;
  $self?: string;
};

export const Flex = styled.div<Props>`
  display: flex;
  justify-content: ${({ $justify }) => $justify || 'stretch'};
  align-items: ${({ $align }) => $align || 'stretch'};
  flex-direction: ${({ $col }) => ($col ? 'column' : '')};
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : '')};
  flex-wrap: ${({ $wrap }) => ($wrap ? `${$wrap}` : '')};
  align-self: ${({ $self }) => ($self ? `${$self}` : '')};
`;
