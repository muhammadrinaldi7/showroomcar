import {
  faAward,
  faCar,
  faCreditCard,
  faSync,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BannerSection = () => {
  const whyUs = [
    {
      icon: faSync,
      title: "Tukar Tambah",
      description: "Ditempat kami menyediakan tukar tambah mobil bekas.",
    },
    {
      icon: faCreditCard,
      title: "Pembayaran Credit",
      description: "Ditempat kami menyediakan pembayaran kredit.",
    },
    {
      icon: faCar,
      title: "Banyak Pilihan",
      description: "Ditempat kami menyediakan banyak pilihan mobil bekas.",
    },
    {
      icon: faAward,
      title: "Terpercaya",
      description: "Kami sudah berpengalaman dalam menjual mobil bekas.",
    },
  ];

  return (
    <section
      id="About"
      className="bg-white flex flex-col py-8 md:justify-center items-center min-h-dvh"
    >
      <div className="md:bg-gray-100 w-full md:absolute flex z-0 py-8 px-4 justify-center md:w-[75%] md:h-[50vh] md:rounded-lg md:shadow-lg">
        <h1 className="text-3xl font-bold text-black font-sans">
          Mengapa Memilih Kami?
        </h1>
      </div>
      <div className="grid px-6 grid-cols-1 gap-4 lg:grid-cols-4 z-20">
        {whyUs.map((item, index) => (
          <div
            key={index}
            className="h-32 cursor-default hover:scale-105 hover:shadow-2xl flex flex-col px-4 py-2 rounded-lg shadow-lg bg-white border-black border-2"
          >
            <div className="flex items-center justify-center h-full text-2xl font-bold text-black">
              <FontAwesomeIcon
                icon={item?.icon}
                className="text-4xl drop-shadow-xl"
              />
            </div>
            <div className="flex flex-col items-center justify-center h-full text-sm font-semibold text-black">
              <span>{item.title}</span>
              <p className="text-center">{item.description}</p>
            </div>
          </div>
        ))}
        {/* <div className="h-32 flex flex-col px-4 py-2 rounded-lg shadow-lg bg-white border-black border-2">
          <div className="flex items-center justify-center h-full text-2xl font-bold text-black">
            <FontAwesomeIcon
              icon={faSync}
              className="text-4xl drop-shadow-xl"
            />
          </div>
          <div className="flex flex-col items-center justify-center h-full text-sm font-semibold text-black">
            <span>Tukar Tambah</span>
            <p className="text-center">
              Ditempat kami menyediakan tukar tambah mobil bekas.
            </p>
          </div>
        </div>
        <div className="h-32 flex flex-col px-4 py-2 rounded-lg shadow-lg bg-white border-black border-2">
          <div className="flex items-center justify-center h-full text-2xl font-bold text-black">
            <FontAwesomeIcon
              icon={faCreditCard}
              className="text-4xl drop-shadow-xl"
            />
          </div>
          <div className="flex flex-col items-center justify-center h-full text-sm font-semibold text-black">
            <span>Bisa Kredit</span>
            <p className="text-center">
              Kami melayani kredit bisa di seluruh Indonesia (s&k).
            </p>
          </div>
        </div>
        <div className="h-32 flex flex-col px-4 py-2 rounded-lg shadow-lg bg-white border-black border-2">
          <div className="flex items-center justify-center h-full text-2xl font-bold text-black">
            <FontAwesomeIcon icon={faCar} className="text-4xl drop-shadow-xl" />
          </div>
          <div className="flex flex-col items-center justify-center h-full text-sm font-semibold text-black">
            <span>Banyak Pilihan</span>
            <p className="text-center">
              Kami menyediakan banyak pilihan mobil bekas dengan harga
              terjangkau.
            </p>
          </div>
        </div>
        <div className="h-32 flex flex-col px-4 py-2 rounded-lg shadow-lg bg-white border-black border-2">
          <div className="flex items-center justify-center h-full text-2xl font-bold text-black">
            <FontAwesomeIcon
              icon={faAward}
              className="text-4xl drop-shadow-xl"
            />
          </div>
          <div className="flex flex-col items-center justify-center h-full text-sm font-semibold text-black">
            <span>Terpercaya</span>
            <p className="text-center">
              Kami sudah berpengalaman dalam menjual mobil bekas.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};
