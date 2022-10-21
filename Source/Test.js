
'use strict'


//  Test UserAgent

const mostCommon = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36';


const 
    { onBeforeSendHeaders } = browser.webRequest ,
    { clear , log } = console ;

clear();


const 
    permissions = [ 'blocking' , 'requestHeaders' ] ,
    pages = { urls : [ '<all_urls>' ] } ;


onBeforeSendHeaders
    .addListener(setUserAgent,pages,permissions)


function setUserAgent ( request ){
        
    const { requestHeaders } = request;
    
    for( const header of requestHeaders )
        if(isUserAgent(header))
            header.value = mostCommon;
    
    return { requestHeaders }
}

function isUserAgent ( header ){
    return header.name.toLowerCase() === 'user-agent';
}
