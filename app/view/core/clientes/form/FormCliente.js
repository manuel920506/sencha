Ext.define("app.view.core.clientes.form.FormCliente",{
	extend:"Ext.form.Panel",

	xtype:"formcliente",

	padding: 10,

	defaults:{
		anchor:"100%",
		xtype: 'textfield'
	},

	items: [{
        name: 'nombre',
        fieldLabel: 'Text field',
        value: 'Text field value'
    }, {
        xtype: 'hiddenfield',
        name: 'hidden1',
        value: 'Hidden field value'
    }, {
        name: 'password1',
        inputType: 'password',
        allowBlank: false,
        fieldLabel: 'Password field'
    }, {
        xtype: 'filefield',
        name: 'file1',
        fieldLabel: 'File upload'
    }, {
        xtype: 'textareafield',
        name: 'textarea1',
        fieldLabel: 'TextArea',
        value: 'Textarea value'
    }, {
        xtype: 'displayfield',
        name: 'displayfield1',
        fieldLabel: 'Display field',
        value: 'Display field <span style="color: "green";">value</span>'
    }, {
        xtype: 'numberfield',
        name: 'numberfield1',
        fieldLabel: 'Number field',
        value: 5,
        minValue: 0,
        maxValue: 50
    }, {
        xtype: 'checkboxfield',
        name: 'checkbox1',
        fieldLabel: 'Checkbox',
        boxLabel: 'box label'
    }, {
        xtype: 'radiofield',
        name: 'radio1',
        value: 'radiovalue1',
        fieldLabel: 'Radio buttons',
        boxLabel: 'radio 1'
    }, {
        xtype: 'radiofield',
        name: 'radio1',
        value: 'radiovalue2',
        fieldLabel: '',
        labelSeparator: '',
        hideEmptyLabel: false,
        boxLabel: 'radio 2'
    }, {
        xtype: 'datefield',
        name: 'date1',
        fieldLabel: 'Date Field'
    }, {
        xtype: 'timefield',
        name: 'time1',
        fieldLabel: 'Time Field',
        minValue: '1:30 AM',
        maxValue: '9:15 PM'
    }],

    cargar: function(){

    },

    guardar: function(){
        this.mask('Por favor, espere un momento.....');
        console.info('guardando: ', this.getValues());

        this.getForm().submit({
            url: "server/clientes/guardar.json",
            params: {},
            scope: this,
            success: function(form, resp){ 
                this.unmask(); 
                if(resp.result.success)
                {
                    this.fireEvent('datosguardados', this, resp.result);
                }
                else{
                    Ext.Msg.alert('Error', 'Ha ocurrido un error!');
                }
            }, 
            failure: function(response, opts) {
                this.unmask();
                console.log('server-side failure with status code ' + response.status);
           }
        });
    }
});
