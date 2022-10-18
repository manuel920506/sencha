Ext.define("base.grid.GridPanelBase",{
	extend:"Ext.grid.Panel",

	enableRowNumberer: true,

	enableEliminar: true,


	enablePaging: true,

    initComponent: function (){
		console.info("initComponent - *** GridPanelBase");
    	this.columns= this.crearColumnas();

    	if( this.enablePaging ){
    		this.bbar = Ext.create("Ext.toolbar.Paging", {
		        //xtype: 'pagingtoolbar',
		        displayInfo: true
		    });


		    this.bbar.hide();
    	}

    	this.callParent();
    },

    crearColumnas: function (){
    	var cols = this.buildColumns();


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
    },

    buildColumns: Ext.emptyFn
});
//sencha generate package base(base es el nombre del paquete generado)