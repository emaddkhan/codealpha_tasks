#include <iostream>
using namespace std;
class Student {
public:
    int rollNo;
    float marks;
    // Parameterized constructor
    Student(int r, float m) {
        rollNo = r;
        marks = m;
    }
    // Copy constructor
    Student(const Student &s) {
        rollNo = s.rollNo;
        marks = s.marks;
    }
    void display() {
        cout << "Roll No: " << rollNo << ", Marks: " << marks << endl;
    }
};
int main() {
    Student s1(101, 95.5);   // original object
    Student s2 = s1;         // copy constructor called
    cout << "Original Student: ";
    s1.display();
    cout << "Copied Student: ";
    s2.display();
    return 0;
}
