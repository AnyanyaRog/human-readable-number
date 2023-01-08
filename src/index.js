module.exports = function toReadable (number) {

    let array1 = [ 'zero','one','two','three','four', 'five', 'six','seven', 'eight','nine','ten', 'eleven', 'twelve','thirteen', 'fourteen', 'fifteen','sixteen', 'seventeen','eighteen','nineteen']
    let array2 = [ 'ten','twenty','thirty','forty','fifty','sixty', 'seventy', 'eighty','ninety'];
const num = String(number).split('');
if (number <= 19) {
    return array1[number];
}
if (num.length === 2)
    if (number % 10 == 0) {
        return array2[number/10-1];
    } else {
            return (array2[num[0]-1]+ ' ' + array1[num[1]]);
    }
    if (num.length === 3)
        if (number % 100 == 0) {
        return (array1[num[0]] + ' ' + 'hundred'); } else
        if(num[1]==0) {return (array1[num[0]] + ' ' + 'hundred' + ' ' + array1[num[2]])}
        if (num[1] ==1) {
            if(num[2] ==0) {
                return (array1[num[0]] + ' ' + 'hundred' + ' ' + array1[10]);
               } 
            if(num[2] ==1) {
                return (array1[num[0]] + ' ' + 'hundred' + ' ' + array1[11]);
               } 
               if(num[2] ==2) {
                return (array1[num[0]] + ' ' + 'hundred' + ' ' + array1[12]);
               } 
        if(num[2] ==3) {
            return (array1[num[0]] + ' ' + 'hundred' + ' ' + array1[13]);
           } 
           if(num[2] ==4) {
            return (array1[num[0]] + ' ' + 'hundred' + ' ' + array1[14]);
           }
           if(num[2] ==5) {
            return (array1[num[0]] + ' ' + 'hundred' + ' ' + array1[15]);
           }
           if(num[2] ==6) {
            return (array1[num[0]] + ' ' + 'hundred' + ' ' + array1[16]);
           }
           if(num[2] ==7) {
            return (array1[num[0]] + ' ' + 'hundred' + ' ' + array1[17]);
           }
           if(num[2] ==8) {
            return (array1[num[0]] + ' ' + 'hundred' + ' ' + array1[18]);
           }
           if(num[2] == 9) {
            return (array1[num[0]] + ' ' + 'hundred' + ' ' + array1[19]);
           }} if(num[2] != 0 )  {
            return (array1[num[0]] + ' ' + 'hundred' + ' ' + array2[num[1]-1] + ' ' + array1[num[2]]);
           } else  return (array1[num[0]] + ' ' + 'hundred' + ' ' + array2[num[1]-1])
           
        }


    



