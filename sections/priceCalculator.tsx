interface Props {
  /**
  * @description The description of name.
  */
  calculatorHTML: string;
}

export default function Section({ calculatorHTML }: Props) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: calculatorHTML }} />
    </div>
  )
}