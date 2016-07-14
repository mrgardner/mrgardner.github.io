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
    var PlaylistOwnerFilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PlaylistOwnerFilterPipe = (function () {
                function PlaylistOwnerFilterPipe() {
                }
                PlaylistOwnerFilterPipe.prototype.transform = function (value, term) {
                    if (!term)
                        return value;
                    return value.filter(function (item) { return item.owner.id.toLowerCase().indexOf(term) != -1; });
                };
                PlaylistOwnerFilterPipe = __decorate([
                    core_1.Pipe({
                        name: 'playListOwnerFilter'
                    }), 
                    __metadata('design:paramtypes', [])
                ], PlaylistOwnerFilterPipe);
                return PlaylistOwnerFilterPipe;
            }());
            exports_1("PlaylistOwnerFilterPipe", PlaylistOwnerFilterPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11c2ljL3BsYXlsaXN0LW93bmVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBQTtnQkFLQSxDQUFDO2dCQUpHLDJDQUFTLEdBQVQsVUFBVSxLQUFVLEVBQUUsSUFBUztvQkFDM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQS9DLENBQStDLENBQUMsQ0FBQztnQkFDakYsQ0FBQztnQkFQTDtvQkFBQyxXQUFJLENBQUM7d0JBQ0YsSUFBSSxFQUFFLHFCQUFxQjtxQkFDOUIsQ0FBQzs7MkNBQUE7Z0JBTUYsOEJBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELDZEQUtDLENBQUEiLCJmaWxlIjoibXVzaWMvcGxheWxpc3Qtb3duZXIucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAncGxheUxpc3RPd25lckZpbHRlcidcbn0pXG5leHBvcnQgY2xhc3MgUGxheWxpc3RPd25lckZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgdGVybTogYW55KSB7XG4gICAgICAgIGlmICghdGVybSkgcmV0dXJuIHZhbHVlO1xuICAgICAgICByZXR1cm4gdmFsdWUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5vd25lci5pZC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGVybSkgIT0gLTEpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
