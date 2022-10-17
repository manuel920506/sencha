Ext.define("app.view.core.clientes.PanelClientes",{
	extend:"Ext.Panel",

	xtype:"panelclientes",

	tbar:[{
		text:"Agregar cliente"
	},"->",{
		xtype:"textfield",
		emptyText:"Buscar..."
	}],

	html:"Listado de clientes"
	
});