
Ext.define('EasternCityAdmin.overrides.Pagingtoolbar', {
    override: 'Ext.PagingToolbar',

    firstText: 'Trang đầu',
    prevText: 'Trang trước',
    beforePageText: 'Trang',
    afterPageText: '/ {0}',
    nextText: 'Trang tiếp',
    lastText: 'Trang cuối',
    refreshText: 'Làm mới dữ liệu',

    fixed: false,
    displayInfo: true,
    displayMsg: 'Hiển thị {0} - {1} của {2}',
    emptyMsg: 'Không có kết quả tìm kiếm'
});