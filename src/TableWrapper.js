
import MUIDataTable from "mui-datatables"
import React from "react"


export default class TableWrapper extends React.Component {
  constructor(props) {
    super(props)
    //removing eslint useless constructor warning
    this.state = {}
  }
  shouldComponentUpdate(nextProps) {
    return !(JSON.stringify(nextProps.data) === JSON.stringify(this.props.data))
  }
  render() {

    return <MUIDataTable columns={this.props.columns}
      data={this.props.data}
      title={this.props.title}
      options={this.props.options}
    />

  }
}