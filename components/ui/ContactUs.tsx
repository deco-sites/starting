import ButtonSwitcherForms,{ButtonSwitcherFormsProps,selectedUrlToActionProps} from "deco-sites/starting/components/ui/ButtonSwitcherForms.tsx";

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
    switcherButtonConfigs:ButtonSwitcherFormsProps;
    /** @description settings of benefits section in page*/
    infor?: Benefits;

    formInfor:{
        formTitle: string;
        PlaceholderfieldName: string;
        PlaceholderfieldEmail: string;
        PlaceholderfieldPosition: string;
        PlaceholderfieldSocial: string;
        PlaceholderFieldExtra: string;
        submiteName: string
    }
}

export default function ContactUs ({infor,formInfor}:Props){
    return (
        <div class="flex flex-col font-sans p-6 pt-[103px] pb-10 xl:p-40 gap-y-10 overflow-x-hidden xl:(flex-row gap-x-[120px])">
            <div class="w-full text-left xl:w-1/2 ">
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
            <div class="w-full xl:w-1/2 relative max-w-[443px]">
                {/* <div class="w-[352px] h-[180vh] bg-contact-us-bg-gradient absolute -rotate-[35deg] -z-10 left-[300px] -top-[120px] overflow-y-hidden"></div> */}
                {/* <ButtonSwitcherForms
                  switcherButton1={contactProps.switcherButtonConfigs.switchB1.name}
                  switcherButton2

                /> */}
                <form class="flex flex-col bg-white border-1 border-dark-green rounded-2xl p-8 gap-6 placeholder-[#161A16] " action={"/"}>
                    <span class="text-[20px]">{formInfor?.formTitle || "Ready to delight your customers?"}</span>
                    <input class="h-[51px] border-1 border-dark-green p-4" 
                        type="text" 
                        placeholder={formInfor?.PlaceholderfieldName || "Name"}
                        required
                    />
                    <input class="h-[51px] border-1 border-dark-green p-4" 
                        type="email" 
                        placeholder={formInfor?.PlaceholderfieldEmail ||"Work e-mail"}
                        required
                    />
                    <input class="h-[51px] border-1 border-dark-green p-4" 
                        type="text" 
                        placeholder={formInfor?.PlaceholderfieldPosition ||"Position"}
                        required
                    />
                    <input class="h-[51px] border-1 border-dark-green p-4" 
                        type="text" 
                        placeholder={formInfor?.PlaceholderfieldSocial ||"Linkdin"}  
                    />
                    <input class="h-[51px] border-1 border-dark-green p-4" 
                        type="text" 
                        placeholder={formInfor?.PlaceholderFieldExtra ||"Anything you would like to add? (optional)"} 
                    />
                    <input class="h-[51px] bg-dark-green text-white rounded-[4px] cursor-pointer" 
                        type="submit" 
                        value={formInfor?.submiteName || "Schedule a demo"} 
                    />
                </form>
            </div>
        </div>
    )
}