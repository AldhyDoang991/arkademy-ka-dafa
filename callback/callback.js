const kendaraan = (motor,mobil,callback) => {
    return callback(motor,mobil);
}

const dataKendaraan = kendaraan(' Harley Davidson','Lambhorgini', (motor, mobil)=>{
    return mobil + motor;
});

console.log(dataKendaraan);