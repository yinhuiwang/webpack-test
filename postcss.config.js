module.exports = {
    plugins: {
        "autoprefixer": {
            "overrideBrowserslist": [
                "chrome >= 35",
                "Firefox >= 3.5",
                "ie >= 8",
                "opera >= 11.5"
            ]
        },
        "postcss-pxtorem": {
            rootValue: 10,
            propList: ['*']
        },
        /**
         * 使用webpack-dev-server编译项目时，使用postcss-sprites合成精灵图成功，但是项目不断重启。
         * 所以：npm run dev时注释掉postcss-sprites相关配置。
         * 注：npm run build 完全不受影响
         */
        // "postcss-sprites": {
        //     spritePath: "./dist/assets/images",
        //     groupBy: function (image) {
        //         let imgPath = image.url.substr(0, image.url.lastIndexOf('/'));
        //         let name = imgPath.substr(imgPath.lastIndexOf('/') + 1);
        //         return Promise.resolve(name);
        //     },
        //     filterBy: function(image) {
        //         let imgPath = image.url;
        //         if (!/noSprites$/.test(imgPath)) {
        //             return Promise.resolve();
        //         }
        //         return Promise.reject();
        //     }
        // }
    }
};