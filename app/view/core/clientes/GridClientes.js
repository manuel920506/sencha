Ext.define("app.view.core.clientes.GridClientes",{
	extend:"Ext.grid.Panel",

	xtype:"gridclientes",

	store: {
		data: [
	        { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
	        { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
	        { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
	        { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
	    ]
	},

	enableRowNumberer: true,

	enableEliminar: true,


    initComponent: function (){

    	this.columns= this.crearColumnas();

    	this.callParent();
    },

    crearColumnas: function (){
    	var cols = [
		        { text: 'Name', dataIndex: 'name' },
		        { text: 'Email', dataIndex: 'email', flex: 1 },
		        { text: 'Phone', dataIndex: 'phone' }
		    ];


	    if( this.enableRowNumberer	){
			cols.splice(0 , 0, {
				xtype:"rownumberer"
			});
	    }


	    if( this.enableEliminar ){
			cols.push( {
	            xtype:'actioncolumn',
	            width:50,
	            items: [{
	                iconCls: 'x-fa fa-trash',
	                tooltip: 'Eliminar',
	                handler: function(grid, rowIndex, colIndex) {
	                    var rec = grid.getStore().removeAt(rowIndex);
	                }
	            }]
	        });
	    }

		return cols; 
    }
});