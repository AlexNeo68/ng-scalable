import { Icon } from 'app/models/frontend/icon';

export type Value = string | number | boolean;
export interface ControlItem {
  label: string;
  value: Value;
  icon?: Icon;
}
