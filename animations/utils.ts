import { TimelineSegment } from "https://esm.sh/motion@10.16.4";

export type AnimationKeyframe = TimelineSegment;

export type AnimationTimeline = AnimationKeyframe[];

export type AnimatedSvgProps = {
  class?: string;
  width?: string;
  height?: string;
};
