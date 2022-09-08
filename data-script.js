//','Percent who attend or visit','Percent who personally perform or create','"Percent who read literature (novels',' short stories',' poetry',' or plays)"','"Use a device to watch',' listen to',' and or download any music',' theater',' dance',' visual arts',' or creative writing"'

// var arr = ['U.S.','45.2%','32.7%','39.9%','55.3%','Alabama','27.3%','22.0%','23.7%','37.1%','Alaska','48.8%','44.2%','55.1%','71.2%','Arizona','56.4%','35.6%','39.2%','59.5%','Arkansas','36.6%','32.3%','30.0%','44.2%','California','42.8%','30.9%','32.2%','57.5%','Colorado','65.1%','43.7%','54.3%','70.8%','Connecticut','56.4%','37.4%','40.7%','57.5%','Delaware','44.5%','33.6%','37.8%','43.9%','District of Columbia','56.6%','42.9%','47.7%','59.5%','Florida','38.1%','23.2%','30.5%','47.7%','Georgia','43.9%','26.2%','45.3%','58.3%','Hawaii','39.4%','37.3%','27.8%','42.4%','Idaho','47.4%','35.7%','47.0%','52.3%','Illinois','49.4%','36.2%','44.8%','64.1%','Indiana','37.2%','36.4%','39.9%','57.0%','Iowa','41.7%','37.6%','35.6%','46.2%','Kansas','41.0%','30.3%','40.7%','59.1%','Kentucky','40.5%','25.2%','37.2%','46.4%','Louisiana','29.7%','27.4%','28.9%','48.3%','Maine','42.7%','45.8%','44.6%','58.4%','Maryland','48.9%','34.2%','44.6%','56.0%','Massachusetts','51.0%','35.6%','50.0%','52.0%','Michigan','50.1%','35.6%','42.7%','52.1%','Minnesota','56.2%','38.0%','50.7%','60.0%','Mississippi','28.2%','24.6%','24.3%','46.3%','Missouri','44.4%','35.6%','42.2%','54.9%','Montana','52.8%','46.7%','57.8%','65.1%','Nebraska','46.8%','47.8%','43.3%','52.3%','Nevada','34.9%','24.8%','26.5%','50.3%','New Hampshire','51.6%','45.4%','47.7%','63.6%','New Jersey','42.3%','25.8%','35.9%','51.5%','New Mexico','47.4%','35.6%','42.4%','60.4%','New York','48.8%','28.9%','43.0%','56.1%','North Carolina','41.4%','29.7%','34.4%','48.1%','North Dakota','55.5%','39.5%','40.4%','56.8%','Ohio','45.4%','37.8%','44.4%','64.7%','Oklahoma','40.9%','31.5%','39.6%','47.3%','Oregon','65.9%','48.5%','66.2%','72.4%','Pennsylvania','43.4%','40.3%','42.4%','53.2%','Rhode Island','51.0%','33.5%','42.6%','68.2%','South Carolina','43.0%','25.4%','48.2%','56.4%','South Dakota','49.0%','35.3%','40.3%','56.5%','Tennessee','50.3%','38.3%','44.2%','59.4%','Texas','43.3%','23.2%','34.0%','51.6%','Utah','53.7%','58.0%','59.3%','66.6%','Vermont','57.3%','50.9%','58.4%','60.9%','Virginia','57.3%','40.0%','44.6%','59.5%','Washington','48.5%','51.5%','48.2%','55.8%','West Virginia','33.4%','27.4%','38.8%','41.7%','Wisconsin','42.0%','40.5%','48.0%','58.8%','Wyoming','47.0%','43.6%','44.5%','56.3%']

// arr.forEach((item) => {
//     function containsAnyLetter(str) {
//         return /[a-zA-Z]/.test(str);
//     }
//     var getJson = document.getElementById('json');
//     if(containsAnyLetter(item)){
//         var z = document.createElement('p');
//         z.innerHTML = item;
//         document.body.appendChild(z);
//     };
// })

