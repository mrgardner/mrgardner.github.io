System.register(["@angular/core", 'angular2-spotify/angular2-spotify', "./playlist-name.pipe", "./track-name.filter", "./playlist-owner.pipe"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, angular2_spotify_1, playlist_name_pipe_1, track_name_filter_1, playlist_owner_pipe_1;
    var MusicComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_spotify_1_1) {
                angular2_spotify_1 = angular2_spotify_1_1;
            },
            function (playlist_name_pipe_1_1) {
                playlist_name_pipe_1 = playlist_name_pipe_1_1;
            },
            function (track_name_filter_1_1) {
                track_name_filter_1 = track_name_filter_1_1;
            },
            function (playlist_owner_pipe_1_1) {
                playlist_owner_pipe_1 = playlist_owner_pipe_1_1;
            }],
        execute: function() {
            MusicComponent = (function () {
                function MusicComponent(spotifyService) {
                    this.spotifyService = spotifyService;
                }
                MusicComponent.prototype.login = function () {
                    var _this = this;
                    this.spotifyService.login().subscribe(function (token) {
                        _this.spotifyService.getCurrentUser()
                            .subscribe(function (data) { _this.userId = data.id, _this.user = data; }, function (err) { return console.error(err); });
                    }, function (err) { return console.error(err); }, function () { });
                };
                MusicComponent.prototype.getPlaylists = function () {
                    var _this = this;
                    this.spotifyService.getUserPlaylists(this.userId, 33).subscribe(function (data) {
                        _this.playlists = data;
                        _this.playlistOwner = data.items.name;
                    });
                };
                MusicComponent.prototype.getTrackList = function (id, user) {
                    var _this = this;
                    this.spotifyService
                        .getPlaylistTracks(user, id)
                        .subscribe(function (data) {
                        _this.trackList = data;
                        _this.playlistId = id;
                        _this.showTrackList = !_this.showTrackList;
                    });
                };
                MusicComponent.prototype.playTrack = function (id) {
                    this.trackId = id;
                    this.trackUrl = 'https://embed.spotify.com/?uri=spotify%3Atrack%3A' + id;
                    this.showTrackPlayer = true;
                };
                MusicComponent.prototype.closePlayer = function () {
                    this.showTrackPlayer = false;
                };
                MusicComponent = __decorate([
                    core_1.Component({
                        selector: 'my-music',
                        templateUrl: 'dev/music/music.html',
                        styleUrls: ['assets/scss/music.scss'],
                        pipes: [playlist_name_pipe_1.PlaylistNameFilterPipe, track_name_filter_1.TrackNameFilterPipe, playlist_owner_pipe_1.PlaylistOwnerFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [angular2_spotify_1.default])
                ], MusicComponent);
                return MusicComponent;
            }());
            exports_1("MusicComponent", MusicComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11c2ljL211c2ljLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQVlJLHdCQUFvQixjQUE4QjtvQkFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO2dCQUVsRCxDQUFDO2dCQUVELDhCQUFLLEdBQUw7b0JBQUEsaUJBV0M7b0JBVkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBRWpDLFVBQUEsS0FBSzt3QkFDRCxLQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRTs2QkFDL0IsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFLLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQSxDQUFBLENBQUMsRUFDeEQsVUFBQSxHQUFHLElBQUcsT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7b0JBRXRDLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLEVBQ3pCLGNBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7Z0JBRUQscUNBQVksR0FBWjtvQkFBQSxpQkFPQztvQkFORyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUMxRCxVQUFBLElBQUk7d0JBQ0EsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7d0JBQ3RCLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQ3pDLENBQUMsQ0FDSixDQUFBO2dCQUNMLENBQUM7Z0JBR0QscUNBQVksR0FBWixVQUFhLEVBQVUsRUFBRSxJQUFZO29CQUFyQyxpQkFVQztvQkFURyxJQUFJLENBQUMsY0FBYzt5QkFDZCxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO3lCQUMzQixTQUFTLENBQUMsVUFBQSxJQUFJO3dCQUVYLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO3dCQUN0QixLQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQzt3QkFDckIsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUM7b0JBQzdDLENBQUMsQ0FBQyxDQUFDO2dCQUVYLENBQUM7Z0JBRUQsa0NBQVMsR0FBVCxVQUFVLEVBQVU7b0JBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO29CQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLG1EQUFtRCxHQUFHLEVBQUUsQ0FBQztvQkFDekUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7Z0JBQ2hDLENBQUM7Z0JBRUQsb0NBQVcsR0FBWDtvQkFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztnQkFDakMsQ0FBQztnQkFsRUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsV0FBVyxFQUFFLHNCQUFzQjt3QkFDbkMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7d0JBQ3JDLEtBQUssRUFBRSxDQUFDLDJDQUFzQixFQUFFLHVDQUFtQixFQUFFLDZDQUF1QixDQUFDO3FCQUVoRixDQUFDOztrQ0FBQTtnQkE2REYscUJBQUM7WUFBRCxDQTVEQSxBQTREQyxJQUFBO1lBNURELDJDQTREQyxDQUFBIiwiZmlsZSI6Im11c2ljL211c2ljLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IFNwb3RpZnlTZXJ2aWNlIGZyb20gJ2FuZ3VsYXIyLXNwb3RpZnkvYW5ndWxhcjItc3BvdGlmeSc7XG5pbXBvcnQge1BsYXlsaXN0TmFtZUZpbHRlclBpcGV9IGZyb20gXCIuL3BsYXlsaXN0LW5hbWUucGlwZVwiO1xuaW1wb3J0IHtUcmFja05hbWVGaWx0ZXJQaXBlfSBmcm9tIFwiLi90cmFjay1uYW1lLmZpbHRlclwiO1xuaW1wb3J0IHtQbGF5bGlzdE93bmVyRmlsdGVyUGlwZX0gZnJvbSBcIi4vcGxheWxpc3Qtb3duZXIucGlwZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1tdXNpYycsXG4gICAgdGVtcGxhdGVVcmw6ICdkZXYvbXVzaWMvbXVzaWMuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2Fzc2V0cy9zY3NzL211c2ljLnNjc3MnXSxcbiAgICBwaXBlczogW1BsYXlsaXN0TmFtZUZpbHRlclBpcGUsIFRyYWNrTmFtZUZpbHRlclBpcGUsIFBsYXlsaXN0T3duZXJGaWx0ZXJQaXBlXVxuXG59KVxuZXhwb3J0IGNsYXNzIE11c2ljQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHVzZXI6IE9iamVjdDtcbiAgICBwcml2YXRlIHVzZXJJZDogc3RyaW5nO1xuICAgIHByaXZhdGUgcGxheWxpc3RzOiBPYmplY3Q7XG4gICAgcHJpdmF0ZSBwbGF5bGlzdElkOiBPYmplY3Q7XG4gICAgcHJpdmF0ZSB0cmFja0xpc3Q6IE9iamVjdDtcbiAgICBwcml2YXRlIHBsYXlsaXN0T3duZXI6IE9iamVjdDtcbiAgICBwcml2YXRlIHNob3dUcmFja0xpc3Q6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBzaG93VHJhY2tQbGF5ZXI6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSB0cmFja0lkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB0cmFja1VybDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzcG90aWZ5U2VydmljZTogU3BvdGlmeVNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICB0aGlzLnNwb3RpZnlTZXJ2aWNlLmxvZ2luKCkuc3Vic2NyaWJlKFxuXG4gICAgICAgICAgICB0b2tlbiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcG90aWZ5U2VydmljZS5nZXRDdXJyZW50VXNlcigpXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YT0+IHsgdGhpcy51c2VySWQgPSBkYXRhLmlkLCB0aGlzLnVzZXIgPSBkYXRhfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycj0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpLFxuICAgICAgICAgICAgKCkgPT4geyB9KTtcbiAgICB9XG5cbiAgICBnZXRQbGF5bGlzdHMoKSB7XG4gICAgICAgIHRoaXMuc3BvdGlmeVNlcnZpY2UuZ2V0VXNlclBsYXlsaXN0cyh0aGlzLnVzZXJJZCwzMykuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5bGlzdHMgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWxpc3RPd25lciA9IGRhdGEuaXRlbXMubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuXG4gICAgZ2V0VHJhY2tMaXN0KGlkOiBzdHJpbmcsIHVzZXI6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNwb3RpZnlTZXJ2aWNlXG4gICAgICAgICAgICAuZ2V0UGxheWxpc3RUcmFja3ModXNlciwgaWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy50cmFja0xpc3QgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWxpc3RJZCA9IGlkO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RyYWNrTGlzdCA9ICF0aGlzLnNob3dUcmFja0xpc3Q7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHBsYXlUcmFjayhpZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudHJhY2tJZCA9IGlkO1xuICAgICAgICB0aGlzLnRyYWNrVXJsID0gJ2h0dHBzOi8vZW1iZWQuc3BvdGlmeS5jb20vP3VyaT1zcG90aWZ5JTNBdHJhY2slM0EnICsgaWQ7XG4gICAgICAgIHRoaXMuc2hvd1RyYWNrUGxheWVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjbG9zZVBsYXllcigpIHtcbiAgICAgICAgdGhpcy5zaG93VHJhY2tQbGF5ZXIgPSBmYWxzZTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
