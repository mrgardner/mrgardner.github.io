import {Component} from "@angular/core";
import SpotifyService from 'angular2-spotify/angular2-spotify';
import {PlaylistNameFilterPipe} from "./playlist-name.pipe";
import {TrackNameFilterPipe} from "./track-name.filter";
import {PlaylistOwnerFilterPipe} from "./playlist-owner.pipe";
@Component({
    selector: 'my-music',
    templateUrl: 'dev/music/music.html',
    styleUrls: ['assets/scss/music.scss'],
    pipes: [PlaylistNameFilterPipe, TrackNameFilterPipe, PlaylistOwnerFilterPipe]

})
export class MusicComponent {
    private user: Object;
    private userId: string;
    private playlists: Object;
    private playlistId: Object;
    private trackList: Object;
    private playlistOwner: Object;
    private showTrackList: boolean;
    private showTrackPlayer: boolean;
    private trackId: string;
    private trackUrl: string;

    constructor(private spotifyService: SpotifyService) {

    }

    login() {
        this.spotifyService.login().subscribe(

            token => {
                this.spotifyService.getCurrentUser()
                    .subscribe(data=> { this.userId = data.id, this.user = data},
                        err=> console.error(err));

            },
            err => console.error(err),
            () => { });
    }

    getPlaylists() {
        this.spotifyService.getUserPlaylists(this.userId,33).subscribe(
            data => {
                this.playlists = data;
                this.playlistOwner = data.items.name;
            }
        )
    }


    getTrackList(id: string, user: string) {
        this.spotifyService
            .getPlaylistTracks(user, id)
            .subscribe(data => {

                this.trackList = data;
                this.playlistId = id;
                this.showTrackList = !this.showTrackList;
            });

    }

    playTrack(id: string) {
        this.trackId = id;
        this.trackUrl = 'https://embed.spotify.com/?uri=spotify%3Atrack%3A' + id;
        this.showTrackPlayer = true;
    }

    closePlayer() {
        this.showTrackPlayer = false;
    }
}