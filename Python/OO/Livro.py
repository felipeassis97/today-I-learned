class Livro:
    def __init__ (self,titulo,editora,autor,preco):
        self.titulo=titulo
        self.editora=editora
        self.autor=autor
        self.preco=preco

    def getTitulo(self):
        return self.titulo
    def setTitulo(self, titulo):
        self.titulo = titulo
    
    def getEditora(self):
        return self.editora
    def setEditora(self, editora):
        self.editora = editora

    def getAutor(self):
        return self.autor
    def setAutor(self, autor):
        self.autor = autor

    def getPreco(self):
        return self.preco
    def setPreco(self, preco):
        self.preco = preco

    
    def buscarPreco(self):
        print("---CONSULTAR PREÇO---")
        print(f'Preço R$ {self.preco}')
        print ('--------------------')
        print ('')

    def alterarPreco(self, preco):
        print("---ALTERAR PREÇO---")
        print(f'Livro: {self.titulo}')
        print(f'Preço anterior: R$ {self.preco}')
        self.preco = preco
        print(f'Novo preço: R$ {self.preco}')
        print ('-------------------')
        print ('')

    def exibirInformacoes(self):
        print("---INFORMAÇOES---")
        print(f'Titulo: {self.titulo}')
        print(f'Editora: {self.editora}')
        print(f'Autor: {self.autor}')
        print ('------------------')
        print ('')
       

   
   






