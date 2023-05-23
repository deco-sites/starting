import { useEffect, useState } from "preact/hooks";

interface Props {
  tempoMaximo: { segundos: number; milissegundos: number };
  onTempoAtualizado: (
    tempo: { segundos: number; milissegundos: number },
  ) => void;
  resetCounter: boolean;
}

const Counter = ({ onTempoAtualizado, tempoMaximo, resetCounter }: Props) => {
  const [tempo, setTempo] = useState({ segundos: 0, milissegundos: 0 });

  useEffect(() => {
    let intervalId = 0;

    const iniciarContador = () => {
      intervalId = setInterval(() => {
        setTempo((tempoAnterior) => {
          // Incrementa o tempo em 1 milissegundo
          const novoMilissegundos = tempoAnterior.milissegundos + 1;
          let novoSegundos = tempoAnterior.segundos;

          // Verifica se é necessário incrementar os segundos
          if (novoMilissegundos >= 100) {
            novoSegundos += 1;
          }

          // Verifica se o tempo máximo foi atingido
          if (
            novoSegundos >= tempoMaximo.segundos &&
            novoMilissegundos >= tempoMaximo.milissegundos
          ) {
            clearInterval(intervalId); // Interrompe o intervalo
            onTempoAtualizado(tempoMaximo); // Chama a função de retorno com o tempo máximo
            return tempoMaximo; // Atualiza o tempo no estado com o tempo máximo
          }

          const novoTempo = {
            segundos: novoSegundos,
            milissegundos: novoMilissegundos >= 100 ? 0 : novoMilissegundos,
          };

          onTempoAtualizado(novoTempo); // Chama a função de retorno com o novo tempo
          return novoTempo; // Atualiza o tempo no estado
        });
      }, 10); // Atualiza o contador a cada 10 milissegundos
    };

    if (resetCounter) {
      setTempo({ segundos: 0, milissegundos: 0 }); // Reinicia o tempo para 0
      clearInterval(intervalId); // Limpa o intervalo anterior, se houver
      iniciarContador(); // Inicia o novo contador
    } else {
      iniciarContador(); // Continua o contador atual
    }

    return () => {
      clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
    };
  }, [resetCounter]); // Executa o efeito quando a propriedade resetCounter mudar

  const exibirTempo = tempo.segundos >= tempoMaximo.segundos &&
      tempo.milissegundos >= tempoMaximo.milissegundos
    ? `${tempoMaximo.segundos}.${tempoMaximo.milissegundos}s`
    : `${tempo.segundos}.${tempo.milissegundos}s`;

  return <>{exibirTempo}</>;
};

export default Counter;
