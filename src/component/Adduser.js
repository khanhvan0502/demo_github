import React, { Component } from 'react';

class Adduser extends Component {
    // xử lý thông trong 1 component
    constructor(props, context) {
        super(props, context);
        this.state = {
            trangthainutthem: true,
            name: '',
            tel: '',
            permision: ''
        }
    }

    hiennut = () => {
        if (this.state.trangthainutthem === true)
            return <div onClick={() => this.xulytrangthai()} className="btn btn-outline-info btn-block">Thêm mới</div>
        else return <div onClick={() => this.xulytrangthai()} className="btn btn-outline-secondary btn-block">Đóng</div>
    }



    xulytrangthai = () => {
        this.setState(
            {
                trangthainutthem: !this.state.trangthainutthem
            }
        )
    }

    hienform = () => {
        if (this.state.trangthainutthem === false) {
            return (
                <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>


                    <div className="card-header">Thêm thành viên</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Nhập tên" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Nhập số điện thoại" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Nhập tên" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Choose">Phân quyền</label>
                            <select className="form-control" name id>
                                <option>Choose...</option>
                                <option value={1}>Admin</option>
                                <option value={2}>User</option>
                                <option value={3}>Moderate</option>
                            </select>
                        </div>
                    </div>
                    <div className="btn btn-primary">Thêm</div>
                </div>
            )
        }
    }
    // hàm lấy thông tin ỏ ngoài component
    kiemTraTrangThai = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="col-12">
                    <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>


                        <div className="card-header">Thêm thành viên</div>
                        <form>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="name" id aria-describedby="helpId" placeholder="Nhập tên" />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="tel" id aria-describedby="helpId" placeholder="Nhập số điện thoại" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="Choose">Phân quyền</label>
                                    <select onChange={(event) => this.isChange(event)} className="form-control" name="permision" id>
                                        <option>Choose...</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>User</option>
                                        <option value={3}>Moderate</option>
                                    </select>
                                </div>
                            </div>
                            <input type="reset" className="btn btn-primary" onClick={(name, tel, permision) => this.props.add(this.state.name, this.state.tel, this.state.permision)} value="Thêm" />

                        </form>
                    </div>
                </div>
            )
        }
    }

    //Tạo hàm lấy thông tin từ các control
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState({
            [name]: value
        });
        var pt = {}
        pt.name = this.state.name;
        pt.tel = this.state.tel;
        pt.permision = this.state.permision;
        // console.log(pt);
    }
    render() {
        // console.log(this.state);
        // console.log(this.props.hienThiForm);

        return (
            <div>
                {/* {this.hiennut()}
                {this.hienform()} */}
                {this.kiemTraTrangThai()}
            </div>

        );
    }
}

export default Adduser;