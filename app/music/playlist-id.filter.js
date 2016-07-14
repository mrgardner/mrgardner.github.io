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
    var PlaylistIdFilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PlaylistIdFilterPipe = (function () {
                function PlaylistIdFilterPipe() {
                }
                PlaylistIdFilterPipe.prototype.transform = function (value, term) {
                    if (!term)
                        return value;
                    return value.filter(function (item) { return item.id.indexOf(term) != -1; });
                };
                PlaylistIdFilterPipe = __decorate([
                    core_1.Pipe({
                        name: 'playListIdFilter'
                    }), 
                    __metadata('design:paramtypes', [])
                ], PlaylistIdFilterPipe);
                return PlaylistIdFilterPipe;
            }());
            exports_1("PlaylistIdFilterPipe", PlaylistIdFilterPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11c2ljL3BsYXlsaXN0LWlkLmZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBO2dCQUtBLENBQUM7Z0JBSkcsd0NBQVMsR0FBVCxVQUFVLEtBQVUsRUFBRSxJQUFTO29CQUMzQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQUM7Z0JBQzdELENBQUM7Z0JBUEw7b0JBQUMsV0FBSSxDQUFDO3dCQUNGLElBQUksRUFBRSxrQkFBa0I7cUJBQzNCLENBQUM7O3dDQUFBO2dCQU1GLDJCQUFDO1lBQUQsQ0FMQSxBQUtDLElBQUE7WUFMRCx1REFLQyxDQUFBIiwiZmlsZSI6Im11c2ljL3BsYXlsaXN0LWlkLmZpbHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAncGxheUxpc3RJZEZpbHRlcidcbn0pXG5leHBvcnQgY2xhc3MgUGxheWxpc3RJZEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgdGVybTogYW55KSB7XG4gICAgICAgIGlmICghdGVybSkgcmV0dXJuIHZhbHVlO1xuICAgICAgICByZXR1cm4gdmFsdWUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZC5pbmRleE9mKHRlcm0pICE9IC0xKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
