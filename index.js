const csvFilePath='./Spot2D/stocks.csv'
const csv=require('csvtojson');
const converter=csv({
    delimiter:";",
    ignoreEmpty:true,
});
 
// Async / await usage
const myResult= async ()=>{
   return jsonArray=await converter.fromFile(csvFilePath);
}
myResult().then(jsonArray => console.log(jsonArray));