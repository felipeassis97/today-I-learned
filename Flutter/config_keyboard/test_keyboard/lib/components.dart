import 'package:community_material_icon/community_material_icon.dart';
import 'package:flutter/material.dart';
import 'package:test_keyboard/register_announcement.dart';

import 'color_components.dart';

class PrimaryButtonComponent extends StatelessWidget {
  final Function onPressed;
  final String label;

  const PrimaryButtonComponent(
      {Key key, @required this.onPressed, @required this.label})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      height: 56,
      decoration: BoxDecoration(
        color: Colors.red,
        borderRadius: BorderRadius.circular(10.0),
      ),
      child: ElevatedButton(
        style: ButtonStyle(
          elevation: MaterialStateProperty.all(0),
          backgroundColor: MaterialStateProperty.all(
            Theme.of(context).primaryColor,
          ),
          shape: MaterialStateProperty.all<RoundedRectangleBorder>(
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(10))),
        ),
        onPressed: () => onPressed(),
        child: Text(
          '$label',
          style: TextStyle(
            fontWeight: FontWeight.w700,
            color: Colors.white,
            fontSize: 14,
          ),
        ),
      ),
    );
  }
}

Widget announcementCard(
    String title, String description, String value, context) {
  return InkWell(
    onTap: () => (Navigator.push(context,
        MaterialPageRoute(builder: (context) => RegisterAnnouncement()))),
    child: Padding(
      padding: EdgeInsets.fromLTRB(0, 6, 0, 6),
      child: Container(
        decoration: BoxDecoration(
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.1),
              blurRadius: 10,
            ),
          ],
        ),
        width: double.infinity,
        height: 230,
        child: Card(
          margin: EdgeInsets.all(0),
          elevation: 0,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(10),
          ),
          child: Padding(
            padding: EdgeInsets.all(16),
            child: Stack(children: [
              Positioned(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                    // announcementTypeTag(announcement.announcementType),
                    Padding(
                        padding: EdgeInsets.fromLTRB(0, 8, 0, 8),
                        child: Row(
                          children: [
                            Text(
                              title,
                              style: TextStyle(
                                  fontSize: 16,
                                  color: ColorComponents.darkGray,
                                  fontWeight: FontWeight.bold),
                            ),
                            Padding(
                              padding: const EdgeInsets.only(left: 32),
                              child: Row(
                                children: [
                                  Icon(
                                    Icons.monetization_on_outlined,
                                    color: ColorComponents.purple,
                                  ),
                                  Text(
                                    value,
                                    style: TextStyle(
                                        fontSize: 16,
                                        color: ColorComponents.darkGray,
                                        fontWeight: FontWeight.w400),
                                  )
                                ],
                              ),
                            )
                          ],
                        )),
                    Center(
                        child: Text(
                      description,
                      style: TextStyle(
                          fontSize: 16,
                          color: ColorComponents.darkGray,
                          fontWeight: FontWeight.w400),
                    )),
                    Center(
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Text(
                          'Contatos: ',
                          style: TextStyle(
                              fontSize: 16,
                              color: ColorComponents.darkGray,
                              fontWeight: FontWeight.w500),
                        ),
                      ),
                    ),
                    SizedBox(width: 8),

                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Row(
                        children: [
                          Container(
                            width: 50,
                            height: 50,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(10),
                              border: Border(
                                top: BorderSide(
                                    width: 1.0, color: Colors.orange[400]),
                                left: BorderSide(
                                    width: 1.0, color: Colors.orange[400]),
                                right: BorderSide(
                                    width: 1.0, color: Colors.orange[400]),
                                bottom: BorderSide(
                                    width: 1.0, color: Colors.orange[400]),
                              ),
                            ),
                            child: Icon(
                              CommunityMaterialIcons.whatsapp,
                              color: Colors.orange[400],
                              size: 32,
                            ),
                          ),
                          SizedBox(width: 8),
                          Container(
                            width: 50,
                            height: 50,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(10),
                              border: Border(
                                top: BorderSide(
                                    width: 1.0, color: Colors.orange[400]),
                                left: BorderSide(
                                    width: 1.0, color: Colors.orange[400]),
                                right: BorderSide(
                                    width: 1.0, color: Colors.orange[400]),
                                bottom: BorderSide(
                                    width: 1.0, color: Colors.orange[400]),
                              ),
                            ),
                            child: Icon(
                              Icons.phone_in_talk_rounded,
                              size: 32,
                              color: Colors.orange[400],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              Align(
                alignment: Alignment.bottomRight,
                // child: coralParagraph14TextAlignRight("VER MAIS")
              )
            ]),
          ),
        ),
      ),
    ),
  );
}

// Container announcementTypeTag(int? type) {
//   String text;

//   int color;
//   if (type == AnnouncementsType.hire) {
//     text = "Contrata-se";
//     color = 0xff7540EE;
//   } else if ((type == AnnouncementsType.job)) {
//     text = "Busco emprego";
//     color = 0xff28D3EA;
//   } else {
//     text = "Meu negócio";
//     color = 0xffED9A00;
//   }

//   return Container(
//     decoration: BoxDecoration(
//       borderRadius: BorderRadius.circular(4),
//       border: Border(
//         top: BorderSide(width: 1.0, color: Color(color)),
//         left: BorderSide(width: 1.0, color: Color(color)),
//         right: BorderSide(width: 1.0, color: Color(color)),
//         bottom: BorderSide(width: 1.0, color: Color(color)),
//       ),
//     ),
//     child: Padding(
//       padding: EdgeInsets.fromLTRB(8, 4, 8, 4),
//       child: Text(
//         text,
//         style: TextStyle(
//           color: Color(color),
//           fontSize: 12,
//           fontWeight: FontWeight.w600,
//         ),
//       ),
//     ),
//   );
// }
