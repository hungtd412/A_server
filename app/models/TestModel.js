// const db = require("../common/connect")
const Test = function(Test) {
  this.id = Test.id;
  // this.TieuDe = ThongBao.TieuDe;
  // this.NoiDung = ThongBao.NoiDung;
  // this.SK_id = ThongBao.SK_id;
}

Test.get_all = function(result) {
  // db.query("select * from Test inner join SuKien where SK_id = SuKien.id", function(err, Test){
  //   if (err) {
  //     result(null);
  //     return;
  //   }
  //   else {
  //     result(Test);
  //   }
  // });
  result([
    {"id": 1, "name":"De thi cuoi ki 1 mon Toan 2019-2020"},
    {"id": 2, "name":"De thi giua ki 1 mon Toan 2019-2020"}
  ]);
}

module.exports = Test;