import {Component, OnInit} from '@angular/core';
import {SongDTO, SongRestControllerService} from '../..';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.scss']
})
export class SongEditComponent implements OnInit {

  song: SongDTO = {
    author: {
      id: -1,
      name: ''
    },
    averageRating: 0,
    category: {
      id: -1,
      name: ''
    },
    coauthors: [],
    creationTime: '',
    guitarTabs: '',
    id: -1,
    lyrics: '',
    tags: [],
    title: '',
    trivia: ''
  };

  constructor(private songRestControllerService: SongRestControllerService, private route: ActivatedRoute, private router: Router, snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.keys.length > 0) {
        this.songRestControllerService.getByIdUsingGET3(+params.get('id')).subscribe(res => this.song = res);
      }
    });
  }

  cancel() {
    this.goToDetailScreen();
  }

  saveSong() {
    this.songRestControllerService.updateUsingPUT4(this.song).subscribe(res => this.goToDetailScreen());
  }

  goToDetailScreen() {
    this.router.navigateByUrl('song/' + this.song.id);
  }
}