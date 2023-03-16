import { useState } from "preact/hooks";

export interface Props {
    data: string;
  }

  export default function Cms(props: Props) {
    const [open, setOpen] = useState(false);
    return (
      <p></p>
    );
  }
