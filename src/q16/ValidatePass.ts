const password = String(process.argv[2]);

if ((password.length >= 8) && password.includes('1,2,3,4,5,6,7,8,9,0') && password != password.toLowerCase()) {
    console.log('Valid');
} else {
    console.log('Invalid');
}