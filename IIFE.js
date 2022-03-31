// Immediately Invoked Function Expression - function has no name and is not stored in a variable
(function () {
    console.log("Chirp, chirp!");
})();



function glideMixin(obj) {
    obj.glide = function () {
        console.log("Gliding on the water");
    };
}
function flyMixin(obj) {
    obj.fly = function () {
        console.log("Flying, wooosh!");
    };
}
//group these mixins into a module

let motionModule = (function () {
    return {
        glideMixin: function (obj) {
            obj.glide = function () {
                console.log("Gliding on the water");
            };
        },
        flyMixin: function (obj) {
            obj.fly = function () {
                console.log("Flying, wooosh!");
            };
        }
    }
})();