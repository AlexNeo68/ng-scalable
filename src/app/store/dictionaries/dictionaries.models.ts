import { ControlItem, Item } from 'app/models/frontend';
export { ControlItem, Item } from 'app/models/frontend';

export interface Dictionaries {
  skills: Dictionary;
  qualifications: Dictionary;
  specializations: Dictionary;
  roles: Dictionary;
  countries: Dictionary;
}

export interface Dictionary {
  items: Item[];
  controlItems: ControlItem[];
}
