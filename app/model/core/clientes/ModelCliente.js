Ext.define("app.model.core.clientes.ModelCliente",{
	extend: "Ext.data.Model",

fields: [{
            name:'cliente_k',
            allowNull: true,
            type: 'int'
        },{
            name:'anunciante_k',
            allowNull: true,
            type: 'int'
        },
        'categoria',
        'precio_k',
        {name:'nombre', type: 'string'},
        'email',
        "alias",
        "apellido_paterno", "foto",
        "apellido_materno",
        'calle','direccion','concatena',
        {name:'colonia',type: 'string'},
        {name:'ciudad',type: 'string'},
        {name:'estado',type: 'string'},
        {name:'numInterior',type: 'string'},
        {name:'numExterior',type: 'string'},
        {name:'pais',type: 'string'},
        {name:'cp',type: 'string'},
        {name:'id_cliente',type: 'string',mapping:'id_cliente'},
        {name:'tieneDescuento',type: 'string',mapping:'tieneDescuento'},
        'tieneCredito',// tiene_credito con texto. 'Con credito'
        {name:'nombreprecio',type: 'string',mapping:'Cnombreprecio'},
        {name:'tienePrecio',type: 'string',mapping:'tienePrecio'},
        "telefonos",
        {name:'rfc',type: 'string'},
        {name:'precio_k',type: 'string'},
        {name:'precio_venta_k',type: 'int'},
        {name:'porcentaje_descuento',type: 'float'},
        {name:'tiene_credito',type: 'int'},
        {name:'sucursal_creacion',type: 'string'},
        {name:'fecha_alta',type: 'string',},
        {name:'credito_pendiente',type: 'string'},
        {name:'credito_maximo',type: 'float'},
        {name:'monto_credito_deuda',type: 'float'},
        {name:'precio_compra',type: 'float'},
        {name:'monto_recibo',type: 'float'},
        {name:'num_ventas', type:'int'},
        {name:'estatus', type:'int'},
        {name:'puede_cambiar_cheque', type:'int'},
        {name:'num_comentarios', type:'int'},
        'usuario_modificacion',
        {name: 'fecha_ultima_modificacion', type: 'date', dateFormat: 'Y-m-d H:i:s'},
        {name: 'fecha_ultimo_abono', type: 'date', dateFormat: 'Y-m-d H:i:s'},
        {name: 'fecha_ultima_venta', type: 'date', dateFormat: 'Y-m-d H:i:s'},
        "precio_k",

        //campos para storeinstancias
        "instancia_k",
        "tipo_nivel",
        "clave_instancia",
        "nombre_instancia",
        "dominio",
        "clave_licencia",
        "usuario_administrador_k",
        {name: 'fecha_creacion', type: 'date', dateFormat: 'Y-m-d'},
        {
            name:"fullname",
            calculate: function (data){
                return [data.nombre, data.apellido_paterno, data.apellido_materno].join(" " );
            }
        },{
            name:"tarifa",
            calculate: function (data){
                var icon = "", color ="";

                switch(data.precio_venta_k){
                    //case 1: icon='fa fa-heart'; color="badge bg-grey"; break;
                    case 2: icon='fa fa-tag'; color="badge bg-greensoft "; break;
                    case 3: icon='fa fa-tags'; color="badge bg-pink"; break;
                    case 4: icon='fad fa-badge-dollar'; color="badge bg-indigo"; break;
                    case 5: icon='fa fa-coins'; color="badge bg-redorange"; break;
                }

                return '<span class="'+color+'"> <span class="'+icon+'"></span> '+data.tienePrecio+'</span>';
            }
        }
    ]
});