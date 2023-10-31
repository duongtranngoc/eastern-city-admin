Ext.define('EasternCityAdmin.config.Config', {
    alternateClassName: [
        'config'
    ],
    singleton: true,

    config: {
        appBaseUrl: '',
    },

    constructor: function (config) {
        this.initConfig(config);
        return this;
    }
});
