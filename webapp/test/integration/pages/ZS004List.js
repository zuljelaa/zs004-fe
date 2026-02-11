sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zs004.zs004fe',
            componentId: 'ZS004List',
            contextPath: '/ZS004'
        },
        CustomPageDefinitions
    );
});