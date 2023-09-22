export interface Weather {
  resourceType: string;
  id: string;
  meta: Meta;
  identifier?: IdentifierEntity[] | null;
  orderable: boolean;
  referencedItem: ReferencedItem;
  status: string;
  validityPeriod: ValidityPeriod;
}

export interface Meta {
  versionId: string;
  lastUpdated: string;
  source: string;
  profile?: string[] | null;
}

export interface IdentifierEntity {
  system: string;
  value: string;
}

export interface ReferencedItem {
  extension?: ExtensionEntity[] | null;
}
export interface ExtensionEntity {
  url: string;
  valueReference: ValueReference;
}

export interface ValueReference {
  reference: string;
  display: string;
}

export interface ValidityPeriod {
  start: string;
}
