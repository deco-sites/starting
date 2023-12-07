---
description: Treinamento Comercial - Web Performance para Ecommerce
since: 1.0.0
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/yjRd58fTsfI?si=jmHfBqYWo-9P6dTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Parte importante do nosso produto e do nosso discurso comercial está intimamente
relacionado à web performance. Nesse contexto que a gente está trazendo, web
performance é a possibilidade, é a maneira que você mede, tanto qualitativamente
quanto quantitativamente, a velocidade do seu site e o tipo de experiência que
ele está entregando para o seu cliente

Quando a gente está falando de web performance, normalmente a gente tem as
seguintes análises:<br>

1. Temos análise sobre a **velocidade de carregamento** do seu site, ou seja,
   quanto tempo ele demora para mostrar uma página, quanto tempo demora para o
   usuário conseguir interagir com aquele site e quão consistente está sendo
   essa entrega desses conteúdos no frontend, no navegador do cliente.

2. Outra análise é entender **quanto tempo tá demorando para o site ficar
   interativo**, ou seja, quão rápido o usuário consegue começar a interagir com
   aquele conteúdo. Às vezes é simplesmente fazer um scroll, é clicar num botão.
   Enfim, quanto tempo aquilo está utilizável por alguém.

3. Também avaliamos a **suavidade e interatividade** do site. Isso quer dizer,
   quando você faz um scroll, o conteúdo vem de uma maneira natural, a imagem
   carrega de uma vez só, do momento que você entendeu que aquele conteúdo já
   chegou para você. Não parece que tem algum bug ali, alguma instabilidade.
   Isso também é levado em consideração em web performance.

4. E por fim, a **performance** também **percebida**. Às vezes você não tem como
   fazer um conteúdo ser carregado mais rápido do que ele já está sendo feito,
   mas você pode dar algum feedback que dê conforto pro seu usuário. Ou seja,
   uma coisa muito típica é um percentual do carregamento daquele conteúdo
   daquela página, que mostra que algo está acontecendo, que aquela experiência
   não está quebrada e que é só esperar um pouquinho.

---

Ao longo do tempo, o Google foi gerando pesquisas, métodos, tutoriais para
ajudar os web developers, quem está desenvolvendo os sites, a criar sites cada
vez mais rápidos, a entender performance. Por ser o Google esse material que
eles criaram é logicamente o norte que guia toda a comunidade de desenvolvimento
na criação de experiências rápidas. Logicamente, todo mundo entende que ao
seguir as diretrizes dele, você vai ter mais acesso orgânico e um custo de
aquisição, um CPC nas mídias pagas, mais baratos, porque você está de acordo com
os incentivos que eles estão colocando para o mercado.

As métricas que compõe essa guia, esse norte que todo mundo está olhando e a
gente também se chamam **Core Web Vitals**. São métricas que te ajudam a
entender objetivamente como seu site está performando em termos de velocidade,
de interatividade e também de estabilidade da experiência, de consistência.
<br>

- A primeira métrica é o **Largest Contentful Paint** (LCP), ou seja, é o tempo
  de carregamento do maior elemento que está naquela página. Muito normalmente
  isso é uma imagem. E o Google sugere, ele na verdade, cria critérios de que
  esse indicador tem que ser abaixo de 2,5 segundos.

- Uma outra métrica é o **First Input Delay** (FID). Isso quer dizer quanto
  tempo demora para aparecer algum elemento que gere interatividade, e que o
  usuário possa reagir a ele e interagir com ele. O Google sugere que essa
  métrica esteja abaixo de 100 milissegundos para acontecer.

- Também temos a métrica **Cumulative Layout Shift** (CLS). Ela tem como
  objetivo medir a estabilidade da sua experiência enquanto ela carrega o
  conteúdo. Segundo o Google, você tem que fazer isso em menos de 0,1 segundos.

