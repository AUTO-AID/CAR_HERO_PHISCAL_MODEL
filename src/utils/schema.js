import { collections } from "../data/collections";
import {
  collectionNotesAr,
  collectionPurposeAr,
  fieldArabic,
  relationshipArabic,
} from "../data/translations";

export const featureLabels = [
  "All",
  ...Array.from(new Set(collections.map((item) => item.feature))),
];

export function collectionPurpose(item) {
  return collectionPurposeAr[item.collection] || item.purpose;
}

export function collectionNote(item) {
  return collectionNotesAr[item.collection] || item.note;
}

export function fieldDescription(field) {
  return fieldArabic[field.name] || field.description;
}

export function relationDescription(source, target, fallback) {
  return relationshipArabic[`${source}->${target}`] || fallback;
}

export function cleanType(type) {
  return type.replace(/\s*->\s*.*/, "");
}

export function toFields(fields) {
  return fields.map(([name, type, description]) => ({ name, type, description }));
}
