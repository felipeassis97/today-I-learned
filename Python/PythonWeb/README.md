# Exemplo de Python com micro-framework Flask
## Configuração de ambiente


### 📋 Pré-requisitos
  * ##### Pasta do Projeto

    * Criar uma pasta para o projeto manualmente no local de sua preferência ou atráves do terminal usando os comandos:
    Diretório onde será criada a pasta:
    ```
    cd ./caminhoOndeSeraCriadaPasta
    Exemplo:
    cd ./Desktop
    ```
    * Criando Pasta já com o diretórios mapeado:
    ```
    cd ./caminhoDaPastaCriada> mkdir nomeDaPasta
    ```
  * ##### Python
    * instalar Python:
    ```
    choco install phyton
    ```
    * Verificar versão instalada:
    ```
    python --version
    ```

### 🔧 Configuração de ambiente
  Obs.: Todos os comandos abaixo devem ser executados no diretório da pasta criada.
  Para navegar até o caminho utilize  comando:  
    ```
    cd ./caminho da pasta
    Ex.: cd ./Desktop/projetoPython
    ```

  * ##### Criar virtualenv
  
    ```
    virtualenv NomeEscolhido (Escolha um nome para seu ambiente virtual)
    ```
    Obs.: O comando virtualenv é nativo do Python a partir da versão 3.3
    
      * ###### Erro ao instalar virtualenv
         Obs.: Execute esta etapa somente se teve algum problema com a criação da virtualenv. Se sua criação ocorreu tudo bem, avance para a etapa "Ativar ambiente virtual"     
         Primeiro, verifique se o pip está atualizado, caso não esteja tente atualizá-lo, tente atualizar por este comando:
          ```
          python -m pip install --upgrade pip
         
          ```
         Após isso, tente executar de novo o comando:
           ```
           virtualenv NomeEscolhido (Escolha um nome para seu ambiente virtual)
           ```

         caso ainda não consiga realizar a instalação após a atualização e o erro persistir, tente utilizar o comando:
           ```
           pip3 install virtualenv
           ```
         E depois execute novamente o comando de instalação que deve resolver
           ```
           virtualenv NomeEscolhido (Escolha um nome para seu ambiente virtual)
           ```
           
  * #### Ativar ambiente virtual
    ```
    NomeEscolhido\Scripts\activate
    ```

  * #### Instalar o Flask
    ```
    pip install Flask
    ```




