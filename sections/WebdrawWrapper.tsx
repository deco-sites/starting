interface Props {
  /**
  * @description paste your html from webdraw.ai here.
  */
  content?: string;
}

export default function Section({ content }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}