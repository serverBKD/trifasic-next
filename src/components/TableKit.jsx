import Image from "next/image";
import ProductSec from "@/lib/ProductSeg.d"

export default function TableKit({QueryOpt}) {
  console.log('de este lado',QueryOpt)
  const NUMBER_CAM = 16
  const CAM = new ProductSec(
    "DS-2CE16C0T-IRPF",
    "BKD-2CE16C0T-IRPF",
    "Hikvision",
    "BULLET 4 EN 1",
    "BULLET 4 EN 1 720P 2,8MM IP66 PLASTICA",
    11,
    10,
    "CCTV",
    "/productsSec/DSC/PC9155-removebg-preview.png"
  );
  return (
    <table className="w-[840px] my-3 px-3">
      <thead>
        <tr className="grid grid-flow-col gap-1 grid-cols-7 bg-slate-900">
          <td>NumKit: `{QueryOpt.numkit}`</td>
          <td>TradeMark</td>
          <td>Power</td>
          <td>Storage</td>
          <td>Wire</td>
        </tr>
        <tr className="grid grid-flow-col gap-1 grid-cols-7 bg-slate-900">
          <td>Modelo</td>
          <td>Marca</td>
          <td>Description</td>
          <td>Cant</td>
          <td>Precio Unit</td>
          <td>Total Unit</td>
          <td>Nota</td>
          <td>Imagen</td>
        </tr>
      </thead>
      <tbody>
        {/* <!-- DVR --> */}
        <tr className="grid grid-flow-col gap-1 grid-cols-7 text-sm text-center bg-slate-700">
          <td>HKI-7208-HQHI</td>
          <td>HikVision</td>
          <td>XVR 8CH 2MP</td>
          <td>1</td>
          <td>$76</td>
          <td>$76</td>
          <td>500GB</td>
          <td>
            <Image
              src={`/productsSec/DSC/PC9155-removebg-preview.png`}
              alt=""
              width={60}
              height={60}
            />
          </td>
        </tr>
        {/* <!-- CAMARAS --> */}
        <tr className="grid grid-flow-col gap-1 grid-cols-7 text-sm text-center bg-slate-600">
          <td>{CAM.model}</td>
          <td>{CAM.trademark}</td>
          <td>{CAM.description}</td>
          <td>{NUMBER_CAM}</td>
          <td>{CAM.price_sell}</td>
          <td>{NUMBER_CAM * +CAM.price_sell}</td>
          <td>{CAM.tags}</td>
          <td>
            <Image src={CAM.images} alt="" width={60} height={60} />
          </td>
        </tr>
        {/* <!-- DISCO DURO --> */}
        <tr className="grid grid-flow-col gap-1 grid-cols-7 text-sm text-center bg-slate-700">
          <td>HD-SG-500GB</td>
          <td>SEAGATE</td>
          <td>Disco Duro Mecánico 3.5""</td>
          <td>1</td>
          <td>45</td>
          <td>45</td>
          <td>{CAM.tags}</td>
          <td>
            <Image src={CAM.images} alt="" width={60} height={60} />
          </td>
        </tr>
        {/* <!-- FUENTES DE PODER --> */}
        <tr className="grid grid-flow-col gap-1 grid-cols-7 text-sm text-center bg-slate-600">
          <td>BKD-FP-1A</td>
          <td>STARFUSE</td>
          <td>Fuente de Poder 12V 1Amp</td>
          <td>{NUMBER_CAM}</td>
          <td>2.5</td>
          <td>{+CAM.stock * 2.5}</td>
          <td>{CAM.tags}</td>
          <td>
            <Image src={CAM.images} alt="" width={60} height={60} />
          </td>
        </tr>
        {/* <!-- VIDEO BALUNES --> */}
        <tr className="grid grid-flow-col gap-1 grid-cols-7 text-sm text-center bg-slate-700">
          <td>BKD-VB-15</td>
          <td>BKDVision</td>
          <td>Video Balum c/Tornillo</td>
          <td>{NUMBER_CAM}</td>
          <td>1.5</td>
          <td>{+CAM.stock * 1.5}</td>
          <td>{CAM.tags}</td>
          <td>
            <Image src={CAM.images} alt="" width={60} height={60} />
          </td>
        </tr>
        {/* <!-- CABLEADO --> */}
        <tr className="grid grid-flow-col gap-1 grid-cols-7 text-sm text-center bg-slate-600">
          <td>WP+50</td>
          <td>WIREPLUS</td>
          <td>Cable UTP Nivel 5e Cu70/30 Interno</td>
          <td>50</td>
          <td>.75</td>
          <td>{50 * 0.35}</td>
          <td>{CAM.tags}</td>
          <td>
            <Image src={CAM.images} alt="" width={60} height={60} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
