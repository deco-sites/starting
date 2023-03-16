export interface Props {
  mainText: string;
  name: string;
  email: string;
  position: string;
  linkedin: string;
  button: string;
  form: {method: 'get' | 'post'; action: string}
}

export default function Delight({mainText, name, email, position, linkedin, button, form}: Props) {
  return (
    <section id="delight" class="bg-[#02F67C]">
      <div class="relative flex flex-col gap-8 px-3 py-16 md:px-[7rem] overflow-hidden max-w-screen-2xl m-auto">
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
        <form action={form.action} method={form.method} class="flex flex-col md:w-1/2 gap-4 z-10">
          <input type="text" name="text" class="border-[1px] h-10 border-solid border-black bg-transparent font-inter font-normal not-italic focus:outline-none placeholder-[#161A16] pl-4" placeholder={name} required/>
          <input type="email" name="email" class="border-[1px] h-10 border-solid border-black bg-transparent font-inter font-normal not-italic focus:outline-none placeholder-[#161A16] pl-4" placeholder={email} required/>
          <input type="text" name="position" class="border-[1px] h-10 border-solid border-black bg-transparent font-inter font-normal not-italic focus:outline-none placeholder-[#161A16] pl-4" placeholder={position} required/>
          <input type="text" name="linkedin" class="border-[1px] h-10 border-solid border-black bg-transparent font-inter font-normal not-italic focus:outline-none placeholder-[#161A16] pl-4" placeholder={linkedin} required/>
          <div class="bg-[#1F261F] rounded">
            <button type="submit" class="grid bg-[#1F261F] h-10 w-full items-center text-center text-[#F3FFF9] rounded font-inter font-normal not-italic text-[16px] leading-[19.36px] hover:bg-mytheme-10">
              {button}
            </button>
        </div>
        </form>
      </div>
    </section>
  );
}
