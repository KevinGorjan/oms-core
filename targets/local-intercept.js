module.exports = targets => {
    targets.of('@magento/pwa-buildpack').specialFeatures.tap(flags => {
        flags[targets.name] = {
            cssModules: true,
            esModules: true,
        };
    });
};
