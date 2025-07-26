import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination as PaginationModule } from 'swiper/modules';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { media } from '../../../theme/media';
import { useWheelContext } from './context';
import { useWindowLessThat } from '../../../util/useWindowLessThat';
import { Flex } from '../../common/flex';
import { memo } from 'react';

export const SliderPagination = memo(() => {
  const isMobile = useWindowLessThat(475);
  if (!isMobile) return null;
  return <StyledPagination $align='center' id='swiper-pagination' />;
});

const StyledPagination = styled(Flex)`
  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const WheelSlider = () => {
  const { slides, activeIndex } = useWheelContext();

  return (
    <StyledSwiper
      key={activeIndex}
      modules={[Navigation, A11y, PaginationModule]}
      navigation
      pagination
      spaceBetween={30}
      slidesPerView={3}
      shortSwipes
      breakpoints={{
        270: {
          slidesPerView: 1.5,
          pagination: {
            el: '#swiper-pagination',
            enabled: true,
            clickable: true,
          },
          navigation: {
            enabled: false,
          },
        },
        425: {
          slidesPerView: 1.5,
          pagination: {
            enabled: false,
          },
          navigation: {
            enabled: true,
          },
        },
        768: {
          slidesPerView: 2,
          pagination: {
            enabled: false,
          },
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {slides.map(({ year, description }, idx) => (
        <StyledSlide key={idx}>
          <StyledYear>{year}</StyledYear>
          <p>{description}</p>
        </StyledSlide>
      ))}
    </StyledSwiper>
  );
};

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: auto;
  padding-left: 80px;
  .swiper-scrollbar {
    display: none;
  }

  .swiper-pagination {
    display: none;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #000;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    width: 32px;
    height: 32px;
    &:after {
      font-size: 16px;
    }

    &.swiper-button-disabled {
      display: none;
    }
  }

  animation: fadeIn 1.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${media('padding-left', 'px', [{ 1024: 40 }, { 768: 0 }])}
`;

const StyledSlide = styled(SwiperSlide)`
  height: 135px;
  flex-direction: column;
  gap: 15px;
  display: flex;
  font-size: 20px;
  line-height: 30px;

  ${media('font-size', 'px', [{ 425: 14 }])}
`;

const StyledYear = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.highlightDark};
`;
