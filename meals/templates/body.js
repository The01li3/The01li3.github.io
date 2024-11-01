header = `
<div class="col col-8">
    <div class="container">
        <div class="row flex-nowrap justify-content-start">
            <div id="logo" onclick="location.href='mealIdeasHome.html';" class="col g-0 col-1">
                <p class="text-center">T</p>        
            </div>
            <div id="headwrap" class="col d-none d-xxl-block col-8">
                <p>The01li3's Recipes</p>
            </div>
            <div id="search-div" class="col my-auto">
                <form class="input-group" onsubmit="fnGotoSearch(event)">
                    <input type="search" id="site-search" name="searchValue" class="form-control form-control-sm" list = "search-results" autocomplete="off" placeholder="Search"/>
                    <button type="submit" class="btn btn-outline-search"><i class="bi bi-search"></i></button>     
                    <datalist id="search-results">
                    </datalist>      
                </form>
            </div> 
        </div>
    </div>
</div>`
document.getElementById('headerBanner').innerHTML = header;

function fnGotoSearch(){
    var vSearchParam = event.target.elements.searchValue.value;
    window.location.href = "searchResults.html?searchValue=" + vSearchParam;
    event.preventDefault();
}

function widget_addLoadEvent(pFunction)
{
    var vfnOldOnLoad = window.onload;
    if (typeof window.onload != 'function')
    {
        window.onload = pFunction;
    }
    else
    {
        window.onload = function()
        {
            vfnOldOnLoad();
            pFunction();
        }
    }
};

function fnPopulateIngredients(pDivId,pArrIngredients){

    Handlebars.registerHelper("inc", function(value, options) {
        return parseInt(value) + 1;
    });

    var vIngList = Handlebars.compile(`{{#each pArrIngredients}}
            <div class="form-check form-switch">
                <input class="form-check-input " type="checkbox" role="switch" value="" id="ingre{{inc @index}}">
                <label class="form-check-label" for="ingre{{inc @index}}">{{{this}}}</label>
            </div>
        {{/each}}`);

    const data = { pArrIngredients: pArrIngredients };

    document.getElementById(pDivId).innerHTML = vIngList(data);
}