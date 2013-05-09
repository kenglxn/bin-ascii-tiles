var jam = {
    "packages": [
        {
            "name": "backbone",
            "location": "jam/backbone",
            "main": "backbone.js"
        },
        {
            "name": "chai",
            "location": "jam/chai",
            "main": "./index"
        },
        {
            "name": "coffee-script",
            "location": "jam/coffee-script",
            "main": "./extras/coffee-script.js"
        },
        {
            "name": "cs",
            "location": "jam/cs",
            "main": "cs.js"
        },
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "mocha",
            "location": "jam/mocha",
            "main": "./index"
        },
        {
            "name": "underscore",
            "location": "jam/underscore",
            "main": "underscore.js"
        }
    ],
    "version": "0.2.17",
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "backbone",
            "location": "jam/backbone",
            "main": "backbone.js"
        },
        {
            "name": "chai",
            "location": "jam/chai",
            "main": "./index"
        },
        {
            "name": "coffee-script",
            "location": "jam/coffee-script",
            "main": "./extras/coffee-script.js"
        },
        {
            "name": "cs",
            "location": "jam/cs",
            "main": "cs.js"
        },
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "mocha",
            "location": "jam/mocha",
            "main": "./index"
        },
        {
            "name": "underscore",
            "location": "jam/underscore",
            "main": "underscore.js"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
});
}
else {
    var require = {
    "packages": [
        {
            "name": "backbone",
            "location": "jam/backbone",
            "main": "backbone.js"
        },
        {
            "name": "chai",
            "location": "jam/chai",
            "main": "./index"
        },
        {
            "name": "coffee-script",
            "location": "jam/coffee-script",
            "main": "./extras/coffee-script.js"
        },
        {
            "name": "cs",
            "location": "jam/cs",
            "main": "cs.js"
        },
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "mocha",
            "location": "jam/mocha",
            "main": "./index"
        },
        {
            "name": "underscore",
            "location": "jam/underscore",
            "main": "underscore.js"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}