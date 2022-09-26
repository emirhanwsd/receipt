const App = () => {
  return (
    <div className="h-full bg-gray-50 flex items-center justify-center sm:py-4">
      <div className="w-screen sm:max-w-screen-md h-full bg-white px-16 pt-16 rounded-xl shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between gap-y-8">
          <div className="space-y-12">
            <h4 className="text-2xl font-semibold uppercase">Brand</h4>

            <div className="space-y-2">
              <h1 className="text-4xl font-semibold">Invoice</h1>

              <span className="text-4xl font-semibold text-gray-400">2201</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-24 gap-y-8">
            <div className="space-y-2">
              <h6 className="font-semibold">Issued</h6>

              <span className="text-sm font-medium text-gray-400">
                01 Jan, 2022
              </span>
            </div>

            <div className="space-y-2">
              <h6 className="font-semibold">Due</h6>

              <span className="text-sm font-medium text-gray-400">
                30 Jan, 2022
              </span>
            </div>

            <div className="space-y-2">
              <h6 className="font-semibold">From</h6>

              <div className="flex flex-col text-sm font-medium text-gray-400">
                <span>Made by Brand</span>

                <span>Streetname 11</span>

                <span>0000 AA</span>

                <span>The Netherlands</span>
              </div>
            </div>

            <div className="space-y-2">
              <h6 className="font-semibold">To</h6>

              <div className="flex flex-col text-sm font-medium text-gray-400">
                <span>Company</span>

                <span>Adress line</span>

                <span>Postal code</span>

                <span>Country</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-16">
          <h6 className="font-semibold">Service</h6>

          <h6 className="font-semibold">Total</h6>
        </div>

        <hr className="my-6 border-gray-100" />

        <div className="space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <div>
              <h6 className="font-semibold">Name of service</h6>

              <h6 className="font-medium text-gray-400">Description</h6>
            </div>

            <span className="font-medium text-gray-400">$2900</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h6 className="font-semibold">Name of service</h6>

              <h6 className="font-medium text-gray-400">Description</h6>
            </div>

            <span className="font-medium text-gray-400">$1900</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h6 className="font-semibold">Name of service</h6>

              <h6 className="font-medium text-gray-400">Description</h6>
            </div>

            <span className="font-medium text-gray-400">$900</span>
          </div>
        </div>

        <hr className="my-6 border-gray-100" />

        <div className="flex items-center justify-between">
          <h6 className="font-semibold">Subtotal</h6>

          <span className="font-medium text-gray-400">$5700</span>
        </div>

        <div className="flex items-center justify-between mt-2">
          <h6 className="font-medium text-gray-400">VAT 21%</h6>

          <span className="font-medium text-gray-400">$1197</span>
        </div>

        <div className="flex items-center justify-between mt-8">
          <h6 className="font-semibold">Total</h6>

          <span className="font-medium text-gray-400">$6897</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-16">
          <div className="text-sm">
            <h6 className="font-semibold">Account</h6>

            <h6 className="font-medium text-gray-400">Made by Brand</h6>
          </div>

          <div className="text-sm">
            <h6 className="font-semibold">IBAN</h6>

            <h6 className="font-medium text-gray-400">INGB 0000 1234 5678</h6>
          </div>

          <div className="text-sm">
            <h6 className="font-semibold">BIC</h6>

            <h6 className="font-medium text-gray-400">INGBNL2A</h6>
          </div>

          <div className="h-8 w-px bg-gray-100 hidden sm:block" />

          <div className="text-sm">
            <h6 className="font-semibold">VAT</h6>

            <h6 className="font-medium text-gray-400">NL0000000000</h6>
          </div>

          <div className="text-sm">
            <h6 className="font-semibold">COC</h6>

            <h6 className="font-medium text-gray-400">123456789</h6>
          </div>
        </div>

        <p className="max-w-md mx-auto text-xs text-center font-medium text-gray-400 mt-12">
          The invoice is to be paid by wire transfer only, unless agreed
          otherwise and must be paid before the date due specified above.
        </p>
      </div>
    </div>
  );
};

export default App;
