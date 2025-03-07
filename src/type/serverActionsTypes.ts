export type PropertyFormState =
  | {
      errors?: {
        type?: string[];
        label?: string[];
        name?: string[];
        options?: string[];
      };
      message?: string;
    }
  | undefined;

export type CityFormState =
  | {
      errors?: {
        code?: string[];
        slug?: string[];
        name?: string[];
      };
      message?: string;
    }
  | undefined;

export type BadgeFormState =
  | {
      errors?: {
        icon?: string[];
        title?: string[];
      };
      message?: string;
    }
  | undefined;

export interface DeleteFormState {
  message?: string;
}
