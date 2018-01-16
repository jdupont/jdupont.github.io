const filepathToUrlParam = filepath => filepath.substr(2).slice(0, -3);


const urlParamToFilepath = urlParam => `./${urlParam}.md`;


export { filepathToUrlParam, urlParamToFilepath };
