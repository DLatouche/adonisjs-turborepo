export const rolesName = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;

export const roles = {
  admin: {
    id: rolesName.ADMIN,
    name: rolesName.ADMIN,
  },
  user: {
    id: rolesName.USER,
    name: rolesName.USER,
  },
} as const;

export type RoleId = keyof typeof rolesName;
export type Role = {
  id: (typeof rolesName)[RoleId];
  name: (typeof rolesName)[RoleId];
};
