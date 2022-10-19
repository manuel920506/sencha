Ext.define("app.view.core.clientes.PanelClientes",{
	extend:"Ext.Panel",

	xtype:"panelclientes",

	tbar:[{
		text:"Agregar cliente",
		handler: function (){
 
			let windo = Ext.create("base.WindowForm", {
				title:"Agregar cliente",
				iconCls:"x-fa fa-user",
				width: 400, 
				xtypeForm: "formcliente" ,
				listeners:{
					scope: this,
					datosguardadoz: function(win){
						win.close();
						var gridclientes = this.down("gridclientes");
						console.log('datosguardadoz');
						//gridclientes.store.load();
					}
				}
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
		// enableEliminar: false,

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