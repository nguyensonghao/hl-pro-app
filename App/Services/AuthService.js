import { STORAGE_KEY } from '../Shared/Constants/Config';
import { setItem, getItem } from '../Shared/Helpers/StorageHelper';

export const saveToken = (token) => {
  return setItem(STORAGE_KEY.TOKEN, token);
}

export const getToken = async () => {
  return await getItem(STORAGE_KEY.TOKEN);
}