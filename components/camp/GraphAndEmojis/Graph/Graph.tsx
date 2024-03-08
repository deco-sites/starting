import GraphCustom from "$store/islands/Graph.tsx";
export interface Members {
  month: string;
  count: number;
  total: number;
}

export default function Graph({ props }: { props: Members[] }) {
  return (
    <div class="mx-auto w-full max-w-screen-md relative min-h-[380px] md:min-h-[575px] rounded-3xl ">
      <GraphCustom member={props} />
    </div>
  );
}
