# Spikes :books:
### Teclado Fechar ao clicar em parte da tela:
- Envolver toda tela em um Gesture Detector e no método onTap() tirar o foco do campo.
     ~~~flutter
     body: GestureDetector(
            onTap: () {
                FocusScope.of(context).requestFocus(new FocusNode());
            },
        child: (Conteúdo da tela)
     ~~~
### Submeter formulário com enter do teclado:
- Criar uma instância para pegar o estado atual do FocusNode.
     ~~~flutter
     final focus = FocusNode();
     ~~~
- Em todos os campos do formulário utilizar a propriedade TextInputAction.next.
    ~~~flutter
     TextFormField(
              textInputAction: TextInputAction.next,
     ~~~
-  Esta proprieade fará com que apareça o botão "Próximo" no teclado ao invés do Enter. 
No ultimo campo do formulário, não usar a propriedade citada acima e usar a propriedade onFieldSubmitted caso precise. Ela serve pra submeter o formulário através do Enter do teclado também.

    ~~~flutter
     onFieldSubmitted: (v){
                FocusScope.of(context).requestFocus(focus); //Usado pra fechar o tecaldo depois de Submeter
                //Passar o comportamento do submit do botão
     },
     ~~~
###  Fixar Botão no fim da tela e subir com o teclado:
- Utilizar propriedade do Scaffold bottomSheet e chamar o Widget do botão.
      
     ~~~flutter
     Scaffold(
              bottomSheet: primaryButtom(context),
     ~~~

###  Empurrar Widgets pra cima para apresentar apenas os campos e o Botão de submit:
- Para verificar a visibilidade do teclado, basta verificar para a viewInsetspropriedade de qualquer parte da árvore widget. O teclado é escondido quando viewInsets.bottom é igual a zero.
    
     ~~~flutter
    MediaQuery.of(context).viewInsets.bottom == 0 ? Widget : Widget
    //Se o teclado for igual a zero (Está fechado), mostra o widget, se for diferente não mostra.
     ~~~



