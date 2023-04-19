import Container from "./Container.tsx";
import { useState } from "preact/hooks";

const containers = [
  {
    name: "Alunos",
    icon: "/camp/students-icon.png",
    class: "h-10",
    attachments: [{ name: "Ganhe dinheiro para aprender." }, {
      name: "Seja orientado por experts.",
    }, { name: "Trabalhe para grandes marcas." }],
  },
  { name: "Mentores", icon: "/camp/mentors-icon.png", class: "h-10 " },
  { name: "Empresas", icon: "/camp/business-icon.png", class: "h-10" },
];

const PersonaAccordion = () => {
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
