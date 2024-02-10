/**
 * @title {{{label}}}
 */
interface ScheduledEvent {
  label: string;
  time: string;
}

export interface Props {
  events: ScheduledEvent[];
}

export default function Schedule(props: Props) {
  return (
    <ul class="flex flex-col w-full">
      {props.events.map(({ label, time }) => (
        <li class="flex justify-between w-full items-center h-10 border-b border-black dark:border-white">
          <span>{label}</span>
          <span>{time}</span>
        </li>
      ))}
    </ul>
  );
}
