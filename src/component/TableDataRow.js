import React, { Component } from 'react';

class TableDataRow extends Component {
    cacQuyen=()=>{
        if(this.props.permission==1) {return "Admin";}
        else if(this.props.permission==2) {return "Moderetor";}
            else {return "Normal User";}
    }

    edit=() => {
        this.props.editFunClick();
        this.props.changEditUserForm();
    }

    render() {
        return (
            <tr>
                <td scope="row">{this.props.stt+1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.cacQuyen()}</td>
                <td>
                    <div classname="btn-group">
                        <div className="btn btn-warning sua"
                             onClick={() => {this.edit()}}>
                            <i classname="fa fa-pencil" aria-hidden="true" />
                            Sửa</div>
                        <div className="btn btn-danger xoa"><i classname="fa fa-minus" aria-hidden="true" />
                            Xóa</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;