Ext.define("base.grid.GridPanelBase",{
	extend:"Ext.grid.Panel",

	enableRowNumberer: true,

	enableEliminar: true,

	enableEditar: true,

	enablePaging: true,

    initComponent: function (){
		this.store = Ext.create( this.storeClass ,{
			autoLoad: true
		});


		console.info("initComponent - *** GridPanelBase");
    	this.columns= this.crearColumnas();

    	if( this.enablePaging ){
    		this.bbar = Ext.create("Ext.toolbar.Paging", {
		        //xtype: 'pagingtoolbar',
		        displayInfo: true
		    });

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

	    if( this.enableEditar ){
			cols.push( {
	            xtype:'actioncolumn',
	            width:50,
	            items: [{
	                iconCls: 'x-fa fa-pencil-alt',
	                tooltip: 'Editar',
	                scope: this,
	                handler: this.editarFila
	            }]
	        });
	    }
	    if( this.enableEliminar ){
			cols.push( {
	            xtype:'actioncolumn',
	            width:50,
	            items: [{
	                iconCls: 'x-fa fa-trash',
	                tooltip: 'Eliminar',
	                scope: this,
	                handler: this.onEliminar
	            }]
	        });
	    }
		return cols;
    },

    buildColumns: Ext.emptyFn,

    editarFila: Ext.emptyFn,

    onEliminar: function(grid, rowIndex, colIndex) {

        var rec = grid.getStore().getAt(rowIndex);

        Ext.Msg.confirm("Esta seguro?","Vamos a eliminar el registro seleccionado", function (resp){
        	if(resp == "yes"){
    			this.eliminar(rec);
        	}
        }, this);
    },

    eliminar: Ext.emptyFn
});

//sencha generate package base(base es el nombre del paquete generado)