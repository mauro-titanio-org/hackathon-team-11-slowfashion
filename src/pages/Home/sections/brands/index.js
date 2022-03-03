import { Container } from "@nextui-org/react";
import BrandsSlider from "../../../../components/brands_slider";
import { BRANDS } from "../../../../data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BrandCard from "../../../../components/cards/brand_card";
import BrandsSectionText from "../../../../assets/svg/BrandsSectionText";

export default function BrandsSection() {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "#F1EBE1",
          marginInline: 0,
          textAlign: "center",
          paddingInline: 0,
          paddingTop: 50,
          paddingBottom: 30,
          overflow: "visible",
        }}>
        <BrandsSectionText />
        <Container style={{ paddingInline: 0, paddingTop: 35 }}>
          <BrandsSlider
            slides={BRANDS.map((brand, i) => (
              <BrandCard
                name={brand.name}
                description={brand.description}
                logo={brand.logo}
              />
            ))}
          />
        </Container>
      </Container>
    </>
  );
}
