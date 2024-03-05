export default interface UserSecrets {
  userId?: string;
  level?: LEVELS;
}

export enum LEVELS {
  'admin',
  'collaborator',
  'client',
}
