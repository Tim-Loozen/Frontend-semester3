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
        console.log(num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).");
        return rhours;
    }

    EarnedPerHour(hours, earnings) {
        var avarageEarningPerHour = earnings / hours;
        console.log(avarageEarningPerHour);
        return avarageEarningPerHour;
    }

    PostOfficePrecantage() {

         var postOfficeArray = [];
        for (const val of this.dataset) {
        postOfficeArray.push(val["postOffice"]);
        }
        console.log(postOfficeArray);

        const totalItems = postOfficeArray.length
        const uniqueItems = [...new Set(postOfficeArray)]
        uniqueItems.forEach(currColor => {
            const numItems = postOfficeArray.filter(color => color === currColor)
            const percentage  = `PostCompany ${currColor} represents ${numItems.length * 100 / totalItems}%`
            console.log(percentage);
            return percentage;
        })

    }

    MostValubaleRoute()
    {
        //uitrekenen welke route het meeste per uur verdient
        //gemiddelde per uur berkenen * aantal uur hoelang ik over die route heb gedaan
        for (const val of this.dataset)
        {
           const HoursForEachRoute = this.timeConvert(val["Minutes"]);
           const avarageRoute = this.EarnedPerHour(HoursForEachRoute, val["earnings"]);
           const TotalEarningsThisRoute = HoursForEachRoute * avarageRoute;
           console.log(TotalEarningsThisRoute)
        }
            return TotalEarningsThisRoute;
    }

}

export default chartUtil
