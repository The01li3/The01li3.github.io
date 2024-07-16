header = `
<div class="row g-0 col-8 justify-content-center">
    <div class="row col-9 flex-nowrap justify-content-start">
        <div id="logo" class="col col-1">
            <p class="text-center">T</p>        
        </div>
        <div id="headwrap" class="col d-none d-xxl-block col-7">
            <p>The01li3's Recipes</p>
        </div>
    </div>
    <div id="search-div" class="col-3 justify-content-end my-auto">
        <form id="search-inline" class="input-group">
            <input type="search" id="site-search" class="form-control form-control-sm" placeholder="Search"/>
            <button type="submit" class="btn btn-outline-search"><i class="bi bi-search"></i></button>            
        </form>
    </div>    
</div>`
document.getElementById('headerBanner').innerHTML = header;
