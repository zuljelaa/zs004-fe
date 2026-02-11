sap.ui.define(() => {
  "use strict";
  return {
    name: "RICEFW App Tests",
    defaults: {
      page: "test-resources/zs004/fe/unit/unitTests.qunit"
    },
    tests: {
      "unit/all": {
        title: "Unit tests"
      }
      // "integration/all": { ... }  // kalau ada OPA
    }
  };
});
