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
    currency: "USD",
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
      infrastructureCost.selectedInfrastructure || {
        total: 0,
        bandwidth: 0,
        request: 0,
      };
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
            deco.cx Price Calculator
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Configurations */}
          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-semibold mb-6">Configurations</h2>

            <div className="space-y-6">
              {/* Currency Selection */}
              {/* <div>
                <label className="block font-medium mb-2">Currency</label>
                <select
                  className={inputStyle}
                  value={inputs.currency}
                  onChange={(e) =>
                    setInputs({ ...inputs, currency: e.target.value })
                  }
                >
                  <option value="USD">USD ($)</option>
                </select>
              </div> */}

              <div>
                <label className="block font-medium mb-2">Moeda</label>
                <div className={inputStyle}>
                 USD ($)
                </div>
              </div>

              {/* Plans */}
              <div>
                <label className="block font-medium mb-2">Plans</label>
                <p className="text-sm text-gray-400 mb-2">
                  Not sure which one is for you? See the{" "}
                  <a href="#" className="text-emerald-400">
                    features included
                  </a>{" "}
                  in each plan.
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
                      No. of licenses - Builder
                    </label>
                    <p className="text-xs text-gray-400 mb-2">
                      Unrestricted access to develop and orchestrate
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
                      No. of licenses - Content Editor
                    </label>
                    <p className="text-xs text-gray-400 mb-2">
                      Access to edit content and use data
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

              <div className={`${inputs.plan === "enterprise" ? "hidden" : ""}`}>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    No. of licenses
                  </label>
                  <p className="text-xs text-gray-400 mb-2">
                    Access to all features of the Pro plan
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
                <label className="block font-medium mb-2">Infrastructure</label>
                <p className="text-sm text-gray-400 mb-2">
                  Choose between 100% managed infra or host projects yourself.
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
                  Expected monthly pageviews
                </label>
                <p className="text-sm text-gray-400 mb-2">
                  To calculate, multiply sessions by average pages visited per
                  session
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
                  Note: Although the cost is now calculated based on requests
                  and bandwidth consumption, we ask for the average monthly
                  pageviews because it is easier to estimate, especially for new
                  clients. We will use this number as a reference for
                  simulations and cost projections.
                </p>
              </div>

              {/* Support Packages */}
              <div>
                <label className="block font-medium mb-2">
                  Support Packages
                </label>
                <p className="text-sm text-gray-400 mb-2">
                  Not sure which one is for you? See the{" "}
                  <a href="#" className="text-emerald-400">
                    features included
                  </a>{" "}
                  in each package.
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
            <h2 className="text-2xl font-semibold mb-6">Estimated Costs</h2>

            <div className="space-y-4">
              {/* License Cost */}
              <div className="flex justify-between items-center">
                <span>Seat Licensing</span>
                <span className="text-emerald-400">
                  {formatToCurrency(estimatedCost.seats, inputs.currency)}
                </span>
              </div>

              {/* Infrastructure */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Infrastructure</span>
                  <div className={`${inputs.hosting === "self" ? "hidden" : ""}`}>
                    <span className="text-emerald-400">
                      {formatToCurrency(
                        estimatedCost.infrastructure.total,
                        inputs.currency
                      )}
                    </span>
                  </div>
                  <div className={`${inputs.hosting === "cloud" ? "hidden" : ""}`}>
                    <a
                      href="https://meetings.hubspot.com/leandro-borges/alinhamento-clientes-e-parceiros?uuid=444532e8-38a1-497f-96b1-7c7fb7753698"
                      target="_blank"
                      className="underline"
                    >
                      Talk to our sales team
                    </a>
                  </div>
                </div>

                <div className={`${inputs.hosting === "self" ? "hidden" : ""}`}>
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
                      <span>Efficient</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        checked={
                          inputs.infrastructure === "medium_efficiency"
                        }
                        onChange={() => {
                          setInputs({
                            ...inputs,
                            infrastructure: "medium_efficiency",
                          });
                          updateCosts();
                        }}
                        className="accent-emerald-400"
                      />
                      <span>Medium Efficiency</span>
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
                      <span>Not Optimized</span>
                    </label>
                  </div>

                  <div className="flex justify-between items-center pl-4">
                    <span className="text-sm">Bandwidth</span>
                    <span className="text-sm text-emerald-400">
                      {formatToCurrency(
                        estimatedCost.infrastructure.bandwidth,
                        inputs.currency
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between items-center pl-4">
                    <span className="text-sm">Requests</span>
                    <span className="text-sm text-emerald-400">
                      {formatToCurrency(
                        estimatedCost.infrastructure.request,
                        inputs.currency
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* Support */}
              <div className="flex justify-between items-center">
                <span>Support</span>
                <span className="text-emerald-400">
                  {formatToCurrency(estimatedCost.support, inputs.currency)}
                </span>
              </div>

              {/* Total Cost */}
              <div className="pt-4 border-t border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total Monthly Cost</span>
                  <span className="text-xl font-bold text-emerald-400">
                    {formatToCurrency(estimatedCost.total, inputs.currency)}
                  </span>
                </div>
              </div>
            </div>

            {/* Infrastructure Efficiency Scenarios */}
            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">
                Infrastructure Efficiency Scenarios
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span>Efficient</span>
                    <Tooltip
                      dataTip={
                        "Less bandwidth and requests per pageview. Requests/pageview = 7.0. Bandwidth/pageview = 0.3 GB"
                      }
                    >
                      <div className="relative inline-flex items-center">
                        <div className="w-4 h-4 rounded-full border border-gray-500">
                          <p className="text-xs text-gray-500">i</p>
                        </div>
                      </div>
                    </Tooltip>
                  </div>
                  <span className="text-emerald-400">
                    {formatToCurrency(
                      estimatedCost.efficiency.efficient,
                      inputs.currency
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span>Medium Efficiency</span>

                    <Tooltip
                      dataTip={
                        "More bandwidth and requests per pageview. Requests/pageview = 8.6. Bandwidth/pageview = 0.7 GB"
                      }
                    >
                      <div className="relative inline-flex items-center">
                        <div className="w-4 h-4 rounded-full border border-gray-500">
                          <p className="text-xs text-gray-500">i</p>
                        </div>
                      </div>
                    </Tooltip>
                  </div>
                  <span className="text-emerald-400">
                    {formatToCurrency(
                      estimatedCost.efficiency.medium_efficiency,
                      inputs.currency
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span>Not Optimized</span>
                    <Tooltip
                      dataTip={
                        "Even more bandwidth and requests per pageview. Requests/pageview = 10.1. Bandwidth/pageview = 1.0 GB"
                      }
                    >
                      <div className="relative inline-flex items-center">
                        <div className="w-4 h-4 rounded-full border border-gray-500">
                          <p className="text-xs text-gray-500">i</p>
                        </div>
                      </div>
                    </Tooltip>
                  </div>
                  <span className="text-emerald-400">
                    {formatToCurrency(
                      estimatedCost.efficiency.not_optimized,
                      inputs.currency
                    )}
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
      seats += builder_seats * 50;
    } else if (builder_seats > 50) {
      seats += 5000;
    } else if (builder_seats > 20) {
      seats += 3000;
    } else if (builder_seats > 10) {
      seats += 1400;
    } else if (builder_seats > 5) {
      seats += 800;
    } else if (builder_seats > 1) {
      seats += 450;
    } else if (builder_seats === 1) {
      seats += 100;
    }

    /// Content Editor
    if (content_editor_seats > 100) {
      seats += content_editor_seats * 25;
    } else if (content_editor_seats > 50) {
      seats += 2500;
    } else if (content_editor_seats > 20) {
      seats += 1500;
    } else if (content_editor_seats > 10) {
      seats += 700;
    } else if (content_editor_seats > 5) {
      seats += 400;
    } else if (content_editor_seats > 1) {
      seats += 225;
    } else if (content_editor_seats === 1) {
      seats += 50;
    }
  } else {
    if (general_seats > 100) {
      seats += 6 * general_seats;
    } else if (general_seats > 50) {
      seats += 600;
    } else if (general_seats > 20) {
      seats += 350;
    } else if (general_seats > 10) {
      seats += 160;
    } else if (general_seats > 5) {
      seats += 90;
    } else if (general_seats > 1) {
      seats += 50;
    } else if (general_seats === 1) {
      seats += 11;
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

  const selectedInfrastructure =
    hosting === "self"
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

  const bandwidth = pageviews * bandwidthCost * 0.001;
  const request = pageviews * requestCost * 0.00008;
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
      cost = 1000;
      break;
    case "enterprise":
      cost = 2000;
      break;
  }

  return cost;
}

function formatToCurrency(value: number, currency: string) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
