import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

import 'color_components.dart';
import 'components.dart';

class ListAnnouncement extends StatefulWidget {
  ListAnnouncement(
      {Key key,
      @required this.title,
      @required this.description,
      @required this.phone,
      @required this.value})
      : super(key: key);
  final String title;
  final String description;
  final String phone;
  final String value;

  @override
  _ListAnnouncementState createState() => _ListAnnouncementState();
}

class _ListAnnouncementState extends State<ListAnnouncement> {
  final String icon = 'assets/images/job.svg';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Quebra Galho'),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.vertical(
            bottom: Radius.circular(15),
          ),
        ),
      ),
      body: SingleChildScrollView(
        child: Center(
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(32, 16, 32, 8),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    SvgPicture.asset(
                      icon,
                      width: 70,
                    ),
                    Padding(
                      padding: const EdgeInsets.fromLTRB(8, 8, 8, 0),
                      child: Text(
                        'Encontre o emprego ideal pra você!',
                        textAlign: TextAlign.center,
                        style: TextStyle(
                            fontSize: 16, color: ColorComponents.darkGray),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.fromLTRB(0, 24, 0, 8),
                      child: announcementCard(widget.title, widget.description,
                          widget.value, context),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
