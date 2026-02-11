sap.ui.define([
  "sap/ui/core/Core",
  "sap/ushell/Container"
], function (Core, Container) {
  "use strict";

  Core.ready().then(function () {
    // Fallback sementara: createRenderer (deprecated).
    // UI5 team acknowledges deprecation; tiada pengganti produksi buat masa ini.
    // Waiver TERHAD pada satu baris di bawah:
    /* ui5lint-disable-next-line no-deprecated-api */
    Container.createRenderer("fiori2", true).then(function (oRenderer) {
      oRenderer.placeAt("content");
    });
  });
});