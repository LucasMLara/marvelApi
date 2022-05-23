import { axiosClient } from './config';
import { CharacterDataWrapper } from './interface';

export * from './interface';

export async function characters() {
  try {
    const response = await axiosClient.get<CharacterDataWrapper>(
      '/characters',
    );
    return response.data;
  } catch (error) {
    return null;
  }
}
