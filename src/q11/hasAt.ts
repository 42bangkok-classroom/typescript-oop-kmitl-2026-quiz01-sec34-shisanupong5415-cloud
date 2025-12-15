const text = String(process.argv[2]);

if (text.includes('@')) {
  console.log('Has @');
} else {
  console.log('No @');
}