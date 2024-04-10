export interface Feature {
  status: "Live" | "Coming Soon";
  name: string[];
}

export interface Props {
  features?: Feature[];
}

export default function Roadmap({ features }: { features: Feature[] }) {
  return (
    <section className="bg-black">
      <div className="container py-8 px-4 flex flex-col items-center justify-center lg:py-16 lg:px-16">
        <div>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-10">
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                >
                  <path
                    d="M13.5 25C19.6756 25 24.5 19.748 24.5 13.5C24.5 7.25199 19.6756 2 13.5 2C7.32436 2 2.5 7.25199 2.5 13.5C2.5 19.748 7.32436 25 13.5 25Z"
                    fill="none"
                    stroke={feature.status === "Live" ? "#02F67C" : "#DA8FFF"}
                    strokeWidth="4"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height={feature.name.length * 48 + 64}
                  viewBox="0 0 5 1051"
                  fill="none"
                >
                  <path
                    d="M2.5 2L2.50005 1049"
                    stroke={feature.status === "Live" ? "#02F67C" : "#DA8FFF"}
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div
                class={`flex flex-col gap-4 mb-[10%] mb-[${
                  10 + feature.name.length
                }%]`}
              >
                {feature.status === "Live"
                  ? (
                    <div className="flex justify-center bg-green-500 text-white p-3 rounded-[32px] w-[58px]">
                      Live
                    </div>
                  )
                  : (
                    <div className="flex justify-center bg-purple-500 text-white p-3 rounded-[32px] w-[136px]">
                      Coming Soon
                    </div>
                  )}
                <div className="flex flex-col bg-black text-white gap-2">
                  {Array.isArray(feature.name)
                    ? (
                      feature.name.map((name, index) => (
                        <div key={index}>{name}</div>
                      ))
                    )
                    : <div>{feature.name}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
