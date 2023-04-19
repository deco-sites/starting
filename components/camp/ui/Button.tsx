import type { ComponentChildren, ComponentType, JSX } from "preact";

type Elements = keyof JSX.IntrinsicElements;

type Props<A extends Elements = "button"> =
  & JSX.IntrinsicElements[A]
  & {
    as?: A;
    children: ComponentChildren;
  };

const Button = <A extends Elements = "button">(
  { as, ...props }: Props<A>,
) => {
  const Component = (as ?? "button") as unknown as ComponentType<
    JSX.IntrinsicElements[A]
  >;

  return (
    <Component
      {...props}
      class="bg-gradient-to-r block text-center from-primary-darker to-green-900 p-4 text-white font-semibold rounded-2xl w-full focus:outline-none hover:shadow"
    />
  );
};

export default Button;
