function filter_list(l) {
    return l.filter(Number.isInteger);
}

console.log(filter_list([1,2,'aasf','1','123',123])) 