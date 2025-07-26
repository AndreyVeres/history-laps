import { Container } from './components/common/container';
import { timelaps } from './timelaps';
import styled from 'styled-components';
import { Wheel } from './components/ui/wheel/index';
import { Flex } from './components/common/flex';
import { media } from './theme/media';
import { SliderPagination } from './components/ui/wheel/wheel-slider';
import { useWindowLessThat } from './util/useWindowLessThat';

export const App = () => {
  const isMobile = useWindowLessThat(475);

  return (
    <Container>
      <StyledMain>
        <StyledWheelContainer $col>
          <Wheel items={timelaps}>
            <StyledContentWrapper>
              <Wheel.Title />

              <StyledTimerangeContainer>
                {!isMobile && <Wheel.Core />}
                <Wheel.TimeRange />
              </StyledTimerangeContainer>
              <Wheel.Label />
            </StyledContentWrapper>
            <StyledControlsWrapper $gap={50}>
              <Wheel.Controls />
              <SliderPagination />
            </StyledControlsWrapper>
            <Wheel.Slider />
          </Wheel>
        </StyledWheelContainer>
      </StyledMain>
    </Container>
  );
};

const StyledContentWrapper = styled(Flex)`
  ${media('flex-direction', '', [{ 475: 'column' }])}
  ${media('gap', 'px', [{ 425: 45 }])}
`;

const StyledControlsWrapper = styled(Flex)`
  ${media('order', '', [{ 576: 2 }])}
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  height: auto;
  gap: 50px;
  padding-top: 100px;
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  border-right: 1px solid rgba(217, 217, 217, 0.3);
  border-left: 1px solid rgba(217, 217, 217, 0.3);

  ${media('border-right', '', [{ 768: 'none' }])}
  ${media(' border-left', '', [{ 768: 'none' }])}
  ${media('padding-top' , 'px' , [{425: 70}])}
`;

const StyledTimerangeContainer = styled(Flex)`
  position: relative;

  ${media('margin-left', '%', [{ 1440: 13 }, { 1024: 0 }])}
`;

const StyledWheelContainer = styled(Flex)`
  position: relative;
  transition: all 1s;
  justify-content: space-evenly;
  flex: 1;

  ${media('gap', 'px', [{ 425: 20 }])}
  ${media('justify-content', '', [{ 320: 'space-around' }])}
`;
