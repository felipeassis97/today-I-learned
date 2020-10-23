
def InserirFuncionario():    
    arq_grava = open('Funcionarios.txt', 'a+')
    matricula = int(input('Digite a matricula do funcionario: '))
    nome = input('Digite o nome do funcionario: ')
    cargo = input('Digite o cargo do funcionario: ')

    arq_grava.write('Matricula:' + str(matricula) + '\n')
    arq_grava.write('Nome:' + str(nome) + '\n')
    arq_grava.write('Cargo:' + str(cargo) + '\n')
   
    arq_grava.close()
    print('Funcionario inserido com sucesso!')


def PesquisarFuncionario(funcionario):   
    arq = open('Funcionarios.txt', 'r')
    leitura_arq = arq.readlines()
    encontrou = False
    for linha in leitura_arq:
        if (linha.find('Matricula') != -1):
            exibeFuncionario = False
            cod = linha.split(':')
            if (int(cod[1]) == int(funcionario)):
                exibeFuncionario = True
                encontrou = True
        if (exibeFuncionario==True):
            print(linha)
    if (encontrou == False):
        print('Funcionario não encontrado!')
        return encontrou
    arq.close()

def AlterarFuncionario(funcionario):
    arq = open('Funcionarios.txt', 'r')
    leitura_arq = arq.readlines()
    encontrou = False
    novo_arq = ""
    for linha in leitura_arq:
        if (linha.find('Matricula') != -1):
            cod = linha.split(':')
            if (int(cod[1]) == int(funcionario)):
                encontrou = True
        if (encontrou == True):
            
            if (linha.find('Nome') != -1):
                nome = input('Digite o novo nome: ')
                novo_arq = novo_arq + 'Nome:' + str(nome) + '\n'
            elif (linha.find('Cargo') != -1):
                cargo = input('Digite o novo cargo: ')
                novo_arq = novo_arq + 'Cargo:' + str(cargo) + '\n'
            else:
               novo_arq = novo_arq + linha
        else:
            novo_arq = novo_arq + linha
                        
    arq = open('Funcionarios.txt', 'w+')
    arq.write(novo_arq)    
    arq.close() 

def InserirSalario():
    arq_grava = open('Salarios.txt', 'a+')
    mat = int(input('Digite a matricula do funcionario que deseja procurar: '))
    PesquisarFuncionario(mat)    
    
    arq_grava.write('Matricula:' + str(mat) + '\n')
    salario = float(input('Digite o salario do funcionario: '))
    arq_grava.write('Salario:' + str(salario) + '\n')
    arq_grava.close()
    print('Salario inserido com sucesso!')

while True:
    print("""Qual sua ação no Sistema? 
          
    1 - Inserir Funcionario
       
    2 - Pesquisar um funcionario

    3 - Alterar um funcionario

    4 - Inserir salario 
    
    0 - Sair""")
    
    menu = int(input("Digite sua ação desejada: "))
    if menu == 0:
        break        
    elif menu == 1:
        InserirFuncionario() 
    
    elif menu == 2:
        PesquisarFuncionario(input('Digite a matricula do funcionario que deseja pesquisar: '))

    elif menu == 3:
        AlterarFuncionario(input('Digite a matricula do funcionario que deseja alterar: '))

    elif menu == 4:
        InserirSalario()


    else:
        print("Opcao invalida! Não foi possível identificar sua ação.")