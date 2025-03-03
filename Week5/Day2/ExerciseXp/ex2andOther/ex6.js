(function start(numberOfChildren, prtnName, geoLoc,jobTitle){
        numberOfChildren=4;
        prtnName="rex";
        geoLoc="atlantida";
        jobTitle="guard";
        const newDiv=document.createElement("div")
        newDiv.textContent=`You will be a ${jobTitle} in ${geoLoc}, and married to ${prtnName} with ${numberOfChildren} kids.`
        document.body.appendChild(newDiv);
})();
