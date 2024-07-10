import { asset } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export type AvailableIcons =
  | "ArrowRight"
  | "Bag"
  | "Bars3"
  | "BoldHeart"
  | "Book"
  | "Camera"
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
  | "DecoCX"
  | "DecoIcon"
  | "DecoLogo"
  | "DeviceDesktop"
  | "DeviceMobile"
  | "DeviceTablet"
  | "Discount"
  | "Git-hub"
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
  | "Git-hub"
  | "Github-rounded"
  | "Heart"
  | "IconCart"
  | "info"
  | "Instagram"
  | "Linkedin"
  | "Logo"
  | "laurel"
  | "MadeInDeco"
  | "MadeInDecoMob"
  | "MagnifyingGlass"
  | "MapPin"
  | "Mastercard"
  | "Menu"
  | "Minus"
  | "minus-rounded"
  | "OCCLogo"
  | "Phone"
  | "PigMoney"
  | "Pix"
  | "Plus"
  | "plus-rounded"
  | "Post"
  | "QuestionMarkCircle"
  | "Return"
  | "Sale"
  | "Share"
  | "ShoppingCart"
  | "ShopifyLogo"
  | "Star"
  | "star-sign"
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
  | "XMark"
  /* NRF Icons */
  | "RocketLaunch"
  | "Sparkle"
  | "Gauge"
  | "Plugs"
  | "FileSvg"
  | "InfoCircle"
  | "Check"
  | "check-rounded"
  /* Decocamp */
  | "TsFile"
  | "Fresh"
  | "ToolHexagon"
  | "sound"
  | "subtitle"
  | "edit"
  | "speedtest"
  | "code"
  | "winner"
  | "thirdPlace"
  | "product"
  | "checklist"
  | "planet"
  | "bulb";

interface Props extends JSX.SVGAttributes<SVGSVGElement> {
  /**
   * Symbol id from element to render. Take a look at `/static/icons.svg`.
   *
   * Example: <Icon id="Bell" />
   */
  id: AvailableIcons;
  size?: number;
  color?: string;
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
