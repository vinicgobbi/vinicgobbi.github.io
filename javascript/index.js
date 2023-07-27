function redirect(arg) {
    if (arg == "home"){
        window.location.href = '/'
    }else if (arg == "links"){
        window.location.href = '/links'
    }else if (arg == "about"){
        window.location.href = '/about'
    }else{
        window.location.href = '/'
    }
}