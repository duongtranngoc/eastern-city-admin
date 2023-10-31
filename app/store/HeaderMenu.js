Ext.define('EasternCityAdmin.store.HeaderMenu', {
    extend: 'Ext.data.Store',
    storeId: 'HeaderMenu',
    fields: [
        {
            name: 'id',
            type: 'auto'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'code',
            type: 'string'
        }
    ],

    loadStore: function (callback) {
        this.setProxy({
            type: 'ajax',
            url: '',
            actionMethods: {
                create: 'POST',
                read: 'POST',
                update: 'POST',
                destroy: 'POST'
            },
            paramsAsJson: true,
            noCache: false,
            pageParam: '',
            startParam: '',
            limitParam: '',
            reader: {
                type: 'json'
            },
            timeout: 60000
        });
        this.load();
        this.on({
            load: function (store, records, success, operation, options) {
                if (callback !== null) {
                    var data = common.convertRecordsToData(records);
                    callback(this, data, records, operation);
                }
            }
        });
    }
});