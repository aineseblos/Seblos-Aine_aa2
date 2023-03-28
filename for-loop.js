var num = 1;
document.write(num + ",");

for(let x = 1; x >=-10; x--){
    num = num*2 + x;
    document.write(" " + num);
    if(num !=4108){
        document.write(",");
    }
}