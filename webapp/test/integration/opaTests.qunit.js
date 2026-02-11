sap.ui.define(() => {
  "use strict";
  return {
    name: "OPA Tests",
    defaults: {
      // Tukar ke entry modul journeys sebenar projek kau jika berbeza
      page: "test-resources/zs004/zs004fe/test/integration/AllJourneys"
    },
    tests: {
      "integration/journeys": { title: "Integration journeys" }
    }
  };
});