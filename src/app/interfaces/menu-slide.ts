export interface MenuSide {
    id?: string;
    name: string;
    icon?: string;
    routerLink?: string;
    hasSubMenu: boolean;
    parentId: string;
    depth: number;
  }
  