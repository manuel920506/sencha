Ext.define("base.window.WindowForm", {
	extend:"base.window.ModalWindow",

	alternateClassName:"base.WindowForm",

	textGuardar: "Guardar",
	iconGuardar: "x-fa fa-save",

	xtypeForm:"form",

	initComponent: function (){

		this.items= {
			xtype: this.xtypeForm,
            listeners:{
                scope: this,
                datosguardados: function(){
                    this.fireEvent('datosguardadoz', this);
                }
            }
		};

		this.buttons = this.crearBotones();

		this.callParent();
	},

	crearBotones: function (){
		return [{
			text: this.textGuardar,
			iconCls: this.iconGuardar,
            scope: this,
            handler: this.onGuardar
		},{
			text: "Cancelar",
			scope: this,
			handler: function (){
				this.close();
			}
		}];
	},
 
    onGuardar: function (){
		var form = this.down( this.xtypeForm );

		if( form.isValid() ){
			form.guardar();
		}
	}
});