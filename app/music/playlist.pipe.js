System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var PlaylistFilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PlaylistFilterPipe = (function () {
                function PlaylistFilterPipe() {
                }
                PlaylistFilterPipe.prototype.transform = function (value, term) {
                    if (!term)
                        return value;
                    return value.filter(function (item) { return item.name.toLowerCase().indexOf(term) != -1; });
                    // return value.filter(item => item.indexOf(term) > -1);
                };
                PlaylistFilterPipe = __decorate([
                    core_1.Pipe({
                        name: 'filter'
                    }), 
                    __metadata('design:paramtypes', [])
                ], PlaylistFilterPipe);
                return PlaylistFilterPipe;
            }());
            exports_1("PlaylistFilterPipe", PlaylistFilterPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11c2ljL3BsYXlsaXN0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBQTtnQkFNQSxDQUFDO2dCQUxHLHNDQUFTLEdBQVQsVUFBVSxLQUFVLEVBQUUsSUFBUztvQkFDM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQyxDQUFDO29CQUN6RSx3REFBd0Q7Z0JBQzVELENBQUM7Z0JBUkw7b0JBQUMsV0FBSSxDQUFDO3dCQUNGLElBQUksRUFBRSxRQUFRO3FCQUNqQixDQUFDOztzQ0FBQTtnQkFPRix5QkFBQztZQUFELENBTkEsQUFNQyxJQUFBO1lBTkQsbURBTUMsQ0FBQSIsImZpbGUiOiJtdXNpYy9wbGF5bGlzdC5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdmaWx0ZXInXG59KVxuZXhwb3J0IGNsYXNzIFBsYXlsaXN0RmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCB0ZXJtOiBhbnkpIHtcbiAgICAgICAgaWYgKCF0ZXJtKSByZXR1cm4gdmFsdWU7XG4gICAgICAgIHJldHVybiB2YWx1ZS5maWx0ZXIoaXRlbSA9PiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRlcm0pICE9IC0xKTtcbiAgICAgICAgLy8gcmV0dXJuIHZhbHVlLmZpbHRlcihpdGVtID0+IGl0ZW0uaW5kZXhPZih0ZXJtKSA+IC0xKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