- Em seguida, temos também o **First Contentful Paint** (FCP). Ele quer medir
  quando aparece a primeira coisa que o cliente consegue olhar, que o visitante
  consegue ver na página e entender que vem alguma coisa ali. Nessa métrica, o
  Google sugere que seja feito mais rápido do que 1,8 segundos.

- E por fim, temos o **Total Blocking Time** (TBT), que é um intervalo entre o
  First Contentful Paint e o Time to Interact, que é basicamente o tempo que
  demora tudo pra acontecer e você ter algo utilizável. O Google sugere que isso
  seja feito em menos de 200 milissegundos.

<br>
Existem algumas ferramentas disponíveis até gratuitamente online para você medir a velocidade de um site. Para listar algumas, você tem um GTmetrix, Pingdom, WebPage Test. Você tem o Google Page Insights e o Google Lighthouse. Essas duas, por serem fornecidas pelo Google, são mais alinhadas com a maioria da indústria e é o que a gente mesmo usa para ver a velocidade do nosso site.

A distinção é importante entre os dois serviços do Google, é que o Lighthouse,
quando você roda ele via Web Tools, ele vai pegar as configurações da sua
máquina e da sua conexão para testar aquele site. Ou seja, tipicamente é um
desenvolvedor, um designer, uma máquina moderna numa conexão boa. Já o Google
Page Insights, ele tem duas métricas diferentes uma é melhor do que a outra. O
Web Vitals quando ele traz as informações do Web Vitals, aqueles são dados reais
que ele guardou da navegação daquele site específico através do navegador. Já os
dados, que são de performance, ele pega de uma média da tecnologia do
brasileiro, ou seja, ele vai pegar um Moto G numa conexão que não está ótima, o
que também é muito mais rigoroso que o Lighthouse. Então é por isso que a gente
foca mais nos resultados do Google Page Insights.

---

Um caso muito legal da gente vê na prática é o caso da ZeeDog, que foi a
primeira loja a implementar a deco.cx. Você entrando aqui no PageSpeed Insights
do Google, a gente tem dois relatórios diferentes e é muito importante você
distinguir o que cada um deles fala.

Esse primeiro bloco aqui de cima ele está falando do Core Web Vitals, ou seja,
quais são as principais métricas da web que eu falei aqui no curso. Então é o
LCP, FIP, e por aí vai. E quando você entra no site da Zee Dog, uma pessoa que
vai analisar e falar do case da deco.cxm vai falar: "Olha só! Olhei aqui, e
vocês estão reprovados no celular. Veja só como é que não funciona". E aí você
vai rodar para baixo, e esse aqui, na verdade é um diagnóstico de desempenho, e
a nota que normalmente todo mundo vê, vai bater 37. E aí quem quiser realmente
falar mal fala: "Olha só, vocês não conseguem entregar a performance". Mas vamos
entender cada um desses relatórios e é a parte deles.

Esse relatório de desempenho ele é focado em dados de laboratório. O que quer
dizer isso? Ele rodou agora em tempo real o carregamento dessa página que foi a
home do site, usando um Moto G Power, e uma limitação de 4G. Ou seja, um celular
que seria médio para baixo no Brasil. E aí, quando você vê aqui, ele está
reprovado também. Então, na verdade, a home page da Zee Dog, ela não está dentro
das principais métricas de Core Web Vitals do Google. Mas ao clicar em origem,
ao invés da URL da home, ele dá aprovado. O que isso quer dizer então aqui para
o Google? Que esse site, na média todas as páginas dele está entregando um
desempenho de altíssimo nível, no Core Web Vitals. E portanto, esse site vai
receber mais tráfego e mais relevância.

Isso aqui é muito mais importante, porque na verdade, o que ele coleta aqui, no
Core Web Vitals, são os últimos 28 dias de tráfego nesse site, as visitas
inteiras, em diferentes dispositivos móveis e diferentes conexões. Então, a
história que esse relatório está contando é a seguinte: esse site realmente tem
uma home page que está pesada e esse site realmente dá uma experiência ruim para
quem tem um celular Moto G Power e limitação de 4G, mas na verdade o cliente que
entra nas Zee Dog, ele provavelmente, o cliente médio, não está usando uma
conexão ruim e muito menos um aparelho mais antigo. Ele deve estar usando um
iPhone e um Samsung super moderno e numa conexão 5G.

