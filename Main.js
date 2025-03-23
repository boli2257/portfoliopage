const url = "https://raw.githubusercontent.com/boli2257/portfoli.JSON/refs/heads/main/portfoli_JSON.json"
function CreateProjectCard(data){
    let temakorok = ""

    data.topics.forEach(temakor => {
        temakorok += `<li>${temakor}</li>`
    });

    return `<div class="project-container">
                <div class="project-layout">
                    
                    <div class="project-description">
                        <h3 id="alcim">${data.title}</h3>
                        <br>
                    <div class="project-img">
                        <img id="img-${data.id}" src="${data.photo_url}" alt="">
                    </div>
                        <p>Témakörök</p>
                        <ul>
                            ${temakorok}
                        </ul>

                        <div class="project-links">
                            <a href="${data.repo_link}" id="git" target="_blank" style="text-align: right;">Github link</a>
                            <a href="${data.site_link}" id="web" target="_blank" style="text-align: right;">Weboldal</a>
                        </div>
                    </div>
                </div>
            </div> 
        `}

function Render(json)
{
    const container = document.getElementById("munkaim")

    json.forEach(data => {
        container.innerHTML += CreateProjectCard(data)
    });
}

getData(url, Render)