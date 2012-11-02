var jam = {
    "packages": [
        {
            "name": "jquery",
            "location": "../jam/jquery",
            "main": "jquery.js"
        },
        {
            "name": "less",
            "location": "../jam/less",
            "main": "./lib/index.js"
        },
        {
            "name": "modernizr",
            "location": "../jam/modernizr"
        }
    ],
    "version": "0.2.11",
    "shim": {}
};

if (typeof require !== "undefined" && require.config) {
    require.config({packages: jam.packages, shim: jam.shim});
}
else {
    var require = {packages: jam.packages, shim: jam.shim};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}