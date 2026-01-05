// #include <iostream>
// using namespace std;

// int main(){
    // int marks[5]={99,100,54,98,36};
    // //loops from 0 to size-1
    // int size=5;
    // for(int i=1;i<size;i++){
    // cout<<marks[i]<<endl;
    // }

    //to find smallest number in array
    // int num[]={5,12,22,1,15,-24};
    // int size=6;
    // int smallest=INT8_MAX;
    // int largest=INT8_MIN;
    // for(int i=1;i<size;i++){
    //     // if(num[i]<smallest){
    //     //     smallest=num[i];
    //     // }
    //     smallest =min(num[i],smallest);
    //     largest =max(num[i],largest);
    // }
    // cout<<"smallest is:"<<smallest;
    // cout<<"largest is:"<<largest;
    // return 0;
    
// }
#include <iostream>
using namespace std;

void changeArr(int arr[],int size) {
    cout <<"in function\n";
    for(int i=1;i<size;i++){
        arr[i]=arr[i]*2;
    };

}
int main(){
    int arr []={1,2,3};
    changeArr(arr,3);
    cout <<"in main\n";
    for(int i=0;i<3;i++){
        cout<<arr[i];
    };
    return 0;
}