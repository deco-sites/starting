import { asset } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export type AvailableIcons =
  | "ArrowRight"
  | "Bag"
  | "Bars3"
  | "BoldHeart"
  | "Book"
  | "Cash"
  | "Cell"
  | "CellWhite"
  | "Chart"
  | "ChevronDown"
  | "ChevronLeft"
  | "ChevronRight"
  | "ChevronUp"
  | "Check"
  | "CreditCard"
  | "Deco"
  | "DecoIcon"
  | "DecoLogo"
  | "DeviceDesktop"
  | "DeviceMobile"
  | "DeviceTablet"
  | "Discount"
  | "Discord"
  | "DiscordButton"
  | "Dol"
  | "Doc"
  | "Elo"
  | "Facebook"
  | "FastClock"
  | "FastPagespeed"
  | "FilterList"
  | "FilterList"
  | "GreenArrow"
  | "Heart"
  | "IconCart"
  | "Instagram"
  | "Linkedin"
  | "Logo"
  | "MagnifyingGlass"
  | "MapPin"
  | "Mastercard"
  | "Minus"
  | "OCCLogo"
  | "Phone"
  | "PigMoney"
  | "Pix"
  | "Plus"
  | "Post"
  | "QuestionMarkCircle"
  | "Return"
  | "Sale"
  | "Share"
  | "ShoppingCart"
  | "ShopifyLogo"
  | "Support"
  | "Time"
  | "Tiktok"
  | "Trash"
  | "Truck"
  | "User"
  | "VTEXLogo"
  | "VndaLogo"
  | "Visa"
  | "WhatsApp"
  | "WhatsApp"
  | "WhiteArrow"
  /* NRF Icons */
  | "RocketLaunch"
  | "Sparkle"
  | "Gauge"
  | "Plugs"
  | "FileSvg";



interface Props extends JSX.SVGAttributes<SVGSVGElement> {
  /**
   * Symbol id from element to render. Take a look at `/static/icons.svg`.
   *
   * Example: <Icon id="Bell" />
   */
  id: AvailableIcons;
  size?: number;
}

function Icon({
  id,
  strokeWidth = 16,
  size,
  width,
  height,
  ...otherProps
}: Props) {
  return (
    <svg
      {...otherProps}
      width={width ?? size}
      height={height ?? size}
      stroke-width={strokeWidth}
    >
      <use href={asset(`/sprites.svg#${id}`)} />
    </svg>
  );
}

export default Icon;
