from flask import Flask, render_template, request, redirect, session, flash, url_for
from Pesquisa import Pesquisa
app = Flask(__name__)

pesquisa_satisfacao = []

@app.route('/')
@app.route('/index')
def index():
    return render_template('lista.html', listas=pesquisa_satisfacao)
    
@app.route('/cadastro')
def novo():
    return render_template('cadastro.html')

@app.route('/salvar', methods=['post',])
def salvar():
    nome = request. form['nome']
    sobrenome = request. form['sobrenome']
    idade = request. form['idade']
    sexo = request. form["sexo"]
    satisfacao = request. form["satisfacao"]
    pesquisa = Pesquisa(nome, sobrenome, idade, sexo, satisfacao)
    
    pesquisa_satisfacao.append(pesquisa)    
    return redirect(url_for('index'))

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/entrar', methods=['POST',])
def entrar():
    return redirect(url_for('index'))

app.run()
