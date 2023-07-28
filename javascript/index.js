function port_redirect(type, url) {
    if (type == "localSite"){
        window.location.href = url
    }else if (type == "github"){
        open(`https://github.com/vinicgobbi/${url}`)
    }
}