// #include <iostream>
// #include <string>
// using namespace std;

// class Teacher //ye aik encapsulation hai
// { // its a obj
//     // properties;
// private: //this can acces inside class and to derived classes

//     double salary;

// public:  //this can access to every one 
//     string name;
//     string dept;
//     string subject;
//     //agr me chahta hoo k mujy baar baar dept set nah krna parhe hr teacher k liye toh me kia kroo ga constructer aik hi bari me set krdooga dept or woh hr teacher k liye set hojeyega
//     // Teacher(){ //non parametrizre constructer
//     //     dept="Computer Science";
//     // }
//     //parametrize constructer
//     Teacher(string name,string dept,string subject,double salary){
//         this->name=name;//this is used to show the property of object to compiler
//         this->dept=dept;
//         this->subject=subject;
//         this->salary=salary;
//     }

//     //copy constructer
//     Teacher(Teacher &orgObj){//pass by refercne ->iska matlab yahan pe jo obj creat ho rha hai woh copy mhi balke original hi hai uska hum address pass krte hai
//         cout<<"i am a copy constructer\n";
//         this->name=orgObj.name;
//         this->dept=orgObj.dept;
//         this->subject=orgObj.subject;
//         this->salary=orgObj.salary;
//     };

//     // methods/member funtion;
//     void changeDept(string newDept)
//     {
//         dept = newDept;
//     }
//     //to access the private property we set function in public to get it
//     //setterFunction
//     // void setSalary(double s){
//     //     salary=s;
//     // }
//     // double getSalary(){
//     //     return salary;
//     // }
//     void getInfo(){
//         cout<<"name: "<<name<<endl;
//         cout<<"subject "<<subject<<endl;
//     }
// };
// class Bank{
//     private:
//     double balance;
//     string password; //data hiding
//     public:
//     Bank(){ //non parametrizre constructer
//         cout<<"hi\n";
//     }; //so this is the constructer that why it doesnt have any return type
//     string name;
//     string accountId;

// };

// int main()
// {
//     // Teacher t1;//jese hi humne object creation wali line likhi wese hi constructer ko call ja rhi hai
//     // iska matlab humne hamari first teacher k liye object create krlia
//     // agr hame kisi object ki property ya method ko access krna hot hota hai toh hum ise
//     //.opertor ke zaria access krte hain
//     // t1.name = "emad";
//     // t1.subject="English";

//     //now we will use parametrize constructer

//     Teacher t1("Emad","Computer Science","C++",25000);

//     //now we can access private property
//     // t1.setSalary(25000);
//     // cout<<t1.getSalary()<<endl;
//     // cout<<t1.name<<endl;
//     // t1.getInfo();
//     Teacher t2(t1);//default copy constructer invoke
//     t1.getInfo();

//     Bank b1;
//     Bank b2; //yani by default constructer run nhi hoga balke hamra wala hoga woh bhi sb se pehle
//     b1.name="ching chong";
//     b1.accountId="@568fds";
//     cout<<b1.name<<endl;
//     cout<<b1.accountId<<endl;

//     return 0;
// }

//inheritance

// #include <iostream>
// using namespace std;
// #include <string>

// class Person{
//     public:
//     string name;
//     int age;
//     Person(){

//     }
// };
// class Student : public Person{
//     public:
//     int rollno;

//     void getInfo(){
//         cout<<"name :"<<name<<endl;
//         cout<<"age :"<<age<<endl;
//         cout<<"rollno :"<<rollno<<endl;
//     }

// };
// int main(){
//     Student s1;
//     s1.name="emad";
//     s1.age=21;
//     s1.rollno=564;
//     s1.getInfo();
//     return 0;
// }


#include <iostream>
using namespace std;

// Base class
class Person {
public:
    string name;

    void showName() {
        cout << "Name: " << name << endl;
    }
};

// Derived class
class Student : public Person {
public:
    int rollNo;

    void showRollNo() {
        cout << "Roll No: " << rollNo << endl;
    }
};

int main() {
    Student s1;

    s1.name = "Ali";     // inherited member
    s1.rollNo = 101;

    s1.showName();      // inherited function
    s1.showRollNo();

    return 0;
}
