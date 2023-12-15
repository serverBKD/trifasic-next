"use client"
import { useState } from "react"

export default function FormKit() {
  const [NumKit, setNumKit] = useState(4)
  const [TradeMark, setTradeMark] = useState("hikvision")
  const [Storage, setStorage] = useState("500GB")
  const [Power, setPower] = useState("unit")
  const [Wire, setWire] = useState("50")
  let QueryOpt = {}
  return (
    <article>
      <form
          className="my-3 px-2 py-1 bg-slate-700"
              onSubmit={(e)=>
              {
                  e.preventDefault()
                  QueryOpt = {
                    numkit:`${+NumKit}`,
                    TradeMark: `${TradeMark}`,
                    Power:`${Power}`,
                    Storage:`${Storage}`,
                    Wire:`${+Wire}`
                  }
                  console.log(QueryOpt)}
            }
      >
        <div className="flex gap-3 justify-around">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="numKit">Combo</label>
            <input
              type="number"
              name="numKit"
              id="numKit"
              min={0}
              max={32}
              step={1}
              placeholder={8}
              onChange={(e) => setNumKit(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="marca">Marca</label>
            <select id="marca" onChange={(e) => setTradeMark(e.target.value)}>
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
            <select id="DD" onChange={(e) => setStorage(e.target.value)}>
              <optgroup>
                <option value="500GB">500GB</option>
                <option value="1TB">1TB</option>
                <option value="2TB">2TB</option>
                <option value="4TB">4TB</option>
              </optgroup>
            </select>
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="Power">Fuente de Poder</label>
            <select id="Power" onChange={(e) => setPower(e.target.value)}>
              <optgroup>
                <option value="unit">Individual</option>
                <option value="central">Centralizado</option>
              </optgroup>
            </select>
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="wire">Cableado</label>
            <select id="wire" onChange={(e) => setWire(e.target.value)}>
              <optgroup>
                <option value="50">50 mts</option>
                <option value="100">100 mts</option>
                <option value="305">305 mts</option>
              </optgroup>
            </select>
          </div>
              </div>
              <div><button type="submit" className="w-lg px-7 my-3 rounded-sm bg-sky-500">CONFIRMAR</button></div>
      </form>
    </article>
  )
}