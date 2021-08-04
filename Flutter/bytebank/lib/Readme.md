- Importar Provider
- Extender a classe monitorada com ChangeNotifier

- Envolver o app em um ChangeNotifierProvider ou MultiProvider
    Ex.: ChangeNotifierProvider(
      create: (context) => Saldo(0),//Create é a classe que será monitorada
      child: BytebankApp(), // Onde a informação ficará disponível
    )


- Se fosse o caso de usar MultiProvider
    Ex.: MultiProvider(
  providers: [
    Provider<Something>(create: (_) => Something()),
    Provider<SomethingElse>(create: (_) => SomethingElse()),
    Provider<AnotherThing>(create: (_) => AnotherThing()),
  ],
  child: BytebankApp(),
)

- Para consumir o valor que está no provider
    Ex.: Consumer<Saldo>(                                //Consumer da classe monitorada
          builder: (context, valor, child) {            //Builder é o que será construido, o contexto, o valor que esta sendo monitorado lá na classe e um child que era buildar este valor 
            return Text(valor.toString()); //Child construido
          },
        ),

- Já para simplesmente atualizar o valor, podemos usar Provider.
    Ex.: Provider.of<Saldo>(context, listen: false).depositar(valor);//Pega um valor e passa para O método depositar da Model Saldo

