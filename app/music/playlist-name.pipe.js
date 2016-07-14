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
    var PlaylistNameFilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PlaylistNameFilterPipe = (function () {
                function PlaylistNameFilterPipe() {
                }
                PlaylistNameFilterPipe.prototype.transform = function (value, term) {
                    if (!term)
                        return value;
                    return value.filter(function (item) { return item.name.toLowerCase().indexOf(term) != -1; });
                };
                PlaylistNameFilterPipe = __decorate([
                    core_1.Pipe({
                        name: 'playListNameFilter'
                    }), 
                    __metadata('design:paramtypes', [])
                ], PlaylistNameFilterPipe);
                return PlaylistNameFilterPipe;
            }());
            exports_1("PlaylistNameFilterPipe", PlaylistNameFilterPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11c2ljL3BsYXlsaXN0LW5hbWUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBO2dCQUtBLENBQUM7Z0JBSkcsMENBQVMsR0FBVCxVQUFVLEtBQVUsRUFBRSxJQUFTO29CQUMzQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDLENBQUM7Z0JBQzdFLENBQUM7Z0JBUEw7b0JBQUMsV0FBSSxDQUFDO3dCQUNGLElBQUksRUFBRSxvQkFBb0I7cUJBQzdCLENBQUM7OzBDQUFBO2dCQU1GLDZCQUFDO1lBQUQsQ0FMQSxBQUtDLElBQUE7WUFMRCwyREFLQyxDQUFBIiwiZmlsZSI6Im11c2ljL3BsYXlsaXN0LW5hbWUucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAncGxheUxpc3ROYW1lRmlsdGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBQbGF5bGlzdE5hbWVGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIHRlcm06IGFueSkge1xuICAgICAgICBpZiAoIXRlcm0pIHJldHVybiB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmZpbHRlcihpdGVtID0+IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGVybSkgIT0gLTEpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
