header = `
<div class="col col-8">
    <div class="container">
        <div class="row flex-nowrap justify-content-start">
            <div id="logo" class="col col-1">
                <p class="text-center">T</p>        
            </div>
            <div id="headwrap" class="col d-none d-xxl-block col-8">
                <p>The01li3's Recipes</p>
            </div>
            <div id="search-div" class="col my-auto">
                <form class="input-group" onsubmit="fnSearch(event)">
                    <input type="search" id="site-search" name="searchValue" class="form-control form-control-sm" placeholder="Search"/>
                    <button type="submit" class="btn btn-outline-search"><i class="bi bi-search"></i></button>            
                </form>
            </div> 
        </div>
    </div>
</div>`
document.getElementById('headerBanner').innerHTML = header;