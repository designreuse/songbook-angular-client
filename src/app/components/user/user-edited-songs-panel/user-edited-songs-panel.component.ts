import {Component, Input, OnInit} from '@angular/core';
import {SongDTO} from '../../../songbook';

@Component({
  selector: 'app-user-edited-songs-panel',
  templateUrl: './user-edited-songs-panel.component.html',
  styleUrls: ['./user-edited-songs-panel.component.scss']
})
export class UserEditedSongsPanelComponent implements OnInit {

  @Input()
  public songs: SongDTO[];

  @Input()
  public username: string;

  public columns: string[] = ['author', 'title', 'average rating', 'category'];

  constructor() {
  }

  ngOnInit(): void {
  }

  openSongDetails(id: number) {

  }

}
