sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zs004/zs004fe/test/integration/pages/ZS004List",
	"zs004/zs004fe/test/integration/pages/ZS004ObjectPage"
], function (JourneyRunner, ZS004List, ZS004ObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zs004/zs004fe') + '/test/flp.html#app-preview',
        pages: {
			onTheZS004List: ZS004List,
			onTheZS004ObjectPage: ZS004ObjectPage
        },
        async: true
    });

    return runner;
});

