import { MatchContext } from "$live/blocks/matcher.ts";

/**
 * @title {{{path}}}
 */
export interface Props {
  /**
   * @title The request path
   * @description can be exact or regex (should start with /)
   * @example /*
   * @default /*
   */
  path: string;
}

/**
 * @title Path Matcher
 */
const MatchPath = (
  { path }: Props,
  { request }: MatchContext,
) => {
  return path && new URLPattern({ pathname: path }).test(request.url) || false;
};

export default MatchPath;
