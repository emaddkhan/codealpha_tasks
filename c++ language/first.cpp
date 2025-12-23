#include <iostream>
using namespace std;
int main()
{
    // int a = 25;
    // cout <<sizeof(a)<<endl;  //sizeOf is a funtion which is used to find the number of bytes covering by the int
    // char grade = 'A';
    // cout<<sizeof(grade)<<endl;
    // bool isSafe = true;
    // cout << isSafe << endl;

    // char grade ='A';
    // int value=grade;
    // cout<<value<<endl;

    // int price=100.89;
    // int newPrice =(int)price;
    // cout<<newPrice<<endl;
    // int age;
    // cout<<"Enter your age: ";
    // cin>>age;
    // cout<<"Your age is :"<<age<<endl;
    // for(int i = 1;i<=10;i++){
    //     cout<<"2 *"<<2<<"="<<i*2<<endl;
    // }
    // return 0;
    // int x=1;
    // while(x<=5){
    //     cout<<x<<endl;
    //     x++;
    // }
    // int n = 1;
    // do{
    //     cout<<n<<endl;
    //     n++;
    // }while (n<=1);
    // int i;
    // int sum=0;
    // for(i=1;i<=50;i++){
    //     sum +=i;
    // }
    //     cout<<sum<<endl;
    // int i;
    // for(i=10;i>=0;i--){
    //     cout<<i<<endl;
    // }


    // int start,end;
    // int i;
    // cout<<"enter start point";
    // cin>>start;
    // cout<<"enter end point";
    // cin>>end;
    // cout<<"odd number btw"<<start<<"and"<<end<<"are:"<<endl;
    // for(i=start;i<=end;i++){
    //     if(i%2!=0){
    //         cout<<i<<endl;
    //     }
    // }

    //==========================PATTERNS

    // int n;
    // cout<<"enter rows";
    // cin>>n;
    // for(int i = 1;i<=n;i++){
    //     char ch='A';
    //     for(int j=1;j<=n;j++){
    //         cout<<ch;
    //         ch +=1;
    //     }
    //     cout<<endl;
    // } 
    //  int n;
    // cout<<"enter rows";
    // cin>>n;
    // int num =1;
    // for(int i = 1;i<=n;i++){

    //     for(int j=1;j<=n;j++){
    //         cout<<num;
    //         num+=1;
    //     }
    //     cout<<endl;
    // } 

    // int n;
    // cout<<"enter rows";
    // cin>>n;
    // char ch ='A';
    // for(int i =0;i<n;i++){
    //     for(int j=0; j<n;j++){
    //         cout<<ch;
    //         ch +=1;
    //     }
    //     cout<<endl;
    // } 
    // int n;
    // cout<<"Enter n";
    // cin>>n;
    // char ch ='A';

    // for(int i=1;i<=n;i++){
    //     for(int j = 1;j<=i;j++){
    //         cout<<ch<<"";
            
    //     }
    //     ch++;
    //     cout<<endl;
    // }
    int n;
    cout<<"Enter n";
    cin>>n;
   

    for(int i=0;i<n;i++){
        for(int j = 0;j<i;j++){
            cout<<" ";
            
        }
        for (int j = 0;j<n-i;j++){
            cout<<(i+1);
        }
        
        cout<<endl;
    }
}
