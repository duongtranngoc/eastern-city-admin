Ext.define('EasternCityAdmin.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'EasternCityAdmin.view.main.MainController',
        'EasternCityAdmin.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    cls: 'main-view',
    layout: 'border',

    items: [
        {
            xtype: 'container',
            region: 'north',

            cls: 'main-header',
            height: sizeConstant.MAIN.HEIGHT_HEADER,
            layout: 'hbox',

            items: [
                {
                    xtype: 'image',
                    src: '../../../../../resources/images/logo/logo.png',

                    cls: 'logo',
                    height: '100%',
                    width: sizeConstant.MAIN.WIDTH_MENU_OPENED,

                    listeners: {
                        el: {
                            click: 'onLogoClick'
                        }
                    }
                },
                {
                    xtype: 'container',
                    id: 'menu-header',
                    cls: 'menu-header',
                    flex: 1,
                    align: 'center',
                    layout: 'hbox',
                    items: [
                    ]
                },
                {
                    flex: 1
                },
                {
                    xtype: 'container',
                    cls: 'account-items',
                    height: '100%',
                    align: 'center',

                    layout: {
                        type: 'hbox',
                        align: 'center'
                    },
                    items: [
                        {
                            xtype: 'image',
                            src: '../../../../../resources/images/avatar-default.png',

                            cls: 'avatar',
                            width: 50,
                            height: '100%',
                            padding: 5
                        },
                        {
                            cls: 'quick-account-info',
                            layout: 'vbox',

                            items: [
                                {
                                    xtype: 'tbtext',
                                    cls: 'account-user',

                                    bind: {
                                        text: '{userFullName}'
                                    }
                                },
                                {
                                    xtype: 'tbtext',
                                    cls: 'account-role',

                                    bind: {
                                        text: '{userRoleName ? userRoleName : "Chưa rõ chức vụ"}'
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            cls: 'button-logout',
                            iconCls: 'x-fa fa-sign-out-alt',
                            tooltip: 'Đăng xuất',

                            height: '100%',
                            width: 50,
                            handler: 'onLogout'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            region: 'west',
            reference: 'mainSidebar',

            cls: 'main-sidebar',
            layout: 'vbox',
            bind: {
                width: '{sidebarWidth}'
            },

            scrollable: 'y',

            items: [
                {
                    xtype: 'container',
                    cls: 'main-sidebar-title ',
                    width: sizeConstant.MAIN.WIDTH_MENU_OPENED,
                    height: 50,

                    layout: 'hbox',
                    items: [
                    ]
                },
                {
                    xtype: 'treelist',
                    itemId: 'navigationTreeList',
                    reference: 'navigationTreeList',
                    store: 'NavigationTree',

                    ui: 'navigation',
                    cls: 'main-sidebar-content',
                    width: sizeConstant.MAIN.WIDTH_MENU_OPENED,
                    flex: 1,

                    expanderFirst: false,
                    expanderOnly: false
                }
            ]
        },
        {
            xtype: 'container',
            region: 'center',

            cls: 'main-center',
            reference: 'mainCenter',
            layout: 'vbox',

            items: [
                {
                    xtype: 'container',
                    itemId: 'headerBar',

                    cls: 'main-center-header',
                    height: 50,
                    width: '100%',
                    layout: 'hbox',

                    items: [
                        {
                            xtype: 'button',
                            id: 'main-navigation-btn',
                            reference: 'buttonToggleSidebar',

                            cls: 'icon-collapse',
                            iconCls: 'x-fa fa-chevron-left',
                            margin: 10,

                            handler: 'onToggleNavigationSize'
                        },
                        {
                            xtype: 'container',
                            cls: 'list-breadscrumb',

                            bind: {
                                html: '{breadscrumbHtml}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'container',
                    region: 'center',
                    reference: 'mainCardPanel',

                    cls: 'main-center-content',
                    width: '100%',
                    margin: 10,
                    flex: 1,
                    layout: {
                        type: 'card',
                        anchor: '100%'
                    },

                    scrollable: true
                }
            ]
        }
    ]
});