import 'package:bytebank/models/saldo.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class SaldoCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: EdgeInsets.all(20.0),
        child: Consumer<Saldo>(
          builder: (context, valor, child) {
            return Text(valor.toString());
          },
        ),
      ),
    );
  }
}
