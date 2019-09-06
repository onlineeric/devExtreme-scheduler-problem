function getActivityFormItems(form, popup) {
  return [
    {
      name: "show1",
      dataField: "show1",
      editorType: "dxCheckBox",
      editorOptions: {
        // width: '100%',
        type: "boolean",
        onValueChanged: args => {
          form.itemOption("text1", "visible", args.value);
        }
      }
    },
    {
      name: "text1",
      dataField: "text",
      editorType: "dxTextArea",
      colSpan: 6,
      visible: false,
      editorOptions: {
        stylingMode: "outlined",
        width: "100%",
        height: 200
      }
    }
  ];
}

export function appointmentFormOpeningTemplate(e) {
  e.form.option("items", getActivityFormItems(e.form, e.component._popup));
}
