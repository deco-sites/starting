---
description: Q&A comercial - deco.cx
since: 1.0.0
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/2KeR6kHGS9U?si=WTu-_IS7n9yAxdHx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Bom, legal A gente não é ator, mas acho que foi suficiente. Estou aqui com o
Leandro ainda e queria discutir com vocês o tipo de conversa que aparece quando
a gente encerra essa apresentação comercial.

Tem algumas dúvidas que são muito recorrentes, que a gente sempre tem que
responder. Eu queria passar por elas com vocês. Vocês podem checar na nossa
documentação uma lista de um monte de perguntas com respostas que a gente tá
sempre adicionando novas perguntas. Então, se tiver alguma coisa que você quer
saber específica, manda pra gente que a gente vai aumentando essa base de dados.

E aí, Leandro? Qual é a primeira pergunta que a gente mais responde?

---

**Eu estou no CMS Legado. Eu estou pensando em ir para o IO, de deco.cx funciona
no Legado tanto quanto no IO?**

R: Então essa pergunta é clássica. Geralmente a pessoa demora para entender que
nós substituímos a solução por completo do frontend da plataforma de comércio.
Então a resposta é na linha de a gente está substituindo o VTEX IO, a gente tá
substituindo a FastStore, está substituindo o VTEX CMS. Então pra gente não faz
a menor diferença se o cliente está no Liquid, se o que a gente tá no frontend
da VNDA, se ele está no frontend do IO, do Legado, que a gente vai substituir
toda essa solução pela deco.cx.

---

**Então estamos vendo que no dia a dia eu vou subir os banners na deco.cx e eu
vou continuar gerenciando os produtos ainda no admin da VTEX. É isso mesmo? Eu
entendi certo? Eu consigo fazer agendamento nesses banners?**

R: É isso mesmo? Eu entendi certo? Eu consigo fazer agendamento nesses banners,
não é isso mesmo. Na plataforma de comércio você vai criar essas novas coleções,
você vai criar produtos, vai trocar foto de produto, descrição, preço, vai ver
os pedidos. Mas toda a experiência de navegação vai ficar no seu site, vai ser
feita dentro da deco.cx. Então você vai criar uma landing page, um banner, vai
estilizar isso. E sim, você consegue agendar e trocar banner com muita
facilidade. Eu vou mostrar isso na demo de produto já já.

---

**Como ficaria dentro da decoc.x o checkout, o my account? Eu consigo
personalizar de algum jeito?**

R: A gente não tem hoje uma solução de chec out e de my account, então tudo o
que vem depois do carrinho é cuidado pela própria plataforma de comércio. A
gente usa a solução da plataforma de comércio e para isso a gente tem um proxy
transparente, ou seja para o usuário final, ele não vê essa mudança. A URL
continua sendo a URL do domínio da loja e toda a personalização do checkout, do
my account, ela é feita dentro da própria plataforma. Mas como eu falei durante
a apresentação, a gente tem parceiros de checkout que a gente pode recomendar e
que são integrados a deco.cx e são integrados à plataforma de comércio e que
funcionam muito bem. A gente tem recebido bons pushback nos nossos clientes.

---

**Uma coisa que eu não entendi é por que eu não vou diretamente para a FastStore
da VTEX,que é de graça, e eu iria para deco.cx. O que é que vocês tem de
diferente?**

R: A gente vai falar sobre isso com mais detalhes no módulo deco.cx vs.
FastStore. De forma geral, a nossa performance é muito superior que a da
FastStore. O nosso tempo de implementação também é muito menor, porque a gente é
muito mais simples de implementar. A gente tá demorando menos de dois meses e
tem projeto em FastStore que demora, às vezes, um ano e meio, dois anos. A gente
também é agnóstico de plataforma, então quando você vem pra deco.cx você não
entrega o seu frontend para a plataforma de comércio. Você é dono do seu
frontend, você leva o seu frontend pra onde você quiser. Isso dá muito mais
liberdade e te dá um leverage na hora de negociar com a sua plataforma de
comércio.

Para além de performance, ma deco.cx você tem todas as ferramentas, todas as
funcionalidades que você precisa para você poder otimizar a sua loja. Então a
gente não entrega só o site, a gente entrega o CMS, a gente entrega o teste AB,
a gente entrega a personalização por audiência, a gente entrega tudo o que você
precisa para o seu site ficar performático ao longo do tempo. Eu já fiz algumas
tentativas de deixar meu site mais rápido e eu sei que a otimização de imagem é
importante se você lidar com os escritos.

