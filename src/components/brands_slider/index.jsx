import Slider from "react-slick";
import SliderArrow from "../../assets/svg/SliderArrow";

export default function BrandsSlider({ slides }) {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <SliderArrow
        className={className}
        style={{ ...style, display: "block", left: 0, width: 55, paddingRight: 10 }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <Slider
        {...settings}
        style={{
          padding: "1em 0 1em 55px",
          backgroundColor: "none",
          overflow: "visible",
        }}>
        {slides}
      </Slider>
    </>
  );
}
