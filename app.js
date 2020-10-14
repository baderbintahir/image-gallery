let URLs = [
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
]

let titles = [
    "This is rain",
    "This is rain",
    "This is rain",
    "This is rain",
    "This is rain",
    "This is rain"
]

let descriptions = [
    "Line 1. Line 2. Line 3",
    "Line 1. Line 2. Line 3",
    "Line 1. Line 2. Line 3",
    "Line 1. Line 2. Line 3",
    "Line 1. Line 2. Line 3",
    "Line 1. Line 2. Line 3"
]

function init() {
    let currentPage = window.location.href.split('/')
    
    let imgs = document.querySelectorAll('.card img')
    let captions = document.querySelectorAll('.caption')
    
    for (let i = 0; i < 6; i++) {        
        if (currentPage[currentPage.length - 1] === `img${i + 1}.html`) {            
            document.querySelector('.wrapper img').src = URLs[i]
            document.querySelector('.desc').innerHTML = descriptions[i]
            document.querySelector('.caption').innerHTML = titles[i]    
            break
        } else if(currentPage[currentPage.length - 1] === 'index.html') {
            imgs[i].src = URLs[i]
            captions[i].innerHTML = titles[i]
        }
    }
}

init()