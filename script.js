// thêm sinh viên
// hiển thị số lượng ô input
let objectStudent = {
    name: "",
    id: "",
    birth: "",
    classes: "",
    GPA: "",
  };
let studentList = [];

const buttonSubmit = document.querySelector(".input-submit");
if(buttonSubmit){
    const name = document.querySelector(".public-name");
    const id = document.querySelector(".public-id");
    const birth = document.querySelector(".public-birth");
    const classes = document.querySelector(".public-classes");
    const GPA = document.querySelector(".public-gpa");
    buttonSubmit.addEventListener("click", () => {
        objectStudent.name = name.value;
        objectStudent.id = id.value;
        objectStudent.birth = birth.value;
        objectStudent.classes = classes.value;
        objectStudent.GPA = GPA.value;
        studentList.push(objectStudent);
    });
    // clear input
    const buttonClear = document.querySelector(".input-reset");
    buttonClear.addEventListener("click", () => {
        name.value = "";
        id.value = "";
        birth.value = "";
        classes.value = "";
        GPA.value = "";
    });
    // end clear input
    // store in local storage
    const buttonSave = document.querySelector(".input-store");
    buttonSave.addEventListener("click", () => {
        // localStorage.setItem("studentList", JSON.stringify(studentList));
        // append to local storage
        let studentList = JSON.parse(localStorage.getItem("studentList"));
        if (studentList) {
            studentList.push(objectStudent);
            localStorage.setItem("studentList", JSON.stringify(studentList));
        } else {
            localStorage.setItem("studentList", JSON.stringify([objectStudent]));
        }
    });
    // end store in local storage
}

// Hiển thị danh sách sinh viên
const buttonDisplay = document.querySelector(".display-list");
if (buttonDisplay) {
    // lấy dữ liệu từ local storage
    let studentList = JSON.parse(localStorage.getItem("studentList"));
    // hiển thị dữ liệu 
    buttonDisplay.addEventListener("click", () => {
        const table = document.querySelector(".display-list1");
        if (studentList) {
            for (let i = 0; i < studentList.length; i++) {
                table.innerHTML += `
                <div class="student">
                <div>_____________________________________________________________</div>
                <div class="student-name">Họ và tên :${studentList[i].name}</div>
                <div class="student-id">Mã sinh viên: ${studentList[i].id}</div>
                <div class="student-birth"> Ngày tháng năm sinh: ${studentList[i].birth}</div>
                <div class="student-classes">Lớp :${studentList[i].classes}</div>
                <div class="student-gpa">GPA: ${studentList[i].GPA}</div>
                <div>_____________________________________________________________</div>
                </div>`;
            }
        }
    });
}
// end Hiển thị danh sách sinh viên

// sửa thông tin sinh viên
const buttonEdit = document.querySelector(".input-submit-fix");
if(buttonEdit){
    const name1 = document.querySelector(".public-name-fix");
    const id1 = document.querySelector(".public-id-fix");
    const birth1 = document.querySelector(".public-birth-fix");
    const classes1 = document.querySelector(".public-classes-fix");
    const GPA1 = document.querySelector(".public-gpa-fix");
    let objectStudent1 = {
        name: "",
        id: "",
        birth: "",
        classes: "",
        GPA: "",
      };
    buttonEdit.addEventListener("click", () => {
        objectStudent1.name = name1.value;
        objectStudent1.id = id1.value;
        objectStudent1.birth = birth1.value;
        objectStudent1.classes = classes1.value;
        objectStudent1.GPA = GPA1.value;
    });
    // clear input
    const buttonClear1 = document.querySelector(".input-reset-fix");
    buttonClear1.addEventListener("click", () => {
        name1.value = "";
        id1.value = "";
        birth1.value = "";
        classes1.value = "";
        GPA1.value = "";
        console.log("ok")
    });
    // end clear input
    // overwrite student with the same id
    const buttonSave1 = document.querySelector(".input-submit-fix");
    buttonSave1.addEventListener("click", () => {
        let studentList = JSON.parse(localStorage.getItem("studentList"));
        if (studentList) {
            for (let i = 0; i < studentList.length; i++) {
                if (studentList[i].id === objectStudent1.id) {
                    studentList[i] = objectStudent1;
                    localStorage.setItem("studentList", JSON.stringify(studentList));
                    break;
                }
            }
        }
    });
}



// end sửa thông tin sinh viên