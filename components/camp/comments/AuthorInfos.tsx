const AuthorInfos = (
  props: { author: string; position: string; company: string },
) => {
  return (
    <div class="text-center">
      <span class="text-black text-md sm:text-xl">
        {props.author}
        {" - "}
        {props.position}, <span class="font-bold">{props.company}</span>
      </span>
    </div>
  );
};

export default AuthorInfos;
