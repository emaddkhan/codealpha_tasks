#include <iostream>
#include <string>
using namespace std;

class Teacher {
    //properties;

    string name;
    string dept;
    string subject;
    double salary;

    //methods/member funtion;
    void changeDept(string newDept){
        dept=newDept;
    }

};

int main(){
    Teacher t1;// iska matlab humne hamari first teacher k liye object create krlia
    return 0;
}