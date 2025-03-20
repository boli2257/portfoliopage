const url = "https://raw.githubusercontent.com/boli2257/portfoli.JSON/refs/heads/main/portfoli_JSON.json"

getData(url, renderProjects)

function renderProjects(data){
    console.log(data);
    
    data.forEach(({id, title, photo_url, repo_link, topics, site_link})=> {
        console.log(site_link);
        
        document.getElementById("munkaim").innerHTML += 
    });
}
