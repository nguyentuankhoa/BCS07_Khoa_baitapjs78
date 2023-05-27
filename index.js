var arr1 = [];
var mangSoThuc = [];


// arr1
function ketQua() {
  var nhapSo = document.getElementById("nhapSo").value * 1;
  arr1.push(nhapSo);
  document.getElementById("baiTap").innerHTML = arr1;
  console.log(arr1);
  document.querySelector("#hienThiMang").innerHTML = arr1;

  
}

// 1.Tổng các số dương trong mảng.
function tongSoDuong() {
  var tongCacSoDuong = 0;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] > 0) {
      tongCacSoDuong += arr1[i];
    }
  }
  document.getElementById("ketQuaBai1").innerHTML = tongCacSoDuong;
}

// 2. Đếm có bao nhiêu số dương trong mảng
function demSoDuong() {
  var demSo = 0;
  for (var i = 0; i <= arr1.length; i++) {
    if (arr1[i] > 0) {
      demSo++;
    }
  }
  document.getElementById("ketQuaBai2").innerHTML = demSo;
}

// 3. Tìm số nhỏ nhất trong mảng. 
function timSoNhoNhat() {
    var soNhoNhat = arr1[0];
    for (var i = 0; i < arr1.length; i++){
        var timSoNhoNhat = arr1[i];
        if (timSoNhoNhat <soNhoNhat) {
            soNhoNhat = timSoNhoNhat;
        }
    }
    document.getElementById("ketQuaBai3").innerHTML = soNhoNhat;
}

// 4. Tìm số dương nhỏ nhất trong mảng. 
function timSoDuongNhoNhat () {
    arrSoDuong = [];
    for (var a = 0; a <arr1.length; a++){
        if (arr1[a] >=0) {
            arrSoDuong.push(arr1[a]);
            console.log(arrSoDuong)
        }
    }
    var soDuongNhoNhat = arrSoDuong[0];
    for (var i = 0; i <= arrSoDuong.length; i++) {
        var timSoDuongNhoNhat = arrSoDuong[i];
        if (timSoDuongNhoNhat >= 0 && timSoDuongNhoNhat < soDuongNhoNhat) {
            soDuongNhoNhat = timSoDuongNhoNhat;
        }
    }
    document.getElementById("ketQuaBai4").innerHTML = soDuongNhoNhat;
}

// 5. Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1. 
 function timSoChanCuoiCung () {
    var soChanCuoiCung = -1;
    for (var i = arr1.length -1; i >=0; i--) {
        if (arr1[i] %2 ===0) {
            soChanCuoiCung = arr1[i];
            break;
        }
    }
    document.getElementById("ketQuaBai5").innerHTML = soChanCuoiCung;
 }
//  6. Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn
//     đổi chỗ giá trị).

function doiViTri () {
    var so1 = document.getElementById("so1").value *1;
    var so2 = document.getElementById("so2").value *1;
    var hoanDoi = arr1[so1 -1]; 
    arr1[so1 -1] = arr1[so2 -1];
    arr1[so2 -1] = hoanDoi;
    document.getElementById("ketQuaBai6").innerHTML = arr1;

}
// 7. Sắp xếp mảng theo thứ tự tăng dần. 
function mangTangDan() {
    arr1.sort(function mangTangDan(a, b) {
      a = +a;
      b = +b;
      return a - b;
    });
    document.getElementById("ketQuaBai7").innerHTML = arr1
  }


//   8. Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1 
function timSoNguyen() {
    for (var i = 0; i < arr1.length; i++) {
      var soNguyen = arr1[i];
      var mangSoNguyen = true;
  
      if (soNguyen <= 1) {
        continue; 
      }
  
      for (var j = 2; j <= Math.sqrt(soNguyen); j++) {
        if (soNguyen % j === 0) {
          mangSoNguyen = false;
          break;
        }
      }
  
      if (mangSoNguyen) {
        return soNguyen; 
      }
    }

    return -1; 
}
  document.getElementById("ketQuaBai8").innerHTML = -1;

//   9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?

function themMang() {
    var themMangMoi = document.getElementById("themMangMoi").value * 1;
    mangSoThuc.push(themMangMoi);
    document.querySelector("#hienThiMangVuaTHem").innerHTML = mangSoThuc;
  }
  function demSoNguyen() {
    var demSoNguyenTrongMang = 0;
    for (var i = 0; i <= mangSoThuc.length; i++) {
      if (typeof mangSoThuc[i] == "number") {
        demSoNguyenTrongMang++;
      }
    }
    document.querySelector("#hienThiSoNguyen").innerHTML = demSoNguyenTrongMang;
  }


//   10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn. 
function soSanh() {
    var soDuong = 0; // Đếm số lượng số dương
    var soAm = 0; // Đếm số lượng số âm
  
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] > 0) {
        s++; // Tăng đếm số dương nếu phần tử lớn hơn 0
      } else if (arr1[i] < 0) {
        soAm++; // Tăng đếm số âm nếu phần tử nhỏ hơn 0
      }
    }
  
    if (soDuong > soAm) {
      document.getElementById("ketQuaBai0").innerHTML = "số dương > số âm";
    } else if (countPositive < countNegative) {
        document.getElementById("ketQuaBai0").innerHTML = "số dương < số âm";
    } else {
        document.getElementById("ketQuaBai0").innerHTML = "số dương = số âm";
    }
  }
  function isPrime(num) {
    var sqrtnum = Math.floor(Math.sqrt(num));
    var prime = num != 1;
    for (var i = 2; i < sqrtnum + 1; i++) {
      // sqrtnum+1
      if (num % i == 0) {
        prime = false;
        break;
      }
    }
    return prime;
  }