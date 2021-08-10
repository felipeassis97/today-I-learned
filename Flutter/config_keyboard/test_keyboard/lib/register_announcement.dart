import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:test_keyboard/list_announcements.dart';

import 'components.dart';
import 'color_components.dart';

class RegisterAnnouncement extends StatefulWidget {
  RegisterAnnouncement({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _RegisterAnnouncementState createState() => _RegisterAnnouncementState();
}

class _RegisterAnnouncementState extends State<RegisterAnnouncement> {
  final _formKey = GlobalKey<FormState>();
  final String icon = 'assets/images/reparar.svg';
  final TextEditingController _controllerTitle = TextEditingController();
  final TextEditingController _controllerDescription = TextEditingController();
  final TextEditingController _controllerPhone = TextEditingController();
  final TextEditingController _controllerValue = TextEditingController();
  // List<String> _dropdownItems = [
  //   "Selecione uma categoria",
  //   "Beleza",
  //   "Construção Cívil",
  //   "Educação",
  //   "Saúde"
  // ];

  final focus = FocusNode();

  // List<DropdownMenuItem<String>> _dropdownMenuItems;
  // String _selectedItem;

  // void initState() {
  //   super.initState();
  //   _dropdownMenuItems = buildDropDownMenuItems(_dropdownItems);
  //   _selectedItem = _dropdownMenuItems[0].value;
  // }

  // List<DropdownMenuItem<String>> buildDropDownMenuItems(List listItems) {
  //   List<DropdownMenuItem<String>> items = [];
  //   for (String listItem in listItems) {
  //     items.add(
  //       DropdownMenuItem(
  //         child: Text(
  //           listItem,
  //           style: TextStyle(
  //               color: ColorComponents.darkGray,
  //               fontSize: 14,
  //               fontWeight: FontWeight.w500),
  //         ),
  //         value: listItem,
  //       ),
  //     );
  //   }
  //   return items;
  // }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomSheet: buttom(context),
      resizeToAvoidBottomInset: true,
      appBar: AppBar(
        title: Text('Cadastrar anúncio'),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.vertical(
            bottom: Radius.circular(15),
          ),
        ),
      ),
      body: GestureDetector(
        onTap: () {
          FocusScope.of(context).requestFocus(new FocusNode());
        },
        child: SingleChildScrollView(
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                MediaQuery.of(context).viewInsets.bottom == 0
                    ? Padding(
                        padding: const EdgeInsets.fromLTRB(32, 16, 32, 8),
                        child: Column(
                          children: [
                            SvgPicture.asset(icon),
                            Padding(
                              padding: const EdgeInsets.fromLTRB(8, 8, 8, 0),
                              child: Text(
                                'Para criar seu anúncio, vamos precisar de algumas informações...',
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                    fontSize: 16,
                                    color: ColorComponents.darkGray),
                              ),
                            ),
                          ],
                        ),
                      )
                    : Text(''),
                Center(
                  child: Column(
                    mainAxisSize: MainAxisSize.max,
                    children: [
                      Form(
                        key: _formKey,
                        child: Padding(
                          padding: const EdgeInsets.all(16.0),
                          child: Column(
                            children: [
                              // Padding(
                              //   padding: const EdgeInsets.all(8.0),
                              //   child: Container(
                              //     width: 300,
                              //     decoration: BoxDecoration(
                              //         borderRadius: BorderRadius.circular(10.0),
                              //         border: Border.all(
                              //             color: ColorComponents.mediumGray)),
                              //     child: Center(
                              //       child: DropdownButtonHideUnderline(
                              //         child: DropdownButton(
                              //             iconEnabledColor:
                              //                 ColorComponents.purple,
                              //             value: _selectedItem,
                              //             items: _dropdownMenuItems,
                              //             onChanged: (value) {
                              //               setState(() {
                              //                 _selectedItem = value;
                              //               });
                              //             }),
                              //       ),
                              //     ),
                              //   ),
                              // ),
                              Padding(
                                padding:
                                    const EdgeInsets.fromLTRB(16, 8, 16, 8),
                                child: TextFormField(
                                  textInputAction: TextInputAction.next,
                                  controller: _controllerTitle,
                                  keyboardType: TextInputType.multiline,
                                  decoration: InputDecoration(
                                    border: OutlineInputBorder(
                                      borderRadius: BorderRadius.circular(10),
                                    ),
                                    prefixIcon: Icon(Icons.title),
                                    labelText: 'Título',
                                    labelStyle: TextStyle(
                                        fontSize: 14,
                                        fontWeight: FontWeight.w500,
                                        color: ColorComponents.mediumGray),
                                    hintStyle: TextStyle(
                                      fontSize: 12,
                                      fontWeight: FontWeight.w100,
                                    ),
                                    hintText: 'Informe o título do seu anúncio',
                                    errorStyle: TextStyle(
                                      color: ColorComponents.purple,
                                      fontSize: 12,
                                      fontWeight: FontWeight.w400,
                                    ),
                                  ),
                                  validator: (value) {
                                    if (value == null || value.isEmpty) {
                                      return 'Preencha o campo!';
                                    }
                                    return null;
                                  },
                                ),
                              ),
                              // Padding(
                              //   padding: const EdgeInsets.fromLTRB(16, 8, 16, 8),
                              //   child: TextFormField(
                              //     textInputAction: TextInputAction.next,
                              //     controller: _controllerDescription,
                              //     maxLines: 4,
                              //     keyboardType: TextInputType.multiline,
                              //     decoration: InputDecoration(
                              //       border: OutlineInputBorder(
                              //         borderRadius: BorderRadius.circular(10),
                              //       ),
                              //       prefixIcon: Icon(Icons.description),
                              //       labelText: 'Descrição',
                              //       labelStyle: TextStyle(
                              //           fontSize: 14,
                              //           fontWeight: FontWeight.w700,
                              //           color: ColorComponents.mediumGray),
                              //       hintStyle: TextStyle(
                              //         fontSize: 12,
                              //         fontWeight: FontWeight.w100,
                              //       ),
                              //       hintText:
                              //           'Informe a descrição do seu anúncio',
                              //       errorStyle: TextStyle(
                              //         color: ColorComponents.purple,
                              //         fontSize: 12,
                              //         fontWeight: FontWeight.w400,
                              //       ),
                              //     ),
                              //     validator: (value) {
                              //       if (value == null || value.isEmpty) {
                              //         return 'Preencha o campo!';
                              //       }
                              //       return null;
                              //     },
                              //   ),
                              // ),
                              Padding(
                                padding:
                                    const EdgeInsets.fromLTRB(16, 8, 16, 8),
                                child: TextFormField(
                                  textInputAction: TextInputAction.next,
                                  controller: _controllerPhone,
                                  keyboardType: TextInputType.number,
                                  decoration: InputDecoration(
                                    border: OutlineInputBorder(
                                      borderRadius: BorderRadius.circular(10),
                                    ),
                                    prefixIcon: Icon(Icons.phone),
                                    labelText: 'Contato',
                                    labelStyle: TextStyle(
                                        fontSize: 14,
                                        fontWeight: FontWeight.w700,
                                        color: ColorComponents.mediumGray),
                                    hintStyle: TextStyle(
                                      fontSize: 12,
                                      fontWeight: FontWeight.w100,
                                    ),
                                    hintText: 'Informe um número de telefone',
                                    errorStyle: TextStyle(
                                      color: ColorComponents.purple,
                                      fontSize: 12,
                                      fontWeight: FontWeight.w400,
                                    ),
                                  ),
                                  validator: (value) {
                                    if (value == null || value.isEmpty) {
                                      return 'Preencha o campo!';
                                    }
                                    return null;
                                  },
                                ),
                              ),
                              Padding(
                                padding:
                                    const EdgeInsets.fromLTRB(16, 8, 16, 8),
                                child: TextFormField(
                                  onFieldSubmitted: (v) {
                                    FocusScope.of(context).requestFocus(focus);
                                    if (_formKey.currentState.validate()) {
                                      ScaffoldMessenger.of(context)
                                          .showSnackBar(SnackBar(
                                              content: Text(
                                        'Anúncio efetuado com sucesso!',
                                      )));
                                      Navigator.push(
                                          context,
                                          MaterialPageRoute(
                                              builder: (context) =>
                                                  ListAnnouncement(
                                                    title:
                                                        _controllerTitle.text,
                                                    description:
                                                        _controllerDescription
                                                            .text,
                                                    phone:
                                                        _controllerPhone.text,
                                                    value:
                                                        _controllerValue.text,
                                                  )));
                                    }
                                  },
                                  controller: _controllerValue,
                                  keyboardType: TextInputType.number,
                                  decoration: InputDecoration(
                                    border: OutlineInputBorder(
                                      borderRadius: BorderRadius.circular(10),
                                    ),
                                    prefixIcon: Icon(Icons.monetization_on),
                                    labelText: 'Valor',
                                    labelStyle: TextStyle(
                                        fontSize: 14,
                                        fontWeight: FontWeight.w700,
                                        color: ColorComponents.mediumGray),
                                    hintStyle: TextStyle(
                                      fontSize: 12,
                                      fontWeight: FontWeight.w100,
                                    ),
                                    hintText: 'Informe um valor',
                                    errorStyle: TextStyle(
                                      color: ColorComponents.purple,
                                      fontSize: 12,
                                      fontWeight: FontWeight.w400,
                                    ),
                                  ),
                                  validator: (value) {
                                    if (value == null || value.isEmpty) {
                                      return 'Preencha o campo!';
                                    }
                                    return null;
                                  },
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                      // Center(
                      //   child: Padding(
                      //     padding: const EdgeInsets.fromLTRB(40, 8, 40, 8),
                      //     child: buttom(context),
                      //   ),
                      // ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),

      // floatingActionButton: FloatingActionButton(
      //   onPressed: () {
      //     FocusScope.of(context).unfocus();
      //   },
      //   child: Icon(Icons.add),
      // ),
    );
  }

  Widget buttom(context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
      child: PrimaryButtonComponent(
        label: 'ANUNCIAR',
        onPressed: () {
          if (_formKey.currentState.validate()) {
            ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                content: Text(
              'Anúncio efetuado com sucesso!',
            )));
            Navigator.push(
                context,
                MaterialPageRoute(
                    builder: (context) => ListAnnouncement(
                          title: _controllerTitle.text,
                          description: _controllerDescription.text,
                          phone: _controllerPhone.text,
                          value: _controllerValue.text,
                        )));
          }
        },
      ),
    );
  }

  itemDrop(String text) {
    text = Text(
      "$text",
      style: TextStyle(color: ColorComponents.mediumGray),
    ).toString();
    return text;
  }
}
