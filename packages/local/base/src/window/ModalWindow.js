Ext.define("base.window.ModalWindow", {
	extend:"Ext.Window",

	modal: true,
	draggable: false,
	//resizable: false,

	layout:"fit",

	buttonAlign: "center",

	initComponent: function (){
		this.callParent();

		Ext.on("resize", function (){
			this.center();
		}, this);


		this.on("resize", function (){
			this.center();
		}, this);
	}
});
