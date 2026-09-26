# 🎯 VidFlow

**Aplicação web para exibição e filtragem de vídeos com consumo de API fake**  
*Criado durante o curso Alura - JavaScript: Consumindo e tratando dados de uma API*

---

## 📋 Sobre o Projeto

O **VidFlow** é uma plataforma inspirada na interface do YouTube, focada no consumo dinâmico de dados e manipulação do DOM em tempo real. O projeto simula uma API local de vídeos utilizando `json-server` para realizar requisições assíncronas e entregar funcionalidades de busca e layout responsivo.

## ✨ Funcionalidades

### ✅ **Consumo de API Assíncrono**
- Integração com `json-server` utilizando a Fetch API
- Uso moderno de `async/await` e tratamento de erros com `try...catch`
- Injeção dinâmica de vídeos na interface via JavaScript

### ✅ **Pesquisa em Tempo Real**
- Filtro de vídeos por título acionado pelo evento de entrada (`input`)
- Busca case-insensitive adaptada para caracteres maiúsculos e minúsculos
- Otimização para restaurar a lista completa ao limpar o campo de busca

### ✅ **Navegação e Layout Adaptável**
- Sidebar fixa com atalhos de navegação e inscrições
- Barra superior de categorias com rolagens horizontal e botão deslizante funcional
- Grid responsivo para a exibição dos cards de vídeo

### ✅ **Design Responsivo**
- Interface estruturada para funcionar em dispositivos mobile, tablets e desktops
- Utilização de Flexbox e CSS Grid para organização dos elementos
- Ocultação inteligente de elementos da barra lateral em telas menores

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- **HTML** — Estruturação semântica da aplicação
- **CSS** — Estilização, layout responsivo e variáveis para padronização de cores
- **JavaScript** — Consumo da API, manipulação do DOM e lógica de filtragem

### **Backend & Ferramentas**
- **Node.js** — Ambiente de execução para dependências de desenvolvimento
- **JSON Server** — Mock de API RESTful local para fornecimento do feed de vídeos
- **VS Code** — Ambiente de desenvolvimento integrado

## 🎓 Contexto Educacional

Este projeto foi desenvolvido durante o curso **JavaScript: Consumindo e tratando dados de uma API** da plataforma **Alura**, aplicando conceitos como:

- Estruturação de requisições assíncronas (`Promises`, `fetch`, `async/await`)
- Tratamento de exceções e exibição de feedbacks de erro
- Manipulação de dados de arquivos JSON
- Filtros dinâmicos e eventos do DOM

---

## 👨‍💻 Desenvolvido por

**Lucas Grem**  
Estudante de Engenharia de Software