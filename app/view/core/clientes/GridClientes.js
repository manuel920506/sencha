Ext.define("app.view.core.clientes.GridClientes",{
	extend:"base.grid.GridPanelBase",

	xtype:"gridclientes",

	//enableEliminar: false,

	store: {
		data: [
	        { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
	        { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
	        { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
	        { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
	    ]
	},

	buildColumns: function (){
		return [
		        { text: 'Name', dataIndex: 'name' },
		        { text: 'Email', dataIndex: 'email', flex: 1 },
		        { text: 'Phone', dataIndex: 'phone' }
		    ];
	},

	initComponent: function (){
		console.info("initComponent - GridClientes");
		this.callParent();
	},

	onRender: function (){
		console.info("onRender - GridClientes");
		this.callParent();
	},

	afterRender: function (){
		console.info("afterRender - GridClientes");
		this.callParent();
	},

	onDestroy: function (){
		console.info("onDestroy - GridClientes");
		this.callParent();
	}
});
