function formatHighlight(el){
    
    var code = $(el);
    
    var strReg1 = /"(.*?)"g/,
    strReg2 = /'(.*?)'g/,
    specialReg = /\b(new|var|if|do|function|while|switch|for|foreach|in|continue|break)(?=[^\w])/g,
    specialJsGlobReg = /\b(document|window|Array|String|Object|Number|\$)(?=[^\w])/g,
    specialJsReg = /\b(getElementBy(TagName|ClassName|Name)|getElementById|typeof|instanceof)(?=[^\w])/g,
    specialmethReg = /\b(indexOf|match|replace|toString|length)(?=[^\w])/g,
    specialCommentReg = /(\/\*.*\*\/)/g,
    inlineCommentReg = /(\/\/.*)/g,
    htmlTagReg = /(&lt;[^\&]*&gt;)/g;
    
    code.each(function(){
        var string = this.innerHTML,
        parsed = string.replace(strReg1, '<span class="token string">"$1"</span>');
        parsed = parsed.replace(strReg2, '<span class="token string">"$1"</span>');
        parsed = parsed.replace(specialReg, '<span class="token reserved-name">"$1"</span>');
        parsed = parsed.replace(specialJsGlobReg, '<span class="token custom-name">"$1"</span>');
        parsed = parsed.replace(specialJsReg, '<span class="token reserved-name">"$1"</span>');
        parsed = parsed.replace(specialmethReg, '<span class="token custom-name">"$1"</span>');
        parsed = parsed.replace(specialCommentReg, '<span class="token comment">"$1"</span>');
        parsed = parsed.replace(inlineCommentReg, '<span class="token comment">"$1"</span>');
        parsed = parsed.replace(htmlTagReg, '<span class="token html">"$1"</span>');
        
        this.innerHTML = parsed;
    })
    
}