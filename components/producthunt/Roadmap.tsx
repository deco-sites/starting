export interface Feature {
  status: "Live" | "Coming Soon";
  name: string[];
}

export interface Props {
  features?: Feature[];
}

export default function Roadmap({ features }: { features: Feature[] }) {
  return (
    <section className="bg-transparent relative z-10">
      <div className="container py-8 px-4 flex flex-col items-center justify-center lg:py-16 lg:px-16">
        <div>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex flex-col items-center self-start">
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
                <div>
                  {index !== features.length - 1 &&
                    (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="5"
                        height={feature.name.length * 48 + 16}
                        viewBox="0 0 5 1051"
                        fill="none"
                      >
                        <path
                          d="M2.5 2L2.50005 1049"
                          stroke={feature.status === "Live"
                            ? "#02F67C"
                            : "#DA8FFF"}
                          strokeWidth="8"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                </div>
              </div>
              <div
                class={`flex flex-col gap-4 self-start`}
              >
                {feature.status === "Live"
                  ? (
                    <div className="flex justify-center bg-green-500 text-base-content px-3 rounded-3xl w-fit">
                      Live
                    </div>
                  )
                  : (
                    <div className="flex justify-center bg-purple-500 text-base-content px-3 rounded-3xl w-fit">
                      Coming Soon
                    </div>
                  )}
                <ul className="flex flex-col text-white gap-1 list-disc">
                  {Array.isArray(feature.name)
                    ? (
                      feature.name.map((name, index) => (
                        <li key={index} className="ml-4">{name}</li>
                      ))
                    )
                    : <li className="ml-4">{feature.name}</li>}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}