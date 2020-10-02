import {Component, Input, OnInit} from '@angular/core';
import {SongDTO} from '../../../songbook';

@Component({
  selector: 'app-user-songs-panel',
  templateUrl: './user-songs-panel.component.html',
  styleUrls: ['./user-songs-panel.component.scss']
})
export class UserSongsPanelComponent implements OnInit {

  @Input()
  public songs: SongDTO[];

  @Input()
  public username: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}