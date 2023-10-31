Ext.define('EasternCityAdmin.utils.Common', {
    singleton: true,
    alternateClassName: [
        'common'
    ],

    deleteConfirm: function (title, message, callback) {
        Ext.MessageBox.show({
            title: title,
            cls: 'delete-confirm-message',
            // icon: Ext.MessageBox.QUESTION,
            message: message,
            buttons: Ext.MessageBox.YESNO,
            buttonText: {
                yes: 'Xóa',
                no: 'Hủy'
            },
            modal: true,
            callback: function (btn) {
                if (callback && typeof callback === 'function') {
                    callback(btn === 'yes');
                }
            }
        });
    },

    debounce: function (callback, delay) {
        var timeoutId; // Biến để lưu ID của timeout

        return function () {
            var context = this;
            var args = arguments;

            clearTimeout(timeoutId); // Hủy timeout cũ nếu có

            timeoutId = setTimeout(function () {
                return callback.apply(context, args); // Gọi hàm callback sau khoảng thời gian delay
            }, delay);
        }
    }
});