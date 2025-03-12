interface GridItem {
  prefix?: string;
  value: string;
  suffix?: string;
  description: string;
  link?: {
    text: string;
    url: string;
  };
}

interface NewGridProps {
  tag: string;
  title: string;
  items: GridItem[];
}

export default function NewGrid({ tag, title, items }: NewGridProps) {
  return (
    <section className="overflow-hidden mx-auto lg:max-w-[1440px] md:px-16">
      <div className="max-w-container mx-auto pt-16">
        <div className="flex flex-col gap-6 mb-16 text-center">
        <div class="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full border border-[#333737] mx-auto">
            <div class="w-2 h-2 bg-secondary rounded-full"></div>
            <span class="text-[#a1acaa] text-sm">{tag}</span>
          </div>
          <h2 className="text-4xl md:text-6xl text-white leading-tight">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 border-y border-[#333737] relative bg-black z-10">
          {items.map((item, index) => (
            <div key={index} className={`p-20 border-b lg:border-b-0 border-[#333737] ${index !== items.length - 1 && "lg:border-r"}`}>
              <div className="flex items-baseline mb-4">
                {item.prefix && <span className="text-secondary text-5xl">{item.prefix}</span>}
                <span className="text-white text-5xl">{item.value}</span>
                {item.suffix && <span className="text-secondary text-5xl">{item.suffix}</span>}
              </div>
              <p className="text-white text-lg">
                {item.link ? (
                  <>
                    {item.description.split(item.link.text)[0]}
                    <a href={item.link.url} className="text-secondary hover:underline">
                      {item.link.text}
                    </a>
                    {item.description.split(item.link.text)[1]}
                  </>
                ) : (
                  item.description
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
