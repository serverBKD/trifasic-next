import ProductSec from "@/lib/ProductSeg.d"

export default function page() {
  const CAM = new ProductSec("Hikvision", "Hikvision", "Hikvision", "Hikvision", "Hikvision", "Hikvision", "Hikvision", "Hikvision", "Hikvision", "Hikvision", "Hikvision", "Hikvision")
  console.log(CAM)
  return (
    <section className="w-full h-screen bg-slate-800 flex flex-col justify-center items-center">
          <article className="px-2 py-5 text-center rounded-lg bg-slate-500">
              <h1>Cotiza tus Combos de Seguridad</h1>
              <form action="" className="my-3 px-2 py-1 bg-slate-700">
                <div className="flex gap-3 justify-around">
                      <div className="flex flex-col gap-y-2">
                          <label htmlFor="numKit">Combo</label>
                          <input type="number" name="numKit" id="numKit" min={0} max={32} step={1} placeholder={8}
                        />
                        </div>
                      <div className="flex flex-col gap-y-2">
                          <label htmlFor="marca">Marca</label>
                        <select id="marca">
                          <optgroup>
                              <option value="hikvision">HikVision</option>
                              <option value="dahua">Dahua</option>
                              <option value="samsung">Samsung</option>
                              <option value="bkd">BKD</option>
                          </optgroup>
                      </select>
                </div>
                <div className="flex flex-col gap-y-2">
                        <label htmlFor="DD">Almacenamiento</label>
                        <select id="DD">
                          <optgroup>
                              <option value="500GB">500GB</option>
                              <option value="1TB">1TB</option>
                              <option value="2TB">2TB</option>
                              <option value="4TB">4TB</option>
                          </optgroup>
                      </select>
                </div>
                      <div className="flex flex-col gap-y-2">
                          <label htmlFor="wire">Cableado</label>
                      <select>
                          <optgroup>
                              <option value="50mts">50mts</option>
                              <option value="100mts">100mts</option>
                              <option value="305mts">305mts</option>
                          </optgroup>
                      </select>
                      </div>                   
                </div>
              </form>
              <table className="w-[840px] my-3 px-3">
                  <thead>
                      <th className="grid grid-flow-col gap-1 grid-cols-7 bg-slate-900">
                          <td>Modelo</td>
                          <td>Marca</td>
                          <td>Description</td>
                          <td>Cant</td>
                          <td>Precio Unit</td>
                          <td>Total Unit</td>
                          <td>Nota</td>
                      </th>
                  </thead>
                        <tbody>
                            <tr className="grid grid-flow-col gap-1 grid-cols-7 text-sm text-center bg-slate-700">
                              <td>HKI-7208-HQHI</td>
                              <td>HikVision</td>
                              <td>XVR 8CH 2MP</td>
                              <td>1</td>
                              <td>$76</td>
                              <td>$76</td>
                              <td>500GB</td>
                            </tr>
                            <tr className="grid grid-flow-col gap-1 grid-cols-7 text-sm text-center bg-slate-700">
                              <td>DS-2CE16C0T-IRPF</td>
                              <td>HikVision</td>
                              <td>BULLET 4 EN 1 720P 2,8MM IP66 PLASTICA</td>
                              <td>1</td>
                              <td>$11</td>
                              <td>$11</td>
                              <td>Plástico Blanco</td>
                            </tr>
                      </tbody>
              </table>
            </article>
      </section>
  )
}