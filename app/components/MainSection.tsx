export default function Mainsection() {
  return (
    <main className="flex flex-col lg:flex-row p-0 lg:p-24 gap-8">
      <div>
        <div className="w-screen lg:w-60 h-96 lg:h-40 bg-black"></div>
        <div className="p-2">
          <p className="font-bold">Honda Fit</p>
          <p className="text-sm border-b-2 border-gray-100">2017 72.591km</p>
          <p className="mt-2 text-gray-400">Preço à vista</p>
          <p className="font-bold text-xl text-gray-800">
            <span className="text-sm text-gray-600 mr-1">R$</span>69.2999
          </p>
          <p className=" mt-4 border-t-2 pt-4 border-gray-100 text-sm">
            São paulo
          </p>
        </div>
      </div>
    </main>
  );
}
