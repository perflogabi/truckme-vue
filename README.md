# Projeto TruckMe

## Visão Geral

O projeto TruckMe é um site desenvolvido em Vue.js como parte de um teste técnico para a empresa TruckMe, especializada em transporte e logística. Utiliza componentes Vue.js para as seções principais do site, como Header, Banner, About, Services, Gallery e Contact.

## Componentes

### Header

O componente Header é responsável pela navegação do site, incluindo um menu responsivo que se adapta a diferentes tamanhos de tela. O menu fecha automaticamente ao selecionar uma seção.

### Banner

O componente Banner exibe um banner principal com uma mensagem de boas-vindas e informações sobre a empresa.

### About

O componente About apresenta informações sobre a empresa TruckMe, incluindo sua missão e visão. A função "Saiba Mais" expande o texto para fornecer detalhes adicionais sobre a empresa.

### Services

O componente Services lista os serviços oferecidos pela empresa TruckMe, com descrições e preços.

### Gallery

O componente Gallery exibe uma galeria de imagens relacionadas aos serviços da TruckMe, com botões de navegação "Anterior" e "Próximo" para visualizar as imagens.

### Contact

O componente Contact exibe um formulário de contato onde os usuários podem enviar mensagens para a empresa TruckMe. Inclui validação de formulário para garantir que todos os campos sejam preenchidos corretamente antes da submissão.

## Detalhes de Implementação

- **Botão "Saiba Mais" no About:** Implementado para oferecer uma experiência de usuário onde os detalhes adicionais são exibidos de forma expansível, mantendo a interface limpa e informativa.
  
- **Validação do Formulário de Contato:** Utilizada para assegurar que todos os campos obrigatórios sejam preenchidos corretamente antes de permitir a submissão do formulário, melhorando a usabilidade e evitando dados inválidos.

- **Botões "Anterior" e "Próximo" na Galeria:** Funcionalidade implementada para facilitar a navegação entre as imagens da galeria, garantindo uma experiência intuitiva e fluida para o usuário.

- **Menu Responsivo:** Configurado para fechar automaticamente ao selecionar uma seção do site, proporcionando uma navegação mais limpa e eficiente em dispositivos móveis e desktops.

## Testes Unitários e Qualidade de Código

Para garantir a robustez e qualidade do código, foram escritos testes unitários usando Jest e Vue Test Utils. Além disso, a análise de qualidade do código foi realizada utilizando ESLint para manter conformidade com os padrões de codificação.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


