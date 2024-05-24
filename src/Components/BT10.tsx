import React from "react";

export default function BT10() {
  return (
    <div>
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th colSpan={2}>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Nguyễn Văn A</td>
            <td>28/02/1990</td>
            <td>nvana@gmail.com</td>
            <td>Ba Đình, Hà Nội</td>
            <td>
              <button
                style={{
                    backgroundColor: "yellow",
                    color: "black",
                    width: "70px",
                    height: "40px ",
                    border: "none",
                    borderRadius: "10px",
                  }}
                className="button button-edit"
              >
                Sửa
              </button>
            </td>
            <td>
              <button
                style={{
                    backgroundColor: "red",
                    color: "black",
                    width: "70px",
                    height: "40px ",
                    border: "none",
                    borderRadius: "10px",
                  }}
                className="button button-delete"
              >
                Xóa
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Trần Thị B</td>
            <td>15/07/1985</td>
            <td>ttb@gmail.com</td>
            <td>Cầu Giấy, Hà Nội</td>
            <td>
              <button
                style={{
                    backgroundColor: "yellow",
                    color: "black",
                    width: "70px",
                    height: "40px ",
                    border: "none",
                    borderRadius: "10px",
                  }}
                className="button button-edit"
              >
                Sửa
              </button>
            </td>
            <td>
              <button
                style={{
                    backgroundColor: "red",
                    color: "black",
                    width: "70px",
                    height: "40px ",
                    border: "none",
                    borderRadius: "10px",
                  }}
                className="button button-delete"
              >
                Xóa
              </button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Lê Văn C</td>
            <td>03/10/2000</td>
            <td>lvc@gmail.com</td>
            <td>Hai Bà Trưng, Hà Nội</td>
            <td>
              <button
                style={{
                  backgroundColor: "yellow",
                  color: "black",
                  width: "70px",
                  height: "40px ",
                  border: "none",
                  borderRadius: "10px",
                }}
                className="button button-edit"
              >
                Sửa
              </button>
            </td>
            <td>
              <button
                style={{
                  backgroundColor: "red",
                  color: "black",
                  width: "70px",
                  height: "40px ",
                  border: "none",
                  borderRadius: "10px",
                }}
                className="button button-delete"
              >
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
