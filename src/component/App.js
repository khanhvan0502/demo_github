import './../App.css';
import Adduser from './Adduser';
import Header from './Header';
import Tablelist from './Tablelist';
import Timkiem from './Timkiem';
import React, { Component } from 'react';
import Datauser from './Data.json';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      hienThiForm: true,
      data: Datauser,
      editUserStatus: false,
      userEditObject: {}
    }
  }

  thongBao = () => {
    // console.log('Đã kết nối');
    alert('oke');
  }
  //Hàm đổi trạng thái của hiển thị Form
  doiTrangThai = () => {
    this.setState({ hienThiForm: !this.state.hienThiForm });
  }
  // hàm láy dữ liệu từ ADDUSer gửi lên
  getNewUser = (name, tel, permision) => {
    // console.log('Ok');
    // console.log(name);
    // console.log(tel);
    // console.log(permision);
    var item = {};//ban đầu là đối tượng rỗng
    item.name = name;
    item.tel = tel;
    item.permision = permision;
    // console.log(item);
    // khai báo 1 biến mới để lưu dữ liệu
    var newItem = this.state.data;
    newItem.push(item);
    // console.log(newItem);
    this.setState({ data: newItem });
  }

  //hàm kết nối
  editUser = (item) => {
    // alert('ok');
    // console.log(item);
    this.setState({
      userEditObject: item
    });
  }

  //hàm thay đổi trạng thái cỏa form 
  changEditUserForm = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }

  //hàm lấy thông tin cần sửa gửi lên tìm kiếm
  getEditInfoApp = (info) => {
    // console.log(info);
    this.state.data.forEach((value, key) => {
      // console.log(value.name);
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    })
  }

  render() {
    // console.log(Datauser);
    return (
      <div className="App" >
        <Header />
        <div className="container">
          <Timkiem
            getEditInfoApp={(info) => this.getEditInfoApp(info)}
            userEditObject={() => this.state.userEditObject}
            changEditUserForm={() => this.changEditUserForm()}
            editUserStatus={this.state.editUserStatus}
            ketNoi={() => this.doiTrangThai()} />
          <div class="row">
            <Tablelist
              changEditUserForm={() => this.changEditUserForm()}
              editUser={(item) => { this.editUser(item) }}
              dataUserProps={this.state.data} />
            <Adduser add={(name, tel, permision) => this.getNewUser(name, tel, permision)} hienThiForm={this.state.hienThiForm} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
