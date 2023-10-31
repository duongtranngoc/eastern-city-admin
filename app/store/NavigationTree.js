Ext.define('EasternCityAdmin.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',
    storeId: 'NavigationTree',

    fields: [
        {
            name: 'id',
            type: 'auto'
        },
        {
            name: 'text',
            type: 'string'
        },
        {
            name: 'headerCode',
            type: 'string'
        },
        {
            name: 'viewType',
            type: 'string'
        },
        {
            name: 'expanded'
        },
        {
            name: 'leaf'
        },
        {
            name: 'index',
            type: 'number'
        },
        {
            name: 'createdDate',
            type: 'number',
            convert: function (value, record) {
                return (new Date()).getTime();
            }
        },
        {
            name: 'createdDateDisplay',
            type: 'string',
            convert: function (value, record) {
                return Ext.Date.format(new Date(record.get('createdDate')), 'd-m-Y');
            }
        },
        {
            name: 'status',
            type: 'number'
        },
        {
            name: 'statusName',
            type: 'string',
            convert: function (value, record) {
                return record.get('status') === mappingData.ACTIVE ? 'Sử dụng' : 'Không sử dụng';
            }
        }
    ],

    root: {
        expanded: false
    },

    loadStore: function (callback) {
        this.setProxy({
            type: 'ajax',
            reader: 'json',
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
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            reader: {
                type: 'json',
                rootProperty: 'children'
            },
            timeout: 60000
        });

        this.load();
        this.on({
            load: function (store, records, success, operation, options) {
                if (callback !== null) {
                    var data = common.convertRecordsNavigationToData(records);
                    callback(this, data, records, operation);
                }
            }
        });
    }
});
