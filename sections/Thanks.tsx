export interface Props {
    title?: string;
    message?: string;
    buttonText?: string;
    homeLink?: string;
  }
  
export default function Thanks({
    title = 'We have received your contact!',
    message = 'Thank you for your interest in deco.cx. We will be in touch by email shortly.',
    buttonText = 'Back to home page',
    homeLink = '/en',
}: Props) {
    return (
        <div class="container mx-auto h-[600px] flex flex-col items-center justify-center text-center pt-10 px-10">
            <h1 class="text-dark-green text-5xl leading-[1.1] lg:text-[3.3334vw] 2xl:text-5xl">{title}</h1>
            <h2 class="font-normal text-2xl text-dark-green opacity-50 pt-2 leading-9">{message}</h2>
            <div class="mt-8">
                <a class="flex items-center w-full h-[51px] bg-dark-green text-white rounded-[4px] px-4 py-3" href={homeLink}>{buttonText}</a>
            </div>
        </div>
    )
}