Ext.define('EasternCityAdmin.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    stores: {

    },

    data: {
        userFullName: 'Trần Ngọc Dương',
        userRoleName: '',
        sidebarWidth: sizeConstant.MAIN.WIDTH_MENU_OPENED
    }
});