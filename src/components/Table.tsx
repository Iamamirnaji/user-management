const Table = () => {
  return (
    <div
      dir="rtl"
      style={{width: '45%'}}
    >
      <table className="table table-bordered table-sm text-center">
        <thead>
          <tr>
            <th scope="col">ردیف</th>
            <th scope="col">نام</th>
            <th scope="col">نام خانوادگی</th>
            <th scope="col">کد ملی</th>
            <th scope="col">عملیات</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <th scope="row">۱</th>
            <td>طاها</td>
            <td>عزیزی</td>
            <td>1234</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">۲</th>
            <td>هدا</td>
            <td>اکبری</td>
            <td>1234</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">۳</th>
            <td>سارا</td>
            <td>حسینی</td>
            <td>1234</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">۴</th>
            <td>رادین</td>
            <td>رستگار</td>
            <td>1234</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
