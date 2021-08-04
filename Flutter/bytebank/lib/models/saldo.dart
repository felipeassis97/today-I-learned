import 'package:flutter/cupertino.dart';

class Saldo extends ChangeNotifier {
  double valor;
  Saldo(this.valor);

  void depositar(double valor) {
    this.valor += valor;
    notifyListeners();
  }

  void sacar(double valor) {
    this.valor -= valor;
    notifyListeners();
  }

  @override
  String toString() {
    return 'R\$ $valor';
  }
}