---

**Eu já fiz algumas tentativas de deixar meu site mais rápido e eu sei que a
otimização de imagem é importante se você lidar com os scripts é importante
também, e o GTM atrapalha muito. Como é que a deco.cx resolve essas coisas que
eu já sei que são muito difíceis?**

R: Perfeito! Essa quantidade de assets que a gente chama First Party ou Third
Party, que é tamanho de imagem, tamanho de vídeo, script de terceiro. Tudo isso
vai influenciar performance, tá? Mas tem algumas coisas que a gente oferece que
facilitam a sua tomada de decisão.

Primeiro, que as nossas lojas em produção, elas tem suas equipes de terceiros.
Elas tem imagem e uma quantidade grande de imagens, e isso não está prejudicando
performance. Porque nós temos um otimizador de imagem no nosso admin, porque a
gente proxyeia as imagens de jeito diferente. A gente usa uma CDN para fazer
caching, então a gente usa o que tem de mais valioso para poder fazer a
otimização desses assets.

Para GTM, essas tags de terceiros que você mencionou, a gente tem algumas
opções, você pode usar server-side tagging, a gente pode usar Partytown, um
serviço que a gente usa para otimizar esse processamento desses, desses pixels,
desses scripts. Mas enfim, o que você precisa saber é que temos loja em produção
com tudo isso e elas estão funcionando e no nosso admin você consegue em todas
as páginas, vou mostrar pra vocês, verificar em tempo real o que cada alteração
tá afetando na sua performance, no seu tempo de carregamento. Toda mudança que
você faz de conteúdo de imagem, de tamanho de componente, tudo isso você vê em
tempo real, o quanto o que está afetando a performance da sua loja, o que te
ajuda muito a tomar a decisão que você quiser.

---

**Vocês tem alguma solução de search? A que eu estou usando agora não me
interessa, eu acho muito ruim.**

R: A gente não tem uma solução de search hoje. A gente usa API de search que
você escolher, mas você não precisa usar a API de search da plataforma de
comércio. Você pode usar, por exemplo, uma Algolia da vida ou um Linx Impulse.
Você pode escolher qualquer API de pesquisa. A gente só não tem uma API própria
por enquanto.

---

**A minha loja está hoje no VTEX IO e eu já uso algumas customizações da App
Store, como a Wishlist e o Cashback. Como é que fica isso quando eu vou para
deco.cx? E as minhas outras integrações como Intellipost, Algolia, isso também
vai funcionar?**

R: É importante a gente entender exatamente quais serviços, quais customizações
você está falando. Muitos a gente já tem pronto, outros a gente teria que criar,
ou que integrar. Via de regra, todas as principais customizações que a gente tem
na App Store da VTEX, no VTEX IO, como Wishlist ou Cashback, tudo isso já tem na
deco.cx, já tem isso pronto na nossa biblioteca padrão e é super fácil de
integrar uma solução nova. Eu nunca encontrei assim um serviço super diferente
do que aqueles que a gente já tem. Os que a gente sabe que a gente não tem, já
está mapeado, mas seria legal a gente mergulhar, chamar um engenheiro, chamar
seu time técnico, entender sua arquitetura pra gente poder ser bem preciso nessa
resposta. Isso ao longo do processo a gente vai conversar no detalhe.

Tem uma outra coisa: tudo que não tem integração, a sua agência ou o seu
provedor que você contratou, eles conseguem integrar. A gente tem uma biblioteca
de loaders, de integradores que é aberta, open source, então você pode
simplesmente tá faltando alguma integração. Você simplesmente pede pra agência e
ela cria. Normalmente a gente cria, mas se for uma coisa muito específica pro
seu caso de uso, por exemplo, você criou um sistema próprio, um backend próprio,
dá pra integrar com a deco.cx, só precisa criar um integrador personalizado.

---

**Eu já trabalho com uma ferramenta de personalização que é Insider. Eu também
uso outra ferramenta para teste AB, que é o Optimizely, a deco.cx substitui
essas ferramentas? Não ficou muito claro pra mim.**

