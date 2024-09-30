#include <bits/stdc++.h>
#define pb push_back
#define fst first
#define scd second
#define mkp make_pair
#define nl "\n"

using namespace std;

void printp(vector<pair<int,int>>&p){
    // cout<<"yes\n";
    for (auto i:p) {
        cout<<i.first<<" "<<i.second<<"\n";
    }
    cout<<nl;
}

void print(vector<int>&p){
    // cout<<"yes\n";
    for (auto i:p) {
        cout<<i<<" ";
    }
    cout<<nl;
}

void solve(){
   int n;
   cin>>n;
   vector<<int>v(n);
   for(int i=0;i<n;i++){
       cin>>v[i];
   }
   int odd=v[0]/2;
   for(int i=1;i<n;i++){
       if(v[i]%2!=odd){
           odd=-1;
           break;
       }
   }
   if(odd==-1)cout<<-1<<endl;
   else{
       cout<<31<<endl;
       for(int i=31;i>0;i--){
           cout<<i<<" ";
       }
       cout<<endl;
   }
}



int main()
{
    cin.tie(0);
	ios::sync_with_stdio(false);
	int t;
	cin>>t;
	while(t--)
	solve();
    return 0;
}