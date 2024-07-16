header = '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>';
header += '<script src="templates/searchDoc.js"></script>'

document.getElementById('footer').innerHTML = header;

function fnSearch(event){
    console.log(event.target.elements.searchValue.value);
}
