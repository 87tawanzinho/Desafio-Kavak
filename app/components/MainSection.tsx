export default function Mainsection() {
  return (
    <main className="flex flex-col lg:flex-row p-0 lg:p-24 gap-8">
      <div className="border rounded-lg">
        <img
          src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjkxNjczL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzAzMjY1OTc2MjQ4LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0="
          className="w-screen lg:w-72 h-96 lg:h-40 bg-black"
        ></img>
        <div className=" pt-2 flex flex-col gap-2 px-4">
          <p className="font-bold">Honda Fit</p>
          <p className="text-sm border-b-2 border-gray-100">2017 72.591km</p>
          <p className="mt-2 text-gray-400">Preço à vista</p>
          <p className="font-bold text-xl text-gray-800">
            <span className="text-sm text-gray-600 mr-1">R$</span>69.2999
          </p>
          <p className=" mt-4 border-t-2 pt-4 pb-4 border-gray-100 text-sm">
            São paulo
          </p>
        </div>
      </div>
    </main>
  );
}
