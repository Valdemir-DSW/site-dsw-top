"use client";

import { useState } from "react";

export const ContentCalculadoraTorque = () => {
  const [selectedTab, setSelectedTab] = useState<string>("torque");

  const [torqueMotora, setTorqueMotora] = useState<number>(0);
  const [relacaoMotora, setRelacaoMotora] = useState<number>(1);
  const [relacaoMovida, setRelacaoMovida] = useState<number>(1);
  const [torqueMovida, setTorqueMovida] = useState<number>(0);

  const [valor, setValor] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<string>("Nm");
  const [toUnit, setToUnit] = useState<string>("Nm");
  const [resultadoConversao, setResultadoConversao] = useState<number>(0);

  const [rpmMotora, setRpmMotora] = useState<number>(0);
  const [rpmMovida, setRpmMovida] = useState<number>(0);

  const [voltage, setVoltage] = useState<number>(0);
  const [power, setPower] = useState<number>(0);
  const [current, setCurrent] = useState<number>(0);
  const [withMargin, setWithMargin] = useState<boolean>(false);
  
  const [diametroMotora, setDiametroMotora] = useState<number>(0);
  const [diametroMovida, setDiametroMovida] = useState<number>(0);
  const [distanciaEixos, setDistanciaEixos] = useState<number>(0);
  const [comprimentoCorreia, setComprimentoCorreia] = useState<number>(0);
  const [unidade, setUnidade] = useState<string>("mm");

  const calcularTorque = () => {
    const torque = torqueMotora * (relacaoMovida / relacaoMotora);
    const torqueFinal = torque - 0.074 * torque;
    setTorqueMovida(parseFloat(torqueFinal.toFixed(2)));
  };

  const calcularConversao = () => {
    let resultado = 0;
    if (fromUnit === "Nm" && toUnit === "kgfm") {
      resultado = valor * 0.10197;
    } else if (fromUnit === "Nm" && toUnit === "kgfcm") {
      resultado = valor * 10.197;
    } else if (fromUnit === "Nm" && toUnit === "Ncm") {
      resultado = valor * 100;
    } else if (fromUnit === "kgfm" && toUnit === "Nm") {
      resultado = valor * 9.80665;
    } else if (fromUnit === "kgfm" && toUnit === "kgfcm") {
      resultado = valor * 1000;
    } else if (fromUnit === "kgfm" && toUnit === "Ncm") {
      resultado = valor * 980.665;
    } else if (fromUnit === "kgfcm" && toUnit === "Nm") {
      resultado = valor * 0.09807;
    } else if (fromUnit === "kgfcm" && toUnit === "kgfm") {
      resultado = valor * 0.001;
    } else if (fromUnit === "kgfcm" && toUnit === "Ncm") {
      resultado = valor * 10;
    } else if (fromUnit === "Ncm" && toUnit === "Nm") {
      resultado = valor * 0.01;
    } else if (fromUnit === "Ncm" && toUnit === "kgfm") {
      resultado = valor * 0.00102;
    } else if (fromUnit === "Ncm" && toUnit === "kgfcm") {
      resultado = valor * 0.1;
    } else {
      resultado = valor;
    }
    setResultadoConversao(parseFloat(resultado.toFixed(2)));
  };

  const calcularRpm = () => {
    const rpm = (rpmMotora * relacaoMotora) / relacaoMovida;
    setRpmMovida(parseFloat(rpm.toFixed(2)));
  };

  const calcularCorrente = () => {
    let corrente = power / voltage;
    if (withMargin) {
      corrente += 6.4;
    }
    setCurrent(parseFloat(corrente.toFixed(2)));
  };
const calcularComprimentoCorreia = () => {
  if (distanciaEixos > 0 && diametroMotora > 0 && diametroMovida > 0) {
    const C = distanciaEixos;
    const D1 = diametroMotora;
    const D2 = diametroMovida;

    const L = 2 * C + (Math.PI / 2) * (D1 + D2) + Math.pow(D2 - D1, 2) / (4 * C);
    
    setComprimentoCorreia(parseFloat(L.toFixed(2)));
  }
};

  const getActionButton = () => {
    switch (selectedTab) {
      case "torque":
        return (
          <button
            onClick={calcularTorque}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Calcular
          </button>
        );
      case "conversao":
        return (
          <button
            onClick={calcularConversao}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Converter
          </button>
        );
      case "rpm":
        return (
          <button
            onClick={calcularRpm}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Calcular
          </button>
        );
      case "corrente":
        return (
          <button
            onClick={calcularCorrente}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Calcular
          </button>
        );
      default:
        return null;
    }
  };

return (
  <div className="flex justify-center mt-16 lg:mt-36 mx-5">
    <div className="max-w-4xl w-full rounded-lg shadow-lg lg:p-6">
      <div className="flex justify-between border-b border-zinc-600 pb-4 mb-6">
        <div className="flex gap-2 lg:gap-5">
          <button
            onClick={() => setSelectedTab("torque")}
            className={`text-lg ${
              selectedTab === "torque"
                ? "font-semibold text-red-600"
                : "text-gray-600"
            } hover:text-red-600 text-base lg:text-xl`}
          >
            Torque
          </button>
          <button
            onClick={() => setSelectedTab("conversao")}
            className={`text-lg ${
              selectedTab === "conversao"
                ? "font-semibold text-red-600"
                : "text-gray-600"
            } hover:text-red-600 text-base lg:text-xl`}
          >
            Conversão
          </button>
          <button
            onClick={() => setSelectedTab("rpm")}
            className={`text-lg ${
              selectedTab === "rpm"
                ? "font-semibold text-red-600"
                : "text-gray-600"
            } hover:text-red-600 text-base lg:text-xl`}
          >
            RPM
          </button>
          <button
            onClick={() => setSelectedTab("corrente")}
            className={`text-lg ${
              selectedTab === "corrente"
                ? "font-semibold text-red-600"
                : "text-gray-600"
            } hover:text-red-600 text-base lg:text-xl`}
          >
            Corrente
          </button>
          <button
            onClick={() => setSelectedTab("correia")}
            className={`text-lg ${
              selectedTab === "correia"
                ? "font-semibold text-red-600"
                : "text-gray-600"
            } hover:text-red-600 text-base lg:text-xl`}
          >
            Correia
          </button>
        </div>
        {getActionButton()}
      </div>

      {selectedTab === "torque" && (
        <div>
          <h2 className="text-xl font-semibold mb-5">
            Torque na Polia Movida
          </h2>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h3>Polia Motora (Nm):</h3>
              <input
                type="number"
                value={torqueMotora}
                onChange={(e) => setTorqueMotora(Number(e.target.value))}
                placeholder="Torque na Polia Motora (Nm)"
                className="w-full p-2 mb-2 border border-zinc-600 rounded bg-[--background]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3>Relação das Polias Motora:</h3>
              <input
                type="number"
                value={relacaoMotora}
                onChange={(e) => setRelacaoMotora(Number(e.target.value))}
                placeholder="Relação Motora"
                className="w-full p-2 mb-2 border border-zinc-600 rounded bg-[--background]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3>Relação das Polias Movida:</h3>
              <input
                type="number"
                value={relacaoMovida}
                onChange={(e) => setRelacaoMovida(Number(e.target.value))}
                placeholder="Relação Movida"
                className="w-full p-2 mb-2 border border-zinc-600 rounded bg-[--background]"
              />
            </div>
          </div>
          <p className="text-lg mt-4">Torque Movida: {torqueMovida} Nm</p>
        </div>
      )}

      {selectedTab === "conversao" && (
        <div>
          <h2 className="text-xl font-semibold mb-5">Conversão de Torque</h2>
          <div className="flex flex-col gap-5">
            <input
              type="number"
              value={valor}
              onChange={(e) => setValor(Number(e.target.value))}
              placeholder="Valor"
              className="w-full p-2 mb-2 border border-zinc-600 rounded bg-[--background]"
            />
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-full p-2 mb-2 border border-zinc-600 rounded bg-[--background]"
            >
              <option value="Nm">Nm</option>
              <option value="kgfm">kgfm</option>
              <option value="kgfcm">kgf-cm</option>
              <option value="Ncm">Ncm</option>
            </select>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full p-2 mb-2 border border-zinc-600 rounded bg-[--background]"
            >
              <option value="Nm">Nm</option>
              <option value="kgfm">kgfm</option>
              <option value="kgfcm">kgf-cm</option>
              <option value="Ncm">Ncm</option>
            </select>
          </div>
          <p className="text-lg mt-4">Resultado: {resultadoConversao}</p>
        </div>
      )}

      {selectedTab === "correia" && (
        <div>
          <h2 className="text-xl font-semibold mb-5">
            Cálculo do Comprimento da Correia
          </h2>
          <div className="flex flex-col gap-5">
            <input
              type="number"
              value={diametroMotora}
              onChange={(e) => setDiametroMotora(Number(e.target.value))}
              placeholder="Diâmetro da Polia Motora"
              className="w-full p-2 mb-2 border border-zinc-600 rounded bg-[--background]"
            />
            <input
              type="number"
              value={diametroMovida}
              onChange={(e) => setDiametroMovida(Number(e.target.value))}
              placeholder="Diâmetro da Polia Movida"
              className="w-full p-2 mb-2 border border-zinc-600 rounded bg-[--background]"
            />
            <input
              type="number"
              value={distanciaEixos}
              onChange={(e) => setDistanciaEixos(Number(e.target.value))}
              placeholder="Distância entre eixos"
              className="w-full p-2 mb-2 border border-zinc-600 rounded bg-[--background]"
            />
            <select
              value={unidade}
              onChange={(e) => setUnidade(e.target.value)}
              className="w-full p-2 mb-2 border border-zinc-600 rounded bg-[--background]"
            >
              <option value="mm">Milímetros (mm)</option>
              <option value="cm">Centímetros (cm)</option>
              <option value="m">Metros (m)</option>
            </select>
          </div>
          <p className="text-lg mt-4">
            Comprimento da Correia: {comprimentoCorreia} {unidade}
          </p>
          <button
            onClick={calcularComprimentoCorreia}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 mt-4"
          >
            Calcular
          </button>
        </div>
      )}
    </div>
  </div>
);

        )}
      </div>
    </div>
  );
};
