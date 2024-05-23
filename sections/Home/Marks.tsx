export interface Mark {
    /**
     * @format rich-text
     * @default Click here to tweak this text however you want.
     */  
    title: string;
    /**
     * @format rich-text
     * @default Click here to tweak this text however you want.
     */  
    description: string;
}

export interface Props {
    /**
     * @format rich-text
     * @default Click here to tweak this text however you want.
     */   
    title?: string;
    marks?: Mark[];
}

export default function Marks({
    title = "Results don't have to be explained",
    marks = [
        {
            title: '6X',
            description: 'faster PageSpeed on average after migration'
        },
        {
            title: '+3k',
            description: 'developers & designer in our Discord community'
        },
        {
            title: '+400',
            description: 'starts on GitHub — check it out!'
        }
    ]
}: Props) {
  return (
    <div class="lg:mx-auto lg:max-w-[1440px] relative z-10 px-4 py-14 lg:py-40 lg:px-0 flex flex-col gap-24 justify-center items-center">
        {
            title &&
            <h2 class="font-albert-sans text-3xl lg:text-5xl font-medium text-white text-center" dangerouslySetInnerHTML={{
                __html: title
            }}></h2>
        }
        <div class="flex flex-col lg:flex-row gap-8 w-full">
            {
                marks.map(mark => (
                  <div class="flex flex-col gap-4 flex-1">
                        <h3 class="font-albert-sans text-[80px] text-center lg:text-left font-medium text-white" dangerouslySetInnerHTML={{
                            __html: mark.title 
                        }}></h3>
                        <hr />
                        <div  class="font-albert-sans text-base text-center lg:text-left text-white" dangerouslySetInnerHTML={{
                            __html: mark.description
                        }}/>
                    </div>
                ))
            }
        </div>
    </div>
  );
}
