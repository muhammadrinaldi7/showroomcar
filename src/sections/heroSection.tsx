import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export const HeroSection = () => {
  const carouselItems = [
    {
      id: 1,
      imageUrl: "/1.png",
      altText: "Mobil 1",
    },
    {
      id: 2,
      imageUrl: "/2.png",
      altText: "Mobil 2",
    },
    {
      id: 3,
      imageUrl: "/3.png",
      altText: "Mobil 3",
    },
  ];
  return (
    <section id="Home" className="bg-white min-h-dvh flex items-center">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div className="max-w-prose text-left">
            <h1 className="text-5xl font-bold text-gray-900 ">
              <strong className="text-[#C80036]"> ANUGERAH UTAMA MOTOR </strong>
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              <strong className="text-aum"> Spesialis Mobil Bekas </strong>{" "}
              adalah dealer mobil bekas yang menyediakan berbagai pilihan mobil
              berkualitas dengan harga terjangkau. Kami berkomitmen untuk
              memberikan pelayanan terbaik kepada pelanggan kami.
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-aum bg-aum px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-aum/80 hover:text-gray-900"
                href="#"
              >
                Get Started
              </a>

              <a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>

          <Carousel className="w-full rounded-xl overflow-hidden">
            <CarouselContent className="rounded-xl flex gap-2">
              {carouselItems.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="relative rounded-xl w-full"
                >
                  <div className="absolute inset-0 z-[-1] rounded-xl bg-white opacity-45"></div>
                  <Image
                    src={item.imageUrl}
                    alt={item.altText}
                    width={1000}
                    height={1000}
                    className="object-cover drop-shadow-lg w-full h-full"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
