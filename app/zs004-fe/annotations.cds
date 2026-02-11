using ZS004Service as service from '../../srv/ZS004Service';

/**
 * Fiori Elements (V4) Annotations for List Report + Object Page
 * Adjust property names (ID, Object, Status, CreatedAt, CreatedBy) to match your service entity definition.
 * If your entity name differs from 'ZS004', rename 'service.ZS004' below.
 */

annotate service.ZS004 with @(
  // ===== List Report columns =====
  UI.LineItem: [
    { $Type: 'UI.DataField', Value: ID,        Label: 'ID' },
    { $Type: 'UI.DataField', Value: Object,    Label: 'Object' },
    { $Type: 'UI.DataField', Value: Status,    Label: 'Status' },
    { $Type: 'UI.DataField', Value: CreatedAt, Label: 'Created At' },
    { $Type: 'UI.DataField', Value: CreatedBy, Label: 'Created By' }
  ],

  // ===== Object Page header =====
  UI.HeaderInfo: {
    TypeName       : 'Object',
    TypeNamePlural : 'Objects',
    Title          : { $Type: 'UI.DataField', Value: ID },
    Description    : { $Type: 'UI.DataField', Value: Object }
  },

  // ===== Object Page main content =====
  UI.Facets: [
    {
      $Type : 'UI.ReferenceFacet',
      Label : 'General',
      Target: '@UI.FieldGroup#General'
    }
  ],

  UI.FieldGroup#General: {
    Data: [
      { $Type: 'UI.DataField', Value: ID,        Label: 'ID' },
      { $Type: 'UI.DataField', Value: Object,    Label: 'Object' },
      { $Type: 'UI.DataField', Value: Status,    Label: 'Status' },
      { $Type: 'UI.DataField', Value: CreatedAt, Label: 'Created At' },
      { $Type: 'UI.DataField', Value: CreatedBy, Label: 'Created By' }
    ]
  },

  // ===== Optional: enable actions in FE (show buttons) if your service supports CUD =====
  // Capabilities.InsertRestrictions    : { Insertable    : true },
  // Capabilities.UpdateRestrictions    : { Updatable    : true },
  // Capabilities.DeleteRestrictions    : { Deletable    : true }
);