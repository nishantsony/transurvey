/*
 * File: app/view/MyPanel.js
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

Ext.define('TranSafe.view.MyPanel', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Img',
        'Ext.Button',
        'TranSafe.view.MyNavigationView'
    ],

    config: {
        cls: 'home',
        html: '<h1>Welcome to TranSafe</h1><p>Synopsis</p><h2>TranSafe (0.0.1)</h2>',
        items: [
            {
                xtype: 'image',
                height: 201,
                src: 'transafe_logo.png'
            },
            {
                xtype: 'button',
                handler: function(button, e) {
                    //Ext.Viewport.add(Ext.create('TranSafe.view.MyNavigationView'));
                    Ext.Viewport.setActiveItem('mynavigationview',{
                        type: "slide",
                        direction: "left"
                    });

                },
                docked: 'bottom',
                id: 'start',
                ui: 'action-round',
                text: 'Continue'
            }
        ]
    }

});