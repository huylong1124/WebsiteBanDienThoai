let index = 0
const right = document.querySelector('.fa-arrow-right')
const left = document.querySelector('.fa-arrow-left')
const imgNumber = document.querySelectorAll('.chuyencanh')

right.addEventListener ("click", function() {
    index = index + 1
    if(index > imgNumber.length-1) {
        index=0
    }
    document.querySelector(".nhieuslide").style.right = index *100+"%"
})
left.addEventListener ("click", function() {
    index = index - 1
    if(index <= 0) {
        index=imgNumber.length-1
    }
    document.querySelector(".nhieudslide").style.right = index *100+"%"
})