let state = [ 
    "AK - Alaska", 
                "AL - Alabama", 
                "AR - Arkansas", 
                "AS - American Samoa", 
                "AZ - Arizona", 
                "CA - California", 
                "CO - Colorado", 
                "CT - Connecticut", 
                "DC - District of Columbia", 
                "DE - Delaware", 
                "FL - Florida", 
                "GA - Georgia", 
                "GU - Guam", 
                "HI - Hawaii", 
                "IA - Iowa", 
                "ID - Idaho", 
                "IL - Illinois", 
                "IN - Indiana", 
                "KS - Kansas", 
                "KY - Kentucky", 
                "LA - Louisiana", 
                "MA - Massachusetts", 
                "MD - Maryland", 
                "ME - Maine", 
                "MI - Michigan", 
                "MN - Minnesota", 
                "MO - Missouri", 
                "MS - Mississippi", 
                "MT - Montana", 
                "NC - North Carolina", 
                "ND - North Dakota", 
                "NE - Nebraska", 
                "NH - New Hampshire", 
                "NJ - New Jersey", 
                "NM - New Mexico", 
                "NV - Nevada", 
                "NY - New York", 
                "OH - Ohio", 
                "OK - Oklahoma", 
                "OR - Oregon", 
                "PA - Pennsylvania", 
                "PR - Puerto Rico", 
                "RI - Rhode Island", 
                "SC - South Carolina", 
                "SD - South Dakota", 
                "TN - Tennessee", 
                "TX - Texas", 
                "UT - Utah", 
                "VA - Virginia", 
                "VI - Virgin Islands", 
                "VT - Vermont", 
                "WA - Washington", 
                "WI - Wisconsin", 
                "WV - West Virginia", 
                "WY - Wyoming"]


function containsAnyLetter(str) {
    return /[a-zA-Z]/.test(str);
}

var getSpans = document.getElementsByTagName('span');
for(var i = 0; i < getSpans.length; i++){
    getSpans[i].setAttribute('id', 'item'+i);
    var getIds = document.getElementById('item'+i)
    getIds.insertAdjacentHTML('afterend', '<br>');
    document.querySelector('#item'+i+' commas:nth-child(1)').setAttribute('data-type', 'state');
    document.querySelector('#item'+i+' commas:nth-child(2)').setAttribute('data-type', 'attendOrVisit');
    document.querySelector('#item'+i+' commas:nth-child(3)').setAttribute('data-type', 'performCreate');
    document.querySelector('#item'+i+' commas:nth-child(4)').setAttribute('data-type', 'read');
    document.querySelector('#item'+i+' commas:nth-child(5)').setAttribute('data-type', 'device');

    

    function structureDataForState(dataType){
        var getAttendOrVisitHTML = document.querySelector(('#item'+i+' [data-type="'+dataType+'"]')).innerHTML;
        var getAttendOrVisitData = document.querySelector(('#item'+i+' [data-type="'+dataType+'"]'));
        getAttendOrVisitData.innerHTML = '<br>"'+dataType+'":"' + getAttendOrVisitHTML + '",<br><state-abbr>"stateAbbr":</state-abbr><br>';
    }
    structureDataForState('state');


    function structureData(dataType){
        var getAttendOrVisitHTML = document.querySelector(('#item'+i+' [data-type="'+dataType+'"]')).innerHTML;
        var getAttendOrVisitData = document.querySelector(('#item'+i+' [data-type="'+dataType+'"]'));
        getAttendOrVisitData.innerHTML = '<br>"'+dataType+'":"' + getAttendOrVisitHTML + '",';
    }
    
    structureData('attendOrVisit');
    structureData('performCreate');
    structureData('read');
    structureData('device');
    
    
}


for(var i = 0; i < getSpans.length; i++){
    var split = state[i].split(' - ');
    var getStateHTML = document.querySelector('#item'+i+' [data-type="state"]').innerHTML;
    console.log(getStateHTML);
    if(getStateHTML.includes(split[1])){
        document.querySelector('[data-type="state"]').setAttribute('state-name', split[1]);
    }
}


