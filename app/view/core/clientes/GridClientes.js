Ext.define("app.view.core.clientes.GridClientes",{
	extend:"base.grid.GridPanelBase",

	xtype:"gridclientes",

	storeClass :"app.store.core.clientes.StoreClientes",

	plugins: {
        ptype: 'cellediting',
        clicksToEdit: 1
    },

	//enableEliminar: false,

	/*store: {
		data: [
	        { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
	        { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
	        { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
	        { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
	    ]
	},*/

	buildColumns: function (){
		return [
		        { text: 'Nombre', dataIndex: 'nombre', flex: 1 },
		        { text: 'Sucursal', dataIndex: 'nombreSucursal', width: 200 },
		        { text: 'Ultima venta', dataIndex: 'fecha_ultima_venta' ,width: 200,
		        	renderer: Ext.util.Format.dateRenderer('d-m-Y H:i'),
		        	editor: {
			            xtype: 'datefield',
			            format: 'd/m/Y',
			            minValue: '01/01/06',
			            disabledDays: [0, 6],
			            disabledDaysText: 'Plants are not available on the weekends'
			        }
		    },
		        // { text: 'Estatus', dataIndex: 'estatus', 
		        // 	renderer: function (valor){
	        	// 		return valor==0?"<strong>SI</strong>": 'NO';
		        // 	}

		        //  }
				
				{ 
					xtype: 'checkcolumn', text: 'Estatus', dataIndex: 'estatus'  
			   }
		    ];
	},

	initComponent: function (){

		console.info("initComponent - GridClientes");
		this.callParent();
	},

	onRender: function (){
		console.info("onRender - GridClientes");
		this.callParent();

		//construir menu con el click derecho
	},

	afterRender: function (){
		console.info("afterRender - GridClientes");
		this.callParent();
	},

	onDestroy: function (){

		///tambien destruir menu

		console.info("onDestroy - GridClientes");
		this.callParent();
	},

	editarFila: function(grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);

        let windo = Ext.create("base.WindowForm", {
			title:"Editar cliente",
			iconCls:"x-fa fa-user",
			width: 400,
			xtypeForm: "formcliente",
			listeners:{
				scope: this,
				datosguardadoz: function (wind){

					wind.close();
					
					//recuperar la referencia del grid
					var gridclientes = this;

					console.info("RECARGUEN LOS DATOS!!!");
					//gridclientes.store.load();
				}
			}
		});

		windo.show();

		windo.down("formcliente").loadRecord( rec );
    },

    eliminar:  function (record){
    	Ext.Ajax.request({
    		url:"server/clientes/guardar.json?id="+record.data.cliente_k,
    		params:{
    			///key: record.data.cliente_k
    		},
    		scope: this,
    		success: function (){
				this.store.reload();
    		}
    	});
    }
});