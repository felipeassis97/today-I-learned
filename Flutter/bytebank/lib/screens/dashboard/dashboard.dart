import 'package:bytebank/screens/dashboard/saldo_card.dart';
import 'package:bytebank/screens/deposito/formulario.dart';
import 'package:flutter/material.dart';

class Dashboard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('ByteBank'),
      ),
      body: ListView(children: <Widget>[
        Align(alignment: Alignment.topCenter, child: SaldoCard()),
        ElevatedButton(
            onPressed: () {
              Navigator.push(context, MaterialPageRoute(builder: (context) {
                return FormularioDeposito();
              }));
            },
            child: Text('Receber Depósito')),

        //
      ]),
    );
  }
}
