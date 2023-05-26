import { asset } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export type ILogo =
  | "MaeztraLogo"
  | "CorebizLogo"
  | "QualityLogo"
  | "EplusLogo"
  | "InfraCommerceLogo"
  | "CodebyLogo"
  | "N1Logo"
  | "FrnLogo"
  | "WeDigiLogo"
  | "EnextLogo"
  | "CodeblueLogo"
  | "VndaLogo";

interface Props extends JSX.SVGAttributes<SVGSVGElement> {
  /**
   * Symbol id from element to render. Take a look at `/static/icons.svg`.
   *
   * Example: <Icon id="Bell" />
   */
  id: ILogo;
  size?: number;
}

function Logo(
  { id, strokeWidth = 16, size, width, height, ...otherProps }: Props,
) {
  return (
    <svg
      {...otherProps}
      width={width ?? size}
      height={height ?? size}
      strokeWidth={strokeWidth}
    >
      <use href={asset(`/sprites.svg#${id}`)} />
    </svg>
  );
}

export default Logo;
