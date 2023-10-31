Ext.define('EasternCityAdmin.utils.Toast', {
    singleton: true,
    alternateClassName: [
        'toast'
    ],

    toastSuccess: function (message) {
        Ext.toast({
            title: 'Thành công',
            cls: 'toast-success',
            iconCls: 'x-fa fa-check-circle',
            align: 'br',
            y: 50,
            minWidth: 300,
            maxWidth: 500,
            html: message
        });
    },

    toastInfo: function (message) {
        Ext.toast({
            title: 'Thông tin',
            cls: 'toast-info',
            iconCls: 'x-fa fa-info-circle',
            align: 'br',
            minWidth: 300,
            maxWidth: 500,
            html: message
        });
    },

    toastError: function (message) {
        Ext.toast({
            title: 'Lỗi',
            cls: 'toast-error',
            iconCls: 'x-fa fa-times-circle',
            align: 'br',
            minWidth: 300,
            maxWidth: 500,
            html: message
        });
    },

    toastWarning: function (message) {
        Ext.toast({
            title: 'Cảnh báo',
            cls: 'toast-warning',
            iconCls: 'x-fa fa-exclamation-circle',
            align: 'br',
            width: 300,
            maxWidth: 500,
            html: message
        })
    }
});