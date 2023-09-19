import Container from "./Container.tsx";

export interface Props {
  students?: string[];
  mentors?: string[];
  companys?: string[];
}

const PersonaAccordion = ({
  students = [],
  mentors = [],
  companys = [],
}: Props) => {
  const containers = [
    {
      name: "Alunos",
      icon: "/camp/students-icon.png",
      class: "h-10",
      attachments: students,
    },
    { name: "Mentores", icon: "/camp/mentors-icon.png", class: "h-10 ", attachments: mentors, },
    { name: "Empresas", icon: "/camp/business-icon.png", class: "h-10", attachments: companys, },
  ];
  
  return (
    <div class="lg:flex block justify-between w-full">
      {containers.map((cont, i) => (
        <div class="mx-6 max-w-[320px] w-full mx-auto " key={cont.name}>
          <Container
            name={cont.name}
            icon={cont.icon}
            class={cont.class}
            att={cont.attachments}
            index={i}
          />
        </div>
      ))}
    </div>
  );
};

export default PersonaAccordion;
