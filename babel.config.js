const presets = [
    [
        "@babel/env",
        {
            targets: {
                "browsers": ["last 2 versions", "ie >= 8"]
            },
            useBuiltIns: "usage",
        },
    ],
];

module.exports = { presets };