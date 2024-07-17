---
description: Adicionando um App
---

Nesta documentação, vamos te guiar na adição de um `App` ao seu site. Um `App`
permite que você integre facilmente novas funcionalidades, seções e recursos ao
seu site.

## 1. Acessar a Página de Apps

Para adicionar um app ao seu site, clique na aba Apps. Você verá uma lista de
todos os apps disponíveis. Neste caso, vamos adicionar o Weather App.

## 2. Instalar o App

Clique no botão de switch para instalar o app no seu site.

![Instalar app](/docs/getting-started/adding-an-app/install-app.png)

O Weather App fornece uma seção que exibe uma mensagem com a temperatura atual.
Além da seção, este app também inclui um loader, uma função TypeScript que
retorna dados tipicamente utilizados em Sections. Este loader específico obtém a
temperatura de um local determinado (ou da localização atual se nenhum local for
especificado). Vamos usar ambos e ver como podem ser integrados.

## 3. Usar as Funcionalidades do App

### 3.1 Vá para a Seção WhatsTheTemperature

Navegue até a Página de Seções e clique na Seção WhatsTheTemperature. Você pode
filtrar a lista pelo app.

![Página de Seções](/docs/getting-started/adding-an-app/sections-page.png)

Abra as propriedades da seção. A única propriedade que esta seção possui é a
temperatura, que é um número representando a temperatura em Celsius.

### 3.2 Configure a Seção para Usar o Loader do App

Clique no campo Temperatura para escolher como você vai fornecer a informação de
temperatura.

![Selecionar Fonte de Temperatura](/docs/getting-started/adding-an-app/select-source.png)

Você tem três opções:

1. **Entrada Manual**: Forneça um número arbitrário para a temperatura.

   ![Entrada Manual](/docs/getting-started/adding-an-app/manual-entry.png)

2. **Valor Padrão**: Deixe o campo de temperatura em branco. A seção aceita um
   valor nulo, e uma temperatura fixa padrão será exibida.

   ![Valor Padrão](/docs/getting-started/adding-an-app/default-value.png)

3. **Usar o Loader**: Utilize o loader disponibilizado pelo Weather App.

   ![Usar o Loader](/docs/getting-started/adding-an-app/use-loader.png)

   Se você não fornecer latitude e longitude, o loader buscará a temperatura da
   sua localização atual. Alternativamente, fornecendo a latitude e a longitude
   de um local específico, será retornada a temperatura atual desse local:

   ![Temperatura do Loader](/docs/getting-started/adding-an-app/loader-temperature.png)

   > Parece que está um pouco frio na Groenlândia.

## 4. Usar a Seção em Suas Páginas

Agora você pode usar a seção configurada nas páginas do seu site, assim como fez
em [um tutorial anterior](/docs/pt/getting-started/creating-a-new-page). É isso!
Aproveite para explorar este e outros apps no deco.cx!
