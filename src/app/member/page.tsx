export default function MemberPage() {
  return (
    <div className="flex bg-blue-900 min-h-dvh p-4 flex-col gap-4">
      {/* Header */}
      <div className="flex w-full p-4 justify-between">
        <div className="flex gap-2">
          <h1 className="text-white">
            Nurdinah <br /> 12831461
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <a href="/login" className="text-white">
            Login
          </a>
          <a href="/register" className="text-white">
            Register
          </a>
        </div>
      </div>
      {/* CardMember */}
      <a
        href="#"
        className="block rounded-md bg-red-700 border border-red-700 p-4 shadow-sm sm:p-6"
      >
        <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
          <div className="sm:order-last sm:shrink-0"></div>

          <div className="mt-4 sm:mt-0">
            <h3 className="text-lg font-medium text-pretty text-white">
              Member Card
            </h3>

            <p className="mt-1 text-sm text-white">3LC3-0310-2022</p>

            <p className="mt-4 line-clamp-2 text-sm text-pretty text-white">
              Pelanggan I-One Variasi.
            </p>
          </div>
        </div>

        <dl className="mt-6 flex gap-4 lg:gap-6">
          <div className="flex items-center gap-2">
            <dt className="text-white">
              {/* <span className="sr-only"> Published on </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg> */}
              50
            </dt>

            <dd className="text-xs text-white">Points</dd>
          </div>

          {/* <div className="flex items-center gap-2">
            <dt className="text-gray-700">
              <span className="sr-only"> Reading time </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
            </dt>

            <dd className="text-xs text-gray-700">12 minutes</dd>
          </div> */}
        </dl>
      </a>
      {/* Barcode */}
      <div className="flex flex-col gap-4 text-white justify-center items-center">
        <h1>Kode Pelanggan : 3LC3-0310-2022</h1>
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=3LC3-0310-2022"
          alt="QR Code"
          className="w-32 h-32"
        />
      </div>
    </div>
  );
}
