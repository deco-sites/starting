export interface Props {
  mainText: string;
  name: string;
  email: string;
  position: string;
  linkedin: string;
  button: string;
}

export default function Delight({mainText, name, email, position, linkedin, button}: Props) {
  return (
    <section id="delight" class="px-3 py-16 md:px-[7rem] bg-[#02F67C] overflow-hidden">
      <div class="relative flex flex-col gap-8">
        <div class="relative h-64 md:hidden">
          <div
            class="absolute w-[227.23px] h-[548.01px] bottom-0 right-44"
            style="background: conic-gradient(from 116.67deg at 51.53% 25.66%, rgba(0, 255, 130, 0.6) 0deg, #00FF80 0.04deg, #243125 176.25deg, rgba(0, 255, 130, 0.6) 360deg), conic-gradient(from -90deg at 50% 50%, #FFFFFF 0deg, rgba(255, 255, 255, 0) 187.5deg, #FFFFFF 360deg); transform: matrix(0.71, -0.71, -0.71, -0.71, 0, 0);"
          >
          </div>
        </div>
        <div
          class="hidden md:block md:absolute md:w-[352.14px] md:h-[849.23px] md:z-0 md:right-[17rem] md:bottom-[-17rem]"
          style="background: conic-gradient(from 116.67deg at 51.53% 25.66%, rgba(0, 255, 130, 0.6) 0deg, #00FF80 0.04deg, #243125 176.25deg, rgba(0, 255, 130, 0.6) 360deg), conic-gradient(from -90deg at 50% 50%, #FFFFFF 0deg, rgba(255, 255, 255, 0) 187.5deg, #FFFFFF 360deg); transform: matrix(0.71, -0.71, -0.71, -0.71, 0, 0);"
        >
        </div>
        <p class="font-sans not-italic font-bold text-[#1F261F] text-5xl md:text-9xl z-10">
          {mainText}
        </p>
        <form class="flex flex-col md:w-1/2 gap-4 z-10">
          <input type="text" class="border-[1px] h-10 border-solid border-black bg-transparent font-inter font-normal not-italic focus:outline-none placeholder-[#161A16] pl-4" placeholder={name}/>
          <input type="email" class="border-[1px] h-10 border-solid border-black bg-transparent font-inter font-normal not-italic focus:outline-none placeholder-[#161A16] pl-4" placeholder={email}/>
          <input type="text" class="border-[1px] h-10 border-solid border-black bg-transparent font-inter font-normal not-italic focus:outline-none placeholder-[#161A16] pl-4" placeholder={position}/>
          <input type="text" class="border-[1px] h-10 border-solid border-black bg-transparent font-inter font-normal not-italic focus:outline-none placeholder-[#161A16] pl-4" placeholder={linkedin}/>
          <div class="bg-[#1F261F] rounded">
            <button type="submit" class="grid bg-[#1F261F] h-10 w-full items-center text-center text-white rounded font-inter font-normal not-italic text-[16px] leading-[19.36px] hover:bg-mytheme-10">
              {button}
            </button>
        </div>
        </form>
      </div>
    </section>
  );
}
