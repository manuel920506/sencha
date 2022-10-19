Ext.define("app.store.core.clientes.StoreClientes", {
	extend:"Ext.data.Store",
    pageSize: 50,
    model: 'app.model.core.clientes.ModelCliente',

	proxy: {
		url: 'server/clientes/listar.json',
        type: 'ajax',

		reader: {
			type: 'json',
			rootProperty: 'data',
			//totalProperty:"total"
		}
    }
});
