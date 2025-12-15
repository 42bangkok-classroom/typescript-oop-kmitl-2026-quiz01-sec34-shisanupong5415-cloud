const star = Number(process.argv[2]);

if (isNaN(star) === false) {
    for (let i = 1; i <= star; i++) {
            console.log('*'.repeat(i));
        }
} else {
    console.log('');
}