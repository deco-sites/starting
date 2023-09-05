import { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

interface MenuButtonProps {
  iconMenuClose: {
    Image: LiveImage;
    AltIconMenu: string;
  };
  iconMenuOpen: {
    Image: LiveImage;
    AltIconMenu: string;
  };
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  isMobile: boolean;
}

const MenuButton = ({
  isMenuOpen,
  setIsMenuOpen,
  isMobile,
  iconMenuClose,
  iconMenuOpen,
}: MenuButtonProps) => {
  return (
    <div className="pl-6 lg:hidden relative lg:top-0 lg:top-[100px] top-[24px] flex">
      {isMenuOpen && isMobile
        ? (
          <button
            class={`top-[100px] left-[calc(100%_-_40px)] ${
              isMenuOpen && isMobile ? "fixed" : "relative"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <figure>
              <Image
                src={iconMenuClose.Image}
                class="w-3.5 h-3.5"
                alt={iconMenuClose.AltIconMenu}
                width={14}
                height={14}
              />
            </figure>
          </button>
        )
        : (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <figure>
              <Image
                src={iconMenuOpen.Image}
                class="w-4 h-4 z-0"
                alt={iconMenuOpen.AltIconMenu}
                width={16}
                height={16}
              />
            </figure>
          </button>
        )}
    </div>
  );
};

export default MenuButton;
