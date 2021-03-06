import {PlaylistDTO, SongDTO} from '../songbook';

/**
 * Interface of current user's data: songs, playlists, added songs, edited songs
 */
export interface UserSongsData {
  userId: number;
  songs: SongDTO[];
  added: SongDTO[];
  edited: SongDTO[];
  playlists: PlaylistDTO[];
}
