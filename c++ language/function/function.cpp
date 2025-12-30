// #include <iostream>
// using namespace std;

// int getMin(int a, int b) {
//     if (a < b) {
//         return a;
//     }
//     return b;
// }

// int main() {
//     int a, b;
//     cin >> a >> b;

//     cout << "Min is: " << getMin(5, 3);
//     return 0;
// }


//sum to n
// #include <iostream>
// using namespace std;
// int sum(int a ,int n){
//     int val=0;
// for(int i=a;i<=n;i++){
// val=val+i;
// }
// return val;
// }
// int main(){
//     int a=1,n;
//     cin>>n;
//     cout<<"sum is"<<sum(a,n);
//     return 0;
// }

//n factorial
#include <iostream>
using namespace std;

int fact(int a,int n){
int facto=1;
for(int i=n;i>=a;i--){
    facto *=i;
}
return facto;
}
int main(){
    int a=1,n;
    cout<<"enter n"<<endl;
    cin>>n;
    cout<<"factorial is"<<fact(a,n);
    
    return 0;
}
