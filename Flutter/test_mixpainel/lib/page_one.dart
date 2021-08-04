import 'package:flutter/material.dart';
import 'package:mixpanel_flutter/mixpanel_flutter.dart';
import 'package:test_mixpainel/page_two.dart';

class PageOne extends StatefulWidget {
  const PageOne({Key? key}) : super(key: key);

  @override
  _PageOneState createState() => _PageOneState();
}

class _PageOneState extends State<PageOne> {
  Mixpanel? mixpanel;

  @override
  void initState() {
    super.initState();
    initMixpanel();
  }

  Future<void> initMixpanel() async {
    mixpanel = await Mixpanel.init("ab0e52fa17d3d6bd826ca437e0a09db1",
        optOutTrackingDefault: false);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Page One'),
      ),
      body: Container(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              ElevatedButton(
                onPressed: () {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (context) => PageTwo()));

                  mixpanel!.track('Navegou da Page One para Page Two');
                  mixpanel!.flush();
                },
                child: Text('Next Page'),
              ),
              ElevatedButton(
                onPressed: () {
                  Navigator.pop(context);
                  mixpanel!.track('Retornou para Home');
                  mixpanel!.flush();
                },
                child: Text('Previous Page'),
              )
            ],
          ),
        ),
      ),
    );
  }
}
