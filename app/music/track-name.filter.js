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
    var TrackNameFilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TrackNameFilterPipe = (function () {
                function TrackNameFilterPipe() {
                }
                TrackNameFilterPipe.prototype.transform = function (value, term) {
                    if (!term)
                        return value;
                    return value.filter(function (item) { return item.track.name.toLowerCase().indexOf(term) != -1; });
                };
                TrackNameFilterPipe = __decorate([
                    core_1.Pipe({
                        name: 'trackNameFilter'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TrackNameFilterPipe);
                return TrackNameFilterPipe;
            }());
            exports_1("TrackNameFilterPipe", TrackNameFilterPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11c2ljL3RyYWNrLW5hbWUuZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQUE7Z0JBS0EsQ0FBQztnQkFKRyx1Q0FBUyxHQUFULFVBQVUsS0FBVSxFQUFFLElBQVM7b0JBQzNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFqRCxDQUFpRCxDQUFDLENBQUM7Z0JBQ25GLENBQUM7Z0JBUEw7b0JBQUMsV0FBSSxDQUFDO3dCQUNGLElBQUksRUFBRSxpQkFBaUI7cUJBQzFCLENBQUM7O3VDQUFBO2dCQU1GLDBCQUFDO1lBQUQsQ0FMQSxBQUtDLElBQUE7WUFMRCxxREFLQyxDQUFBIiwiZmlsZSI6Im11c2ljL3RyYWNrLW5hbWUuZmlsdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICd0cmFja05hbWVGaWx0ZXInXG59KVxuZXhwb3J0IGNsYXNzIFRyYWNrTmFtZUZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgdGVybTogYW55KSB7XG4gICAgICAgIGlmICghdGVybSkgcmV0dXJuIHZhbHVlO1xuICAgICAgICByZXR1cm4gdmFsdWUuZmlsdGVyKGl0ZW0gPT4gaXRlbS50cmFjay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXJtKSAhPSAtMSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
