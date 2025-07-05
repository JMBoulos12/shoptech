import Container from "@/components/common/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { urlFor } from "@/sanity/lib/image";
import { getBanner } from "@/sanity/queries";
import React from "react";

const Banner = async () => {
  const banner = await getBanner();

  return (
    <Container className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-5">
      <div className="w-full lg:col-span-3">
        <Carousel className="relative w-full rounded-md overflow-hidden">
          <CarouselContent>
            {banner?.map((item, index) => (
              <CarouselItem key={index}>
                <div>
                  {item?.image && <Image src={urlFor(item?.image).url()} />}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Container>
  );
};

export default Banner;
