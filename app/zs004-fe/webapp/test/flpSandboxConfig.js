/* global window */
window["sap-ushell-config"] = {
  defaultRenderer: "fiori2",
  renderers: {
    fiori2: {
      componentData: { config: { enableSearch: false, rootIntent: "Shell-home" } }
    }
  },
  services: {
    NavTargetResolution: {
      config: { enableClientSideTargetResolution: true, allowTestUrlComponentConfig: true }
    },
    ClientSideTargetResolution: {
      adapter: { config: { inbounds: {
        "ZS004-display": {
          semanticObject: "ZS004",
          action: "display",
          title: "ZS004 FE",
          signature: { parameters: {}, additionalParameters: "allowed" },
          resolutionResult: {
            applicationType: "SAPUI5",
            additionalInformation: "SAPUI5.Component=zs004.zs004fe",
            url: "../"
          }
        }
      } } }
    },
    LaunchPage: {
      adapter: { config: {
        groups: [{
          id: "group_1",
          title: "My Apps",
          tiles: [{
            id: "tile_zs004",
            title: "ZS004 FE",
            size: "1x1",
            tileType: "sap.ushell.ui.tile.StaticTile",
            properties: { title: "ZS004 FE", targetURL: "#ZS004-display" }
          }]
        }]
      } }
    }
  }
};