const express=require('express');
const app=express();

function Arithmatic_String(operands,minimum,maximum,decimalPlaces){
    let a=operands;
    let min=minimum;
    let max=maximum;
    let dec=decimalPlaces;
    let d=Math.pow(10,dec);

    let arr=[];

    for(let i=0; i<a; i++){

        let r=Math.floor((Math.random()*(max*d-min*d+1))+min*d)/d;
        arr[i]=r;
    }
    let s="";
    for(let i=0; i<a; i++){
        let c=Math.floor(Math.random()*(5-1+1));
        // let o='+';
        switch(c){
            case 1:
                c='+';
                break;
            case 2:
                c='-'
                break;
            case 3:
                c='*';
                break;
            case 4:
                c='/';
                break;
            default:
                c='+';
        }
        s=s+arr[i]+" ";
        if(i!=a-1){
            s+=c+" ";
        }
    }
    let ts=s.split(" ").join("")
    let answer=Math.round(eval(ts)*d)/d;
    // let answer=eval(ts);
    return {
        string:ts,
        result:answer
    }
}

app.get('/',(req,res)=>{
    const {operands,minimum,maximum,decimalPlaces}=req.query;
    const arithmatic_object=Arithmatic_String(operands,minimum,maximum,decimalPlaces);
    res.json(arithmatic_object);
})
app.post('/',(req,res)=>{
    const {operands,minimum,maximum,decimalPlaces}=req.query;
    const arithmatic_object=Arithmatic_String(operands,minimum,maximum,decimalPlaces);
    res.json(arithmatic_object);
})

app.get('/sample',(req,res)=>{
    const arithmatic_object=Arithmatic_String(4,1,50,2);
    res.json(arithmatic_object);
})


app.listen(4000,()=>{
    console.log('Server started listening at port 4000');
})