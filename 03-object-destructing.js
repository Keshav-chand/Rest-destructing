const john={
    name:'John',
    age:32,
    emailids:[
        'john@gmail.com',
        'john@yahoo.com'
    ],
    address:{
        city:'Banglore',
        pincode:560140
    }
};

const{ name,address:{ city },...otherdetailsofjohn}= john;
console.log(name,city,otherdetailsofjohn);