import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class Tablelist extends Component {
    // hàm load dữ liệu
    mappingDataUser= () => (
        this.props.dataUserProps.map((value,key) => (
            <TableDataRow 
            changEditUserForm={() => this.props.changEditUserForm()}
            editFunClick={(item) => {this.props.editUser(value)} }
            userName={value.name} 
            stt={key} 
            tel={value.tel} 
            permission={value.Permission} />
        //  ...... tên đặt =   {..... lấy từ Data.json qua}
        ))
        )

    edit=(item) => {
        this.props.editFunClick(item);
    }

    render() {
        // console.log(this.props.dataUserProps);
        
        return (
            <div className="col">
                <table className="table table-striped table-inverse table-hover">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Họ tên</th>
                            <th>Số điện thoại</th>
                            <th>Quyền</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                        
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Tablelist;