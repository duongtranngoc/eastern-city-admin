Ext.define('EasternCityAdmin.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    listen: {
        controller: {
            '#': {
                unmatchedroute: 'setCurrentView'
            }
        }
    },

    routes: {
        ':node': 'setCurrentView'
    },

    control: {
        '#navigationTreeList': {
            selectionchange: 'onNavigationTreeSelectionChange',
        }
    },

    init: function () {
        if ('' == window.location.hash) {
            this.redirectTo('home');
        } else {
            var hash = window.location.hash.substring(1);

            this.setCurrentView(hash);
        }
    },

    setCurrentView: function (hashTag) {
        hashTag = (hashTag || '').toLowerCase();

        var me = this;
        var refs = me.getReferences();
        var mainCard = refs.mainCardPanel;
        var mainLayout = mainCard.getLayout();
        var navigationList = refs.navigationTreeList;
        var store = navigationList.getStore();

        var node = store.findNode('routeId', hashTag) || store.findNode('viewType', hashTag);
        var view = (node && node.get('viewType')) || 'HomeView';

        if (mainLayout.getActiveItem()) {
            mainLayout.getActiveItem().destroy();
        }

        newView = Ext.create({
            xtype: view,
            routeId: hashTag,
            hideMode: 'offsets'
        });

        mainLayout.setActiveItem(mainCard.add(newView));

        me.fireEvent('urlBack', node);
        navigationList.setSelection(node);

        if (newView.isFocusable(true)) {
            newView.focus();
        }
    },

    onNavigationTreeSelectionChange: function (tree, node) {
        var to = node && (node.get('routeId') || node.get('viewType'));

        this.redirectTo(to);
    },

    onLogoClick: function () {
        console.log('đã về home');
        this.redirectTo('home');
    },

    onLogout: function () {
        console.log('logout');
    },

    onToggleNavigationSize: function (button) {
        var self = this;
        var references = self.getReferences();
        var menuStore = references.navigationTreeList;
        var sidebar = references.mainSidebar;
        var center = references.mainCenter;
        var collapsing = !menuStore.getMicro();
        var newWidth = collapsing ? sizeConstant.MAIN.WIDTH_MENU_CLOSED
            : sizeConstant.MAIN.WIDTH_MENU_OPENED;
        var viewModel = self.getViewModel();

        if (collapsing) {
            menuStore.setUi('navigation-collap');
            viewModel.set('sidebarCls', 'sidebar-close');
            button.setIconCls('x-fa fa-list')
        } else {
            menuStore.setUi('navigation');
            viewModel.set('sidebarCls', 'sidebar-open');
            button.setIconCls('x-fa fa-chevron-left')
        }
        if (Ext.isIE9m || !Ext.os.is.Desktop) {
            Ext.suspendLayouts();
            menuStore.setWidth(newWidth);
            menuStore.setMicro(collapsing);
            Ext.resumeLayouts()
        } else {
            menuStore.setMicro(collapsing);
            menuStore.setWidth(newWidth);
            sidebar.setWidth(newWidth);
            center.setWidth(center.lastBox.width + sizeConstant.MAIN.WIDTH_MENU_OPENED - newWidth);
            sidebar.updateLayout();
            center.updateLayout();
        }
        this.getViewModel().set('sidebarWidth', newWidth)
    },
});