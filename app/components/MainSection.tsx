import Image from "next/image";
import gps from "@/public/images/gps.png";
export default function Mainsection() {
  return (
    <main className="flex flex-col lg:flex-row p-4 mt-20 lg:p-24 gap-8">
      <div className="border rounded-lg  border-gray-200">
        <img
          src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjkxNjczL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzAzMjY1OTc2MjQ4LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0="
          className="w-screen lg:w-72  object-contain"
        ></img>
        <div className=" pt-2 flex flex-col gap-2 ">
          <p className="font-bold px-4">Honda Fit</p>
          <p className="text-sm border-b-2 border-gray-100 px-4">
            2017 72.591km
          </p>
          <p className="mt-2 text-gray-400 px-4">Preço à vista</p>
          <p className="font-bold text-xl text-gray-800 px-4">
            <span className="text-sm text-gray-600 mr-1">R$</span>69.2999
          </p>
          <p className="p-4 mt-4 border-t-2 pt-4 pb-4 border-gray-100 text-sm flex items-center gap-2 text-gray-700 ">
            <Image src={gps} alt="gps" className="h-4 w-4 object-cover" />
            São paulo
          </p>
        </div>
      </div>
    </main>
  );
}
