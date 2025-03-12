const URL="https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const fetchData= async(url)=>{
        try {
                const responce= await fetch(url);
                if(!responce.ok){
                        throw new Error(`Error :${responce.status}`);
                        
                }
                const data = await responce.json();
                return data;
        } catch (error) {
                console.error('Error',error);
                
        }
};

fetchData(URL)
        .then((data)=>{
                console.log(data);
                
        })
        .catch((err)=>{
                console.error('Error',err);
        })