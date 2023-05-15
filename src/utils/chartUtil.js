import axios from "axios";

class chartUtil {


    dataset;

    constructor(dataset) {
        this.dataset = dataset;
    }


    calculateTotal($value) {

        let sum = 0;
        for (const val of this.dataset) {
            let total = val[$value];
            sum += total;

        }
        console.log(sum);
        return sum
    }

     timeConvert(n) {
        var num = n;
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        console.log( num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).");
        return rhours;
    }

    EarnedPerHour(hours, earnings)
    {
       var avarageEarningPerHour =  earnings / hours;
       console.log(avarageEarningPerHour);
       return avarageEarningPerHour;
    }

    PostOfficePrecantage()
    {
        const totalItems = this.dataset["postOffice"];
        console.log(totalItems);
        for (const num of arr) {
            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }

    }

}

export default chartUtil
