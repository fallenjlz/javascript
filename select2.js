console.log($('#p1').addClass('highlight'))
console.log($('.list1').addClass('highlight'))
console.log($('.list > li').addClass('highlight'))
console.log($('a[href="http://www.baidu.com"]').addClass('highlight'))
console.log($('a[href*="www"]').addClass('highlight'))
console.log($('a[href^="http"]').addClass('hightlight'))
console.log($('a[href][target]').addClass('highlight'))
console.log($('a[href !="http://www.baidu.com"]').addClass('highlight'))
console.log($('p[data-id="1"]'.addClass('highlight'))
//:lang(language)
//:not(selector)
//:root
//:target
//:hidden
//:visible
//:header
//:animated
console.log($(':lang(en)').addClass('highlight'))
console.log($('p:not(#foo)').addClass('highlight'))
console.log($(':root')).addClass('highlight')
console.log($('p:target').addClass('hightlight'))
setTimeout(function(){
	console.log($(':target').addClass('highlight'))
})
console.log($(':hidden').addClass('highlight'))
console.log($(' :visible').addClass('highlight'))
console.log($(' :header').addClass('highlight'))

// :first
// :last
// :even
// :odd
// :eq(no)
// :gt(n) 
// :lt(n)
$('li:first')
$('li:last')
$('li:even')
$('li:odd')
$('li:eq(2)')
$('li:gt(2)')
$('li:lt(2)')

// :first-child
// :last-child
// :first-of-type
// :last-of-type
// :nth-child()
// :nth-last-child()
// :nth-of-type()
// :nth-last-of-type()
// :only-child
// :only-of-type
$('li:first-child')
$('li:last-child')
$('li:first-of-type')
$('li:last-of-type')
$('li:nth-child(2)')
$('li:nth-child(2n)')
$('li:nth-child(even)')

// :checked
// :disabled
// :enabled
// :focus
// :button
// :checkbox
// :file
// :image
// :input
// :password
// :radio
// :reset
// :selected
// :sumbmit
// :text
$(':checked')
$(':disabled')
$(':enabled')
$(':focus')
$(':button')
$(':checkbox')
$(':file')
$(':image')
$(':input')
$(':password')
$(':radio')
$(':reset')
$(':selected')
$(':submit')
$(':text')
