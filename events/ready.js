client.on('ready', () => {
  console.log(`${client.user.tag} giriş yaptı!`); 
  client.user.setActivity('${prefix}yardım JazyBOT', { type: 'STREAMING'}); 
  
});