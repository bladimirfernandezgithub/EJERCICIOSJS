const users = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: true},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 20, premium: false},
    {username: 'sergio58', age: 26, premium: true},
    ];

const premium = users.filter(function(user){
    if (user.premium){
        console.log(user.username+" tu eres usuario premium");
    } 
});

const noPremium = users.filter(function(user){
    if (user.premium==false){
        console.log(user.username + " tu no eres usuario premium");
    } 
});
