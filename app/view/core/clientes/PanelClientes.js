Ext.define("app.view.core.clientes.PanelClientes",{
	extend:"Ext.Panel",

	xtype:"panelclientes",

	tbar:[{
		text:"Agregar cliente",
		handler: function (){

			let windo = Ext.create("base.window.ModalWindow", {
				title:"Agregar cliente",
				iconCls:"x-fa fa-user",
				width: 400,

				/*layout:"fit",
				draggable: false,
				resizable: false,
				modal: true,*/

				items: {
					xtype:"formcliente"
				},

				buttons:[{
					text:"Guardar",
					iconCls:"x-fa fa-save"
				},{
					text:"Cancelar"
				}]
			});

			windo.show();
		}
	},"->",{
		xtype:"textfield",
		emptyText:"Buscar..."
	}],

	layout:"fit",

	items:{
		xtype:"gridclientes",
		enableEliminar: false,

		listeners:{
			beforerender: function (){
				console.info("Evento beforerender");
			},
			render: function (){
				console.info("Evento render");
			},
			boxready: function (){
				console.info("Evento boxready");
			},
			destroy: function (){
				console.info("Evento destroy");
			}
		}
	}
});