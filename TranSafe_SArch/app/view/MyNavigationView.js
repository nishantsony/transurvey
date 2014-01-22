/*
 * File: app/view/MyNavigationView.js
 *
 * This file was generated by Sencha Architect version 3.0.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TranSafe.view.MyNavigationView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.mynavigationview',

    requires: [
        'Ext.Map',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.dataview.IndexBar',
        'Ext.navigation.Bar'
    ],

    config: {
        items: [
            {
                xtype: 'container',
                docked: 'top',
                items: [
                    {
                        xtype: 'map',
                        height: 200,
                        mapOptions: {
                            
                        },
                        useCurrentLocation: true
                    }
                ]
            },
            {
                xtype: 'list',
                title: 'Locations NearBy',
                itemId: 'mylist',
                hideOnMaskTap: false,
                allowDeselect: true,
                itemTpl: [
                    '<div>{name}</div>'
                ],
                store: 'FS',
                grouped: true,
                indexBar: true
            }
        ],
        navigationBar: {
            docked: 'top'
        }
    }

});