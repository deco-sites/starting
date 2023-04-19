import AuthorInfos from "./AuthorInfos.tsx";
import Pagination from "./Pagination.tsx";
import UserComment from "./UserComment.tsx";

const CommentsSection = () => {
  return (
    <div class="max-w-[990px] mx-auto">
      <div class="p-20">
        <div class="relative left-8 sm:left-0 mx-auto max-w-[113px] mb-14">
          <img src="/camp/quotes.png" />
        </div>
        <UserComment comment="Foram incríveis dias de discussões de arquitetura e implementação, 
        fora todo a acomodação e eventos que eles preparam para a gente, como um super study group que levarei para o resto da minha vida. No final o MVP saiu,
         apresentamos e foi um sucesso, que semana incrível!" />
        <div class="mt-4">
          <AuthorInfos
            author="Thiago Veras"
            position="Senior Software Engineer"
            company="Microsoft"
          />
        </div>

        <div class="mt-10">
          {/* TODO - Switch to the actual paging component */}
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default CommentsSection;
