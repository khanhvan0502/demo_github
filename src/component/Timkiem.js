import React, { Component } from 'react';
import EditUser from './EditUser';

class Timkiem extends Component {

    constructor(props, context) {
        super(props, context);
        this.state={
            userObj:{}
        }
    }
    
    //Hàm lấy thông tin sửa
    getEditInfo=(info) => {
        this.setState({
            userObj:info
        });
        this.props.getEditInfoApp(info);
    }

    //hàm kiểm tra kết nối với App để lấy trạng thái
    isShowEdit=() => {
        if(this.props.editUserStatus===true){
            return <EditUser 
            getEditInfo={(info) => this.getEditInfo(info)}
            userEditObjectt={this.props.userEditObject}
            changEditUserForm={() => this.props.changEditUserForm()}/>
        }
    }

    render() {
        return (
            <div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="searchForm">
                                <div className="form-group">
                                    <div className="btn-group">
                                        <input type="text" className="form-control" placeholder="Nhập từ khóa" style={{ width: '600px' }} />
                                        <div className="btn btn-info">Tìm</div>
                                    </div>
                                </div>
                            </div>  {/* end tìm kiếm  */}
                        </div>
                        <div className="col-sm-3">
                            <div className="btn-group">
                                <div className="btn btn-outline-info" onClick={() => {this.props.ketNoi()}}>Thêm mới</div>
                                <div className="btn btn-outline-secondary">Đóng</div>
                            </div>

                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        {this.isShowEdit()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Timkiem;