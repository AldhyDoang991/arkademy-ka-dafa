const hewan = ['singa', 'ular', 'harimau'], tambahan = ['buaya', 'beruang', {obj: 'rusa'}]
const arraypushhewan = async () => {
    await tambahan.map(res => hewan.push(res))
    console.log(hewan);
}

arraypushhewan();