R: Pra essa resposta eu preciso entender com especificidade que funcionalidades
você usa, tipo o Optimizely, ele é uma ferramenta grande, ele tem um monte de
funcionalidade, a maior parte delas as marcas nem usam. Por exemplo, a Insider.
A Insider tem uma funcionalidade que nós não temos, que é a CDP, a Customer Data
Platform, isso a gente não substituiria, mas a Insider funcionaria muito bem
integrada a deco.cx, porque a gente pode usar os dados do da Insider pra usar
ferramenta de personalização da deco.cx. A Insider também tem uma ferramenta de
personalização que seria substituída pela deco.cx, mas a deco.cx não
substituiria a CDP da Insider. Então depende muito de quais funcionalidades você
está usando em cada plataforma. De novo, é uma conversa que a gente tem que ter
com o time técnico. Desenhar arquitetura para poder checar o que você precisaria
ter na deco.cx funcionando para você conseguir migrar.

---

**Em questão de segurança, com normas de privacidade, LGPD. Como é que a deco.cx
lida com os dados sensíveis do cliente que passa por vocês?**

R: A gente não tem checkout, os dados sensíveis de cartão de crédito, senha,
eles não passam pela gente. Eles ficam dentro da solução que você escolheu.
Então os nossos dados, eles vêm de APIs abertas, não tem muitos dados sensível
que passa pela deco.cx.

---

**Eu entendi que vocês são uma startup nova ainda no mercado. O que acontece com
meus sites se vocês falirem?**

R: Então a gente recebe essa pergunta com alguma frequência. Eu super entendo
que tem esse risco de lidar com uma startup, mas apesar de ser startup, a gente
tem um time super senior. O time está fazendo essa tecnologia pela terceira e
quarta vez, honestamente. Agente já está trabalhando com isso há bastante tempo.
É por isso que em nove meses de empresa a gente conseguiu evoluir tão rápido e
ter um produto tão maduro. É porque o time basicamente sabe o que está fazendo.
Nós não somos marinheiros de primeira viagem, já estávamos nisso há muito tempo.

O segundo ponto é que é legal você saber que a gente está super saudável
financeiramente. A gente tem investidor, a gente acabou de receber um aporte.
Então, nesse sentido, o risco nenhum.

E por fim, na nossa tecnologia, apesar de a gente tá rodando a nossa própria
infra, isso é uma opção. Você pode a qualquer momento cancelar. A gente não tem
nenhum termo no contrato que te impede de fazer o cancelamento. Você cancela a
qualquer momento e você pode levar o seu código da loja para deployar ou seja,
para qualquer outra infraestrutura que você queira. Então nós não estamos
segurando na deco.cx. E independente de quebrar ou não, se você não quiser mais
usar deco.cx, você leva o seu site para onde você quiser. E a gente não é uma
caixa preta que te impede de mexer, ele vai continuar funcionando. Claro que
você vai perder algumas funcionalidades, você vai perder o nosso CMS, vai perder
teste AB, você vai perder o nosso analytics, você vai ter que compor outras
ferramentas para fazer isso e provavelmente vai ser muito mais caro. Mas a
decisão no final das contas, é sua.

---

**Você já tem algum case que você possa me mostrar em produção com loja ativa
vendendo? Além disso, vocês também conseguem trabalhar com B2B ou marketplace?
Vocês tem alguma coisa pra me mostrar?**

R: Então a gente tem sim. A gente tem a lojastorra.com.br, a gente tem a
zeedog.com.br.

Vale dizer que a Zee Dog não é um case especificamente de performance. Ele é um
case de personalização, é uma decisão do próprio cliente. Eles estavam mais
interessados em criar uma experiência de design incrível do que em deixar o site
ultra rápido. A Lojas Torra provavelmente é o site mais rápido do mundo ou o
ecommerce mais rápido do Brasil, como a gente diz. Eu tenho dito isso por aí.
Peço pra me mandarem um link de ecommerce mais rápido. Ninguém nunca me mandou.
Talvez exista. Agora a gente tem mais ou menos uns 30 clientes, implementação em
três plataformas diferentes. A gente não tem um case, na verdade, B2B, não tem
nenhum case de marketplace. A gente tá doido pra ter, então se estiver
interessado na deco.cx, traga e a gente conversa.

---

**Como é que funciona o suporte de vocês se precisar de alguma ajuda? Quais são
os canais que eu posso entrar em contato e qual é tempo de resposta que vocês
vão me dar?**

