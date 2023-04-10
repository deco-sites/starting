
export interface listItem{
    title?: string;
    description?:string;
}

export interface Benefits{
    /** @description a short main title text*/
    mainTitle?: string;
    /** @description a short subtitle text*/
    description?: string;
    /** @description add a item to information list in contact page*/
    listItems:listItem[];
}

export interface Props{
    /** @description settings of benefits section in page*/
    infor?: Benefits;
}

export default function ContactUs ({infor}: Props){
    return (
        <div class="flex font-sans p-40">
            <div class="w-1/2 text-left">
                <h1 class="text-dark-green text-5xl leading-[53px]">{infor?.mainTitle}</h1>
                <h2 class="font-normal text-3xl text-dark-green opacity-50 pt-4 leading-9">{infor?.description}</h2>
                <ol start={1} type="1" class="flex flex-col gap-4 text-dark-green pt-10">
                    {
                        infor?.listItems?.map((item, index)=>{
                        return(
                                <li class=" w-full flex justify-items-start items-baseline gap-3">
                                    <span class="rounded-1/2 w-8 h-8 leading-8 text-center bg-primary">
                                        {index+1}
                                    </span>
                                    <div class="w-[90%] flex flex-col">
                                        <h3 class="text-[20px] font-medium">
                                            {item?.title}
                                        </h3>
                                        <p class="text-[16px]">
                                            {item?.description}
                                        </p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
            <div class="w-1/2 relative">
                <span class="w-[40px] h-full bg-primary"></span>
            </div>
        </div>
    )
}