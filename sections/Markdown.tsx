import Markdown, { Props } from "../components/ui/Markdown.tsx";

export default function MarkdownContainer(props: Props) {
  return (
    <div class="pt-10 lg:max-w-2xl px-5 md:px-0 mx-auto text-[#66736C] leading-[1.8]">
      <section class="markdown-container">
        <Markdown {...props}></Markdown>
      </section>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        // Find all images inside .markdown-container and add a click handler that adds "transform" scale 1.5 to it.
        // :where(img):not(:where([class~=not-prose] *)) is the CSS selector for images that should receive the handler.
        // When the user clicks anywhere, or presses ESC, the transform style should be removed.

        const images = document.querySelectorAll('.markdown-container :where(img):not(:where([class~=not-prose] *))')
        const body = document.querySelector('body')
        const removeTransform = () => {
          images.forEach((img) => {
            img.style.transform = ''
            img.removeEventListener('click', removeTransform)
          })
          body.removeEventListener('click', removeTransform)
          body.removeEventListener('keydown', removeTransform)
        }
        images.forEach((img) => {
          img.addEventListener('click', (e) => {
            e.stopPropagation()
            img.style.transform = 'scale(1.5)'
            img.addEventListener('click', removeTransform)
            body.addEventListener('click', removeTransform)
            body.addEventListener('keydown', (e) => {
              if (e.key === 'Escape') {
                removeTransform()
              }
            })
          })
        })
        
      `,
        }}
      >
      </script>
    </div>
  );
}
