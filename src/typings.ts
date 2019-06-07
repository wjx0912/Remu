export type TagId = string;
export type RepoId = number | string;
export type Token = string;

export interface ILanguages {
  name: string;
  count: number;
}

export interface ITag {
  id: TagId;
  name: string;
}

export const STORAGE_TAGS = 'tags';
export const STORAGE_REPO = 'repoWithTags';
export const STORAGE_TOKEN = 'token';
export const STORAGE_GIST_ID = 'gistId';
export const STORAGE_GIST_UPDATE_TIME = 'updateAt';

export const IS_UPDATE_LOCAL = 'is_update_local';

export interface ITagsAction {
  type: 'add' | 'delete' | 'create';
  payload: { repoId: RepoId; tag: ITag };
  selectedTagIds?: TagId[];
}

export interface IRepoWithTag {
  [repoId: string]: TagId[];
}