R: Então, normalmente a gente tem um canal na nossa comunidade no Discord, é um
canal pra agência, um canal pro cliente, um canal pra cada projeto em
implementação. Então a gente cria canais dedicados para aquele projeto.
Obviamente você tem um suporte@deco.cx. Você pode mandar qualquer solicitação
por e-mail e nessa altura a gente está muito, muito próximo dos primeiros
clientes. Então a gente disponibiliza WhatsApp, você pode me ligar? Enfim, a
gente está super aberto a qualquer canal que funcione para você, basicamente.

---

**Pelo que eu tô entendendo, vocês tem uma infraestrutura própria, não é mesmo?
Então o que está me dizendo é que além de eu ter o risco da plataforma de
comércio poder cair, a deco.cx também pode ter instabilidades eventualmente
caindo. É isso?**

R: Sim, a gente tem uma infraestrutura própria e isso pode apresentar alguma
instabilidade. Isso pode cair, mas a chance de acontecer bem baixa. Nosso
contrato garante um SLA de uptime, depende do tamanho do seu contrato, mas a
gente pode conversar especificamente sobre essa cláusula, dado o tamanho do seu
site, a nossa infraestrutura é a mesmo infraestrutura que é usada atualmente
pelo Slack, pelo Supabase, pelo Netlify, que são gigantes, que tem bilhões de
requests por mês, então assim, está servindo a empresas globais gigantescas. Não
vão ser os nossos ecommerce aqui que vão dar problema. Os nossos clientes
atuais. Eles já estão operando com alguns milhões de pageviews por mês, então
não são lojas pequenas, são lojas para grandes e a nossa infraestrutura não
apresenta nenhum problema, nenhum risco considerável para esse cliente. Eu acho
que vocês podem puxar eles pra conversar e entender como está a experiência
deles dentro da nossa infra.

Estar na edge já traz uma redundância pra gente, porque como eu falei, a gente
tem 35 servidores espalhados no mundo. Então você já tem uma redundância
natural. Se o servidor de São Paulo traz alguma instabilidade, a gente consegue
jogar o tráfego para o servidor do Chile, por exemplo. Se por acaso acontecer um
desastre e o deno deploy, nossa infra cair, a gente é uma redundância para o
Fly.io. Então a gente tá fazendo o que tem de mais sofisticado em termos de
infraestrutura e pra não dar problema, inclusive, a gente cacheia por um tempo
as APIs da plataforma de comércio. Então a gente pode até, inclusive, reduzir
sua instabilidade da plataforma de comércio hoje em dia. Mas o risco existe. E
sim, a infraestrutura tá com a gente.

---

**Vocês por acaso garantem a performance que vocês estão me prometendo em
contrato?**

R: A gente não garante performance em contrato no sentido de nos
responsabilizamos por você ter um site nota 90 no PageSpeed, simplesmente porque
isso é uma decisão do cliente. No caso da Zee Dog, por exemplo, eles não
implementaram o site buscando performance acima de 90 a qualquer custo. Eles
fazem experimentos, eles testam se um vídeo vale a pena, se vale a pena uma
imagem um pouco mais pesada, se eles criam alguma customização ou adicionam um
serviço que pode abrir mão de performance por um tempo, mas que vai dar um pouco
mais de conversão pelo ganho na experiência navegação, então a escolha é sempre
do cliente. O que a gente oferece em contrato é uma cláusula que nos
responsabiliza por orientar o implementador, por entregar um site performático.
Então a gente dá um guia de boas práticas pras agências. Então a gente se
responsabiliza também por uma referência. Por exemplo, a nossa loja tema, a
Fashion, ela é uma loja com performance altíssima, funcional, Lojas Torra é uma
loja que está em produção com performance super alta, então a gente sempre vai
ter uma referência para você poder fazer um benchmark e você ter acesso às
melhores práticas.

---

Então chegamos a mais um quizz, mais um exercício, você já sabe o que fazer.
Você vai receber [esse link](https://forms.gle/grvT3LHYPoxa5qd67) aqui na tela,
você vai acessar e vai responder as perguntas do formulário. Eu vou ler aqui com
vocês, só pra vocês ficarem curiosas, se estiverem com preguiça de clicar no
link.

A primeira pergunta é: **E aí, o que é a deco.cx, nas suas próprias palavras?**

A segunda pergunta é: **Como que a deco.cx promove performance?**

A terceira pergunta: **Como que a DECO se diferencia de um CMS Headless?** Essa
é um pouquinho tricky.

A quarta: **O que a deco.cx oferece para além de performance?** É só
performance?

E a última pergunta: **Como que é a nossa precificação? Como que a gente dá o
preço pro cliente final?**
