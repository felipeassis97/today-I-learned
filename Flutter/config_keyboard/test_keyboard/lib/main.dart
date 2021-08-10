import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:test_keyboard/color_components.dart';
import 'package:test_keyboard/register_announcement.dart';

void main() {
  runApp(QuebraGalho());
}

class QuebraGalho extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Quebra Galho',
      theme: ThemeData(
        primaryColor: ColorComponents.purple,
        textTheme: GoogleFonts.nunitoTextTheme(
          Theme.of(context).textTheme,
        ),
      ),
      home: RegisterAnnouncement(title: 'Cadastrar anúncio'),
    );
  }
}
