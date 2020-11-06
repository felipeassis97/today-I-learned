# Crie uma classe Livro que possui os atributos titulo,
# editora, autor e preço. Adicione os métodos
# buscarPreco para obter o valor do preco do livro, o
# método alterarPreco para alterar o valor do preco do
# livro e o método para exibir as informações do livro
# (titulo, editora e autor). Crie um programa para criar
# um livro, alterar o valor do livro, obter o valor do livro
# e exibir os dados do livro.

from Livro import Livro

l1 = Livro('História do Brasil','Saraiva','João Neves', 199.90)
l1.exibirInformacoes()
l1.alterarPreco(79.90)
l1.buscarPreco()

l2 = Livro ('Era uma Vez', 'Editora Brasil', 'Augusto Cury', 129.90)
l2.exibirInformacoes()
l2.buscarPreco()
l2.alterarPreco(155.00)
l2.buscarPreco()
