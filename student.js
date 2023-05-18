let student = {
    Name : "Nirmalya",
    Age : 29,
    Role : "Backend Engineer",
    greet : function(){
        console.log("Hi, I am "+ this.Name);
    }
};

student.greet();