Então o time da Zee Dog, ele se guiou muito mais pela experiência que ele estava
criando de fato para os clientes dele e conseguiu aprovação no que eles
precisavam do que meramente tirar uma nota nesse dado de laboratório. E, para
outros negócios pode fazer sentido. Uma loja como a Lojas Torra, por exemplo,
que é de modo acessível, é mais importante o desempenho que é feito por
laboratório está mais alinhado com Core Web Vitals.

Então é isso que é importante saber na hora de apresentar pra um cliente, não
cair numa pegadinha ou numa dúvida que você não consegue explicar.

---

### Porque a performance é importante?

Talvez você já saiba disso e provavelmente os seus clientes também já sabem
disso. Mas eu vou aproveitar aqui para declarar o óbvio para todos nós:

> **Velocidade de carregamento afeta conversões diretamente e afetam as vendas
> de uma plataforma de comércio.**

Existem dezenas de pesquisas e evidências sustentando esse fato. Por exemplo,
[uma dessas pesquisas](https://www2.deloitte.com/ie/en/pages/consulting/articles/milliseconds-make-millions.html)
apontou que aumentando a velocidade do seu site em 0,1 segundos, pode aumentar
as vendas em até 10%. Em um site que não seja um e-commerce, seja um site
institucional ou de captura de lead, esse aumento pode gerar até 7% de aumento
dos pageviews.

[Outra pesquisa](https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/),
e essa é a do próprio Google Research, aponta que a chance do seu bounce
aumentar é de 90% se o seu site ficar mais lento, partindo de 1 segundo para 5
segundos. No caso do seu site carregar em mais de 10 segundos, a chance do seu
bounce aumentar é de 123%. Ou seja, é uma certeza que você vai aumentar o seu
bounce.

O cruel dessa métrica, dessa pesquisa e todo o varejista vai sentir essa dor
como a gente sente e que você, nesse caso, está perdendo o tráfego que você já
pagou para ter. Você já fez as iniciativas de SEO. Você já lutou pelo
posicionamento orgânico. Você já pagou pro próprio Google pra ele mostrar sua
marca e seus produtos nas suas ferramentas de busca e mesmo assim você está
perdendo uma parcela desse tráfego, simplesmente porque o cliente não consegue
ao menos ver o conteúdo que você está entregando. Ele não consegue nem reagir
àquela página e acaba dando bounce, indo para o concorrente.

E falando de desempenho, ou velocidade de carregamento da sua página, ele
provavelmente está afetando três métricas importantes do seu negócio:

1. A primeira delas a gente já falou aqui, é a **conversão**. Isso quer dizer,
   em qualquer cenário que o usuário chegou à ação final que você gostaria. No
   caso de um ecommerce, logicamente, a compra.
   [Uma outra pesquisa](https://www.portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm#:~:text=The%20first%205%20seconds%20of,%28between%20seconds%200-5%29)
   aponta que um site que carrega em 1 segundo verso um site carrega em 5
   segundos, converte 3x mais.
   [Uma pesquisa](https://www.fastcompany.com/1825005/how-one-second-could-cost-amazon-16-billion-sales)
   também aponta que a Amazon perderia U$ 1,6 bilhões ao ano caso seus sites
   ficassem meros 1 segundo mais lentos. Isso é uma eternidade para as métricas
   do mundo digital.

2. Uma outra métrica que eu já falei é a **visibilidade** para o Google, que
   está relacionada ao SEO. Ou seja, o Google vem desde 2020 incentivando
   experiências mobile first que sejam rápidas e gerem engajamento.
   Explicitamente ele falou que vai favorecer as marcas, os ambientes que tenham
   esses critérios. E esse é justamente o mais difícil hoje você conseguir nas
   plataformas de comércio. Se você rodar os site, vai ver que muitos tem uma
   experiência desktop média batendo uma nota 70, 80, mas o mobile tipicamente
   está abaixo de 30, ou seja, uma grande oportunidade de ser descoberto e
   ganhar mais tráfego no Google.

3. Por fim, temos a **usabilidade**. Clientes voltam e tem uma relação com
   marcas que entregam experiências prazerosas, agradáveis de consumo também.
   [Uma pesquisa pela Ericsson](https://www.ericsson.com/en/press-releases/2016/2/streaming-delays-mentally-taxing-for-smartphone-users-ericsson-mobility-report)
   apontou que o nível de estresse de alguém que está esperando mais de 6
   segundos para ver o conteúdo num celular é igual a ver um filme de terror.

---

Nos últimos 15 anos, os desenvolvedores web foram ficando cada vez mais afeitos
ao JavaScript. O JavaScript veio para estender as possibilidades de experiência
web. Você criar um menu com uma animação, você cria algum elemento que carrega
na página sem você precisar recarregar a página inteira. O JavaScript é uma
linguagem muito boa e versátil, por isso a gente vê ela em todos os lugares,
desde mobile, aplicativos, até na televisão e tudo mais, tem algum nível de
JavaScript.

Por definição, JavaScript não tem problema nenhum. Na verdade só ajudou a gente.
Porém, enviar altos volumes de código pesado para o navegador vem afetando sim o
desempenho dos sites ao longo do tempo. Além disso, a proliferação da comunidade
em torno do JavaScript criou dezenas de opções de bibliotecas e frameworks.
Então, agora um desenvolvedor júnior precisa dominar tudo isso para subir uma
simples página no ar. Então, o dado concreto é que as páginas vem ficando mais
pesadas e mais lentas ao longo do tempo. Uma página normal hoje carrega mais de
1MB de JavaScript para funcionar.

Um parâmetro legal é a gente imaginar, que não muito tempo atrás, o software que
levou o homem à Lua pesava somente 4kb. Então uma página hoje dessa que carrega
em 1MB é 250x mais pesada do que o software que levou o homem à lua. Um software
super poderoso com cálculos complexos. Uma outra pesquisa do Google Research
apontou que os sites estão carregando no celular em média em 15 segundos, o que
é uma eternidade na internet.

A deco.cx fez algumas apostas de arquitetura tecnológica para conseguir entregar
essa performance nunca antes vista:
<br>

- A primeira aposta da arquitetura da deco.cx foi mudar a maneira que a gente dá
  deploy no código. Ou seja, entrega ele para o navegador do usuário final.
  Tipicamente, as aplicações de comércio eletrônico hoje tem um servidor
  estático num lugar só, normalmente nos Estados Unidos, o que faz o código ter
  que navegar até os Estados Unidos e voltar. Só nesse trajeto você já saiu da
  zona de carregamento instantâneo. Ou seja, da maneira que o usuário percebe
  que aquele conteúdo carregou na mesma hora. No serviço que a gente usa o dele.
  A gente, na verdade, entrega o código em 35 regiões espalhadas pelo mundo. Ou
  seja, a gente garante que o servidor que estava aquele código está sempre bem
  pertinho do usuário.

- Como eu acabei de falar na sessão anterior, o JavaScript, o crescimento dele,
  a proliferação e seu uso em diferentes lugares de aplicações vem deixando
  realmente os sites mais pesados, seja com códigos First Party, usados mesmo
  para desenvolver ali, por exemplo, um menu; seja os códigos Third Party, ou
  seja de terceiros, como tipicamente a gente usa um GA ou outro serviço de
  analytics. E na estrutura da deco.cx a gente vem reduzindo o JavaScript ao
  máximo, com diferentes soluções que você pode ver depois na nossa documentação
  técnica. Então, quando você pega a loja tema, por exemplo, a gente mostrou na
  demo por padrão, ela manda zero JavaScript para o navegador, tendo um ganho
  gigantesco de performance.

- Por fim, a gente também escolheu não desenvolver uma linguagem própria de
  programação, mas se alavancar das linguagens mais famosas, mais populares,
  para a pessoa poder aprender deco.cx muito rápido. Então a gente usa o Preact
  que é uma versão otimizada do React, e a gente usa um framework de CSS/HTML,
  que é o Tailwind.

---

Nós temos estratégias para resolver especificamente alguns do Core Web Vitals
que eu falei anteriormente:
<br>

- O TBT, por exemplo, a gente usa uma estrutura de islands, de ilhas de
  conteúdo. Que faz a gente entregar o mínimo de JavaScript necessário pro
  navegador. Além disso, para lidar com serviços como Google Tag Manager, que é
  muito comum, a gente usa um outro serviço chamado Partytown, que carrega esse
  código numa outra thread, num outro momento do código principal, garantindo
  que seu site vai ficar iterativo muito rápido.

- Outra métrica que a gente ajuda a melhorar de maneira muito intencional é o
  LCP. Nele os desenvolvedores têm total acesso ao HTML. Isso quer dizer que ele
  consegue criar tags para pre-load, para pré-carregar todo o conteúdo no
  navegador, garantindo alta performance. Além disso, cada imagem é
  redimensionada e cortada automaticamente no nosso sistema, garantindo que
  apesar do designer subir uma grande imagem pesada e detalhada, no momento de
  entregar isso pro navegador, a gente vai entregar os mínimos de bytes
  necessários para aquele conteúdo funcionar.

- Por fim, também ajudamos no FCP. O processo de renderização acontece na edge,
  como a gente já falou várias vezes, perto do usuário. Isso garante que o tempo
  de latência do servidor para ele renderizar o conteúdo e entregar para o
  navegador é o mínimo possível. Além disso, a gente tem um sistema de stale
  cache nas APIs das plataformas de comérciom, que garantem que seu site esteja
  sempre online, mesmo que haja algum tipo de atraso, significando que a página
  vai estar sempre pronta, completa e rápida.

Além de melhorar os Core Web Vitals diretamente, ou seja, a pontuação percebida
pelo Google, a gente tem também algumas estratégias que melhoram a experiência
do usuário, independente da nota:
<br>

- A primeira estratégia é que todo o conteúdo é renderizado no servidor. Isso
  faz com que as páginas não dependam de JavaScript para carregar. Isso é
  especialmente importante quando você está acessando o conteúdo de um celular e
  talvez uma conexão um pouco pior, o que é, na verdade, a grande maioria dos
  acessos à plataforma de comércio hoje.

- Nós também pré carregamos conteúdos adjacentes. Pensa comigo a última vez que
  você ouviu alguma música no Spotify e se você perdeu a conexão, mas ainda
  tinha algumas músicas na fila tocando? Ou seja, o Spotify já tinha carregado
  essas músicas enquanto você ouvia a primeira, a gente faz a mesma coisa.
  Quando um usuário pousa na sua home, ele aterrisa na sua home, o nosso sistema
  já entende todos os possíveis caminhos que ele pode ter. Ou seja, os links das
  URL que existem nessa página. Enquanto o cliente está interagindo com aquele
  conteúdo, a gente já está trazendo o conteúdo das outras páginas. Então quando
  ele resolve ir pra uma outra etapa, aquele conteúdo já está pronto pra ele.

- Por fim, o nosso recurso de customização permite que você crie jornadas por
  audiências.Mas esse conteúdo, como a gente não faz cache do HTML, ele é
  carregado sempre na hora e muito rápido. Você deve lembrar de uma experiência,
  por exemplo, usando o Google Optimize, onde você criou um teste e aquele teste
  era uma troca de banner E quando você vai ver o teste no ar, muitas vezes ele
  carrega o primeiro banner e rapidamente ele tira e substitui pelo banner do
  teste, o que é uma experiência péssima e faz o cliente pensar que aquele site
  tá com algum tipo de problema. Isso nunca vai acontecer na Deco porque a gente
  sempre renderiza HTML na hora sem cache.
