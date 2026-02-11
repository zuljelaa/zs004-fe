sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zs004.zs004fe',
            componentId: 'ZS004ObjectPage',
            contextPath: '/ZS004'
        },
        CustomPageDefinitions
    );
});