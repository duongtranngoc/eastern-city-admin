/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'EasternCityAdmin.Application',

    name: 'EasternCityAdmin',

    requires: [
        // This will automatically load all classes in the EasternCityAdmin namespace
        // so that application classes do not need to require each other.
        'EasternCityAdmin.*'
    ]
});