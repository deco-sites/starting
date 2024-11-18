import { useEffect, useState } from "preact/hooks";
import Tooltip from "site/components/camp/daisy/Tooltip.tsx";

interface INPUT {
  plan: string;
  hosting: string;
  builder_seats: number;
  content_editor_seats: number;
  general_seats: number;
  infrastructure: string;
  pageviews: number;
  support: string;
}

export default function PriceCalculatorIsland() {
  const [inputs, setInputs] = useState({
    currency: "BRL",
    plan: "enterprise",
    hosting: "cloud",
    builder_seats: 0,
    content_editor_seats: 0,
    general_seats: 0,
    infrastructure: "efficient",
    pageviews: 0,
    support: "free",
  });

  const [estimatedCost, setEstimatedCost] = useState({
    infrastructure: {
      total: 0,
      bandwidth: 0,
      request: 0,
    },
    efficiency: {
      not_optimized: 0,
      efficient: 0,
      medium_efficiency: 0,
    },
    seats: 0,
    support: 0,
    total: 0,
  });

  function updateCosts() {
    const infrastructureCost = calculateInfrastructure(inputs);
    const { total, bandwidth, request } =
      infrastructureCost.selectedInfrastructure ||
      { total: 0, bandwidth: 0, request: 0 };
    const seatsCost = calculateSeats(inputs);
    const supportCost = calculateSupport(inputs);

    const totalCost = seatsCost + total + supportCost;

    const updatedCost = {
      ...estimatedCost,
      infrastructure: {
        total,
        bandwidth,
        request,
      },
      efficiency: {
        not_optimized:
          infrastructureCost.otherInfrastructures.not_optimized.total,
        efficient: infrastructureCost.otherInfrastructures.efficient.total,
        medium_efficiency:
          infrastructureCost.otherInfrastructures.medium_efficiency.total,
      },
      seats: seatsCost,
      support: supportCost,
      total: totalCost,
    };
    setEstimatedCost(updatedCost);
  }

  useEffect(() => {
    updateCosts();
  }, [inputs]);

  // Reusable input style
  const inputStyle =
    "w-full bg-black border border-gray-700 rounded-md p-2 text-white focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400";

  return (
    <div className="bg-black text-white min-h-screen p-8 pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="bg-black w-full mb-8">
          <h1
            className="text-2xl sm:text-2xl md:text-3xl font-mono text-[#02F67C] tracking-wider text-center"
            style={{
              textShadow: "0 0 10px rgba(2, 246, 124, 0.5)",
              fontFamily: "'Argent Pixel', monospace",
              letterSpacing: "0.1em",
            }}
          >
            Calculadora de preços deco.cx
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Configurations */}
          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-semibold mb-6">Configurações</h2>

            <div className="space-y-6">
              {/* Currency Selection */}
              {/* <div>
                <label className="block font-medium mb-2">Moeda</label>
                <select
                  className={inputStyle}
                  value={inputs.currency}
                  onChange={(e) =>
                    setInputs({ ...inputs, currency: e.target.value })}
                >
                  <option value="BRL">BRL (R$)</option>
                </select>
              </div> */}

              <div>
                <label className="block font-medium mb-2">Moeda</label>
                <div className={inputStyle}>
                  BRL (R$)
                </div>
              </div>

              {/* Plans */}
              <div>
                <label className="block font-medium mb-2">Planos</label>
                <p className="text-sm text-gray-400 mb-2">
                  Não sabe qual é para você? Veja os{" "}
                  <a href="#" className="text-emerald-400">
                    recursos incluídos
                  </a>{" "}
                  em cada plano.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    className={`p-3 rounded-md border ${
                      inputs.plan === "enterprise"
                        ? "border-emerald-400 bg-emerald-400/10"
                        : "border-gray-700"
                    }`}
                    onClick={() => {
                      setInputs({ ...inputs, plan: "enterprise" });
                      updateCosts();
                    }}
                  >
                    Enterprise
                  </button>
                  <button
                    className={`p-3 rounded-md border ${
                      inputs.plan === "pro"
                        ? "border-emerald-400 bg-emerald-400/10"
                        : "border-gray-700"
                    }`}
                    onClick={() => {
                      setInputs({ ...inputs, plan: "pro" });
                      updateCosts();
                    }}
                  >
                    Pro
                  </button>
                </div>
              </div>

              <div
                className={`${
                  inputs.plan === "pro" ? "hidden" : ""
                } flex space-x-4`}
              >
                {/* License Inputs */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      No. de licenças - Builder
                    </label>
                    <p className="text-xs text-gray-400 mb-2">
                      Acesso irrestrito para desenvolver e orquestrar
                    </p>
                    <input
                      type="number"
                      value={inputs.builder_seats}
                      className={inputStyle}
                      onChange={(value) => {
                        setInputs({
                          ...inputs,
                          builder_seats: value.currentTarget.valueAsNumber,
                        });
                        updateCosts();
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      No. de licenças - Content Editor
                    </label>
                    <p className="text-xs text-gray-400 mb-2">
                      Acesso para editar conteúdos e utilizar dados
                    </p>
                    <input
                      type="number"
                      value={inputs.content_editor_seats}
                      className={inputStyle}
                      onChange={(event) => {
                        setInputs({
                          ...inputs,
                          content_editor_seats:
                            event.currentTarget.valueAsNumber,
                        });
                        updateCosts();
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                className={`${inputs.plan === "enterprise" ? "hidden" : ""}`}
              >
                <div>
                  <label className="block text-sm font-medium mb-1">
                    No. de licenças
                  </label>
                  <p className="text-xs text-gray-400 mb-2">
                    Acesso a todos os recursos do plano Pro
                  </p>
                  <input
                    type="number"
                    value={inputs.general_seats}
                    className={inputStyle}
                    onChange={(event) => {
                      setInputs({
                        ...inputs,
                        general_seats: event.currentTarget.valueAsNumber,
                      });
                      updateCosts();
                    }}
                  />
                </div>
              </div>

              {/* Infrastructure */}
              <div>
                <label className="block font-medium mb-2">Infraestrutura</label>
                <p className="text-sm text-gray-400 mb-2">
                  Escolha entre infra 100% gerenciada ou hospede projetos você
                  mesmo.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    className={`p-3 rounded-md border ${
                      inputs.hosting === "cloud"
                        ? "border-emerald-400 bg-emerald-400/10"
                        : "border-gray-700"
                    }`}
                    onClick={() => {
                      setInputs({ ...inputs, hosting: "cloud" });
                      updateCosts();
                    }}
                    defaultChecked
                  >
                    deco Cloud
                  </button>
                  <button
                    className={`p-3 rounded-md border ${
                      inputs.hosting === "self"
                        ? "border-emerald-400 bg-emerald-400/10"
                        : "border-gray-700"
                    }`}
                    onClick={() => {
                      setInputs({ ...inputs, hosting: "self" });
                      updateCosts();
                    }}
                  >
                    Self-Hosting
                  </button>
                </div>
              </div>

              {/* Pageviews */}
              <div>
                <label className="block font-medium mb-2">
                  Pageviews mensais esperados
                </label>
                <p className="text-sm text-gray-400 mb-2">
                  Para calcular multiplique sessões por média de páginas
                  visitadas / sessão
                </p>
                <input
                  type="number"
                  value={inputs.pageviews}
                  className={inputStyle}
                  onChange={(event) => {
                    setInputs({
                      ...inputs,
                      pageviews: event.currentTarget.valueAsNumber,
                    });
                    updateCosts();
                  }}
                />
                <p className="text-xs text-gray-400 mt-2 italic">
                  Nota: Embora o custo agora seja calculado com base em
                  requisições e consumo de banda, pedimos a média de pageviews
                  mensais porque é mais fácil de estimar, especialmente para
                  novos clientes. Usaremos esse número como uma referência para
                  simulações e projeções de custos.
                </p>
              </div>

              {/* Support Packages */}
              <div>
                <label className="block font-medium mb-2">
                  Pacotes de suporte
                </label>
                <p className="text-sm text-gray-400 mb-2">
                  Não sabe qual é para você? Veja os{" "}
                  <a href="#" className="text-emerald-400">
                    recursos incluídos
                  </a>{" "}
                  em cada pacote.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <button
                    className={`p-3 rounded-md border ${
                      inputs.support === "free"
                        ? "border-emerald-400 bg-emerald-400/10"
                        : "border-gray-700"
                    }`}
                    onClick={() => {
                      setInputs({ ...inputs, support: "free" });
                      updateCosts();
                    }}
                  >
                    Free
                  </button>
                  <button
                    className={`p-3 rounded-md border ${
                      inputs.support === "premium"
                        ? "border-emerald-400 bg-emerald-400/10"
                        : "border-gray-700"
                    }`}
                    onClick={() => {
                      setInputs({ ...inputs, support: "premium" });
                      updateCosts();
                    }}
                  >
                    Premium
                  </button>
                  <button
                    className={`p-3 rounded-md border ${
                      inputs.support === "enterprise"
                        ? "border-emerald-400 bg-emerald-400/10"
                        : "border-gray-700"
                    }`}
                    onClick={() => {
                      setInputs({ ...inputs, support: "enterprise" });
                      updateCosts();
                    }}
                  >
                    Enterprise
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Estimated Costs */}
          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-semibold mb-6">Custos estimados</h2>

            <div className="space-y-4">
              {/* License Cost */}
              <div className="flex justify-between items-center">
                <span>Licenciamento de seats</span>
                <span className="text-emerald-400">
                  {formatToReal(estimatedCost.seats)}
                </span>
              </div>

              {/* Infrastructure */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Infraestrutura</span>
                  <div
                    className={`${inputs.hosting === "self" ? "hidden" : ""}`}
                  >
                    <span className="text-emerald-400">
                      {formatToReal(estimatedCost.infrastructure.total)}
                    </span>
                  </div>
                  <div
                    className={`${inputs.hosting === "cloud" ? "hidden" : ""}`}
                  >
                    <a
                      href="https://meetings.hubspot.com/leandro-borges/alinhamento-clientes-e-parceiros?uuid=444532e8-38a1-497f-96b1-7c7fb7753698"
                      target= "_blank"
                      className="underline"
                    >
                      Fale com o nosso time de vendas
                    </a>
                  </div>
                </div>

                <div
                  className={`${inputs.hosting === "self" ? "hidden" : ""}`}
                >
                  <div className="justify-center pl-16 py-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        checked={inputs.infrastructure === "efficient"}
                        onChange={() => {
                          setInputs({
                            ...inputs,
                            infrastructure: "efficient",
                          });
                          updateCosts();
                        }}
                        className="accent-emerald-400"
                      />
                      <span>Eficiente</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        checked={inputs.infrastructure === "medium_efficiency"}
                        onChange={() => {
                          setInputs({
                            ...inputs,
                            infrastructure: "medium_efficiency",
                          });
                          updateCosts();
                        }}
                        className="accent-emerald-400"
                      />
                      <span>Eficiência média</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        checked={inputs.infrastructure === "not_optimized"}
                        onChange={() => {
                          setInputs({
                            ...inputs,
                            infrastructure: "not_optimized",
                          });
                          updateCosts();
                        }}
                        className="accent-emerald-400"
                      />
                      <span>Não otimizado</span>
                    </label>
                  </div>

                  <div className="flex justify-between items-center pl-4">
                    <span className="text-sm">Banda</span>
                    <span className="text-sm text-emerald-400">
                      {formatToReal(estimatedCost.infrastructure.bandwidth)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center pl-4">
                    <span className="text-sm">Request</span>
                    <span className="text-sm text-emerald-400">
                      {formatToReal(estimatedCost.infrastructure.request)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Support */}
              <div className="flex justify-between items-center">
                <span>Suporte</span>
                <span className="text-emerald-400">
                  {formatToReal(estimatedCost.support)}
                </span>
              </div>

              {/* Total Cost */}
              <div className="pt-4 border-t border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Custo Mensal Total</span>
                  <span className="text-xl font-bold text-emerald-400">
                    {formatToReal(estimatedCost.total)}
                  </span>
                </div>
              </div>
            </div>

            {/* Infrastructure Efficiency Scenarios */}
            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">
                Cenários de eficiência da infraestrutura
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span>Eficiente</span>
                    <Tooltip
                      dataTip={"Menos banda e requisições por pageview. Requisições / pageview = 7,0. Banda / pageview = 0,3 GB"}
                    >
                      <div class="relative inline-flex items-center">
                        <div class="w-4 h-4 rounded-full border border-gray-500">
                          <p class="text-xs text-gray-500">i</p>
                        </div>
                      </div>
                    </Tooltip>
                  </div>
                  <span className="text-emerald-400">
                    {formatToReal(estimatedCost.efficiency.efficient)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span>Eficiência média</span>

                    <Tooltip
                      dataTip={"Mais banda e requisições por pageview. Requisições / pageview = 8,6. Banda / pageview = 0,7 GB"}
                    >
                      <div class="relative inline-flex items-center">
                        <div class="w-4 h-4 rounded-full border border-gray-500">
                          <p class="text-xs text-gray-500">i</p>
                        </div>
                      </div>
                    </Tooltip>
                  </div>
                  <span className="text-emerald-400">
                    {formatToReal(estimatedCost.efficiency.medium_efficiency)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span>Não otimizado</span>
                    <Tooltip
                      dataTip={"Ainda mais banda e requisições por pageview. Requisições / pageview = 10,1. Banda / pageview = 1,0 GB"}
                    >
                      <div class="relative inline-flex items-center">
                        <div class="w-4 h-4 rounded-full border border-gray-500">
                          <p class="text-xs text-gray-500">i</p>
                        </div>
                      </div>
                    </Tooltip>
                  </div>
                  <span className="text-emerald-400">
                    {formatToReal(estimatedCost.efficiency.not_optimized)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const EFFICIENTY_COSTS = {
  not_optimized: {
    bandwidth: 1.0405,
    request: 10.119375,
  },
  medium_efficiency: {
    bandwidth: 0.7,
    request: 8.601192,
  },
  efficient: {
    bandwidth: 0.25,
    request: 6.977226,
  },
};

function calculateSeats(inputs: INPUT) {
  const { plan, builder_seats, content_editor_seats, general_seats } = inputs;

  let seats = 0;

  if (plan === "enterprise") {
    /// Builder
    if (builder_seats > 100) {
      seats += builder_seats * 250;
    } else if (builder_seats > 50) {
      seats += 25000;
    } else if (builder_seats > 20) {
      seats += 15000;
    } else if (builder_seats > 10) {
      seats += 7000;
    } else if (builder_seats > 5) {
      seats += 4000;
    } else if (builder_seats > 1) {
      seats += 2250;
    } else if (builder_seats === 1) {
      seats += 500;
    }

    /// Content Editor
    if (content_editor_seats > 100) {
      seats += content_editor_seats * 125;
    } else if (content_editor_seats > 50) {
      seats += 12500;
    } else if (content_editor_seats > 20) {
      seats += 7500;
    } else if (content_editor_seats > 10) {
      seats += 3500;
    } else if (content_editor_seats > 5) {
      seats += 2000;
    } else if (content_editor_seats > 1) {
      seats += 1125;
    } else if (content_editor_seats === 1) {
      seats += 250;
    }
  } else {
    if (general_seats > 100) {
      seats += 30 * general_seats;
    } else if (general_seats > 50) {
      seats += 3000;
    } else if (general_seats > 20) {
      seats += 1750;
    } else if (general_seats > 10) {
      seats += 800;
    } else if (general_seats > 5) {
      seats += 450;
    } else if (general_seats > 1) {
      seats += 250;
    } else if (general_seats === 1) {
      seats += 55;
    }
  }

  return seats;
}

function calculateInfrastructure(inputs: INPUT) {
  let { pageviews, infrastructure, hosting } = inputs;

  if (isNaN(pageviews)) {
    pageviews = 0;
  }

  const result = {
    not_optimized: calculateScenario(pageviews, "not_optimized"),
    medium_efficiency: calculateScenario(pageviews, "medium_efficiency"),
    efficient: calculateScenario(pageviews, "efficient"),
  };

  const selectedInfrastructure = (hosting === "self")
    ? { total: 0, bandwidth: 0, request: 0 }
    : result[infrastructure];

  return {
    selectedInfrastructure,
    otherInfrastructures: result,
  };
}

function calculateScenario(pageviews: number, infrastructureType: string) {
  const { bandwidth: bandwidthCost, request: requestCost } =
    EFFICIENTY_COSTS[infrastructureType];

  const bandwidth = pageviews * bandwidthCost * 0.005;
  const request = pageviews * requestCost * 0.0004;
  const total = bandwidth + request;

  return { total, bandwidth, request };
}

function calculateSupport(input: INPUT) {
  const support = input.support;

  let cost = 0;

  switch (support) {
    case "free":
      cost = 0;
      break;
    case "premium":
      cost = 5000;
      break;
    case "enterprise":
      cost = 10000;
      break;
  }

  return cost;
}

function formatToReal(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
