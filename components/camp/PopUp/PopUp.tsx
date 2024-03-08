import { useRef } from "preact/hooks";

/**
 * @titleBy title
 */
interface Requirements {
  title: string;
  /**
   * @title content
   * @format html
   */
  content: string;
}

export interface Props {
  buttonLabel: string;
  items?: Requirements[];
}

const THEME = {
  "dark": "text-[#fff]",
  "ligth": "text-[#000]",
};

export default function PopUp(
  { buttonLabel, items, theme }: Omit<Props, "@Page"> & {
    theme: "dark" | "ligth";
  },
) {
  const modal = useRef<HTMLDialogElement>(null);

  function handlerClick() {
    modal.current?.showModal();
  }

  return (
    <>
      <button
        className={`cursor-pointer  text-sm ${THEME[theme]}`}
        onClick={handlerClick}
      >
        {buttonLabel}
      </button>
      <dialog
        ref={modal}
        class="modal rounded-3xl p-6 border-slate-500 border bg-[#000]"
      >
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-[#fff]">
              ✕
            </button>
          </form>
          <ul class="flex flex-col gap-3">
            {items?.map((item) => (
              <li class="flex flex-col gap-2">
                <h3 className="text-2xl text-[#fff]">{item.title}</h3>
                <p
                  className="text-[#A1A1AA] text-base"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                >
                </p>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </>
  );
}
