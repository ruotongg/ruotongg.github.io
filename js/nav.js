/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

var segs = [];
var quotes=["Bebop here here! All right! Woo hoo!", "Vroom Vroom nearrrrraAAH!", "HIIIIII!", "Satellite from days of old, lead me to your access code", "She promised Ed, Ed could become real member of Bebop.", "A mystery space creature! Spooky! The attack of the horrible alien!", "So, what could it be but a horrible alien huh?","Lesson lesson. If you see a mysterious stranger, follow him.", "Where are you? Are you here Mr. spooky space creature?", "Ed will help.", "My socks are coo-ool. Gotta wear 'em outside!", "Gimmie gimmie gimmie!","Wait a minute Ein, we have to share and share alike.", "Ein, you're a cow-woof-woof.", "All right hit-and-run driver. This is a bust. Stinky gas!", "I think I know. I don't think I know. I don't think I think I know. I don't think I think.", "All right! Something wonderfully tremendously good for Ed!", "So Edward is found?", "This is the father person."]
$(".seg-begin").each(function (idx, node) {
    segs.push(node)
    var link = $("<a></a>").attr("href", "#" + $(node).attr("id")).html($(node).children("h2").html().match(/[^<:]+/)[0])
    if (!idx) {
        link.addClass("active")
    }
    var row = $("<li></li>").append(link)
    $("#toc ul").append(row)
})

$(window).bind("scroll", function() {
    var scrollTop = $(this).scrollTop()
    var topSeg = null
    for (var idx in segs) {
        var seg = segs[idx]
        if (seg.offsetTop > scrollTop) {
            continue
        }
        if (!topSeg) {
            topSeg = seg
        } else if (seg.offsetTop >= topSeg.offsetTop) {
            topSeg = seg
        }
    }
    if (topSeg) {
        var current=$("#toc a")
        $("#toc a").removeClass("active")
        var link = "#" + $(topSeg).attr("id")
        console.log('#toc a[href="' + link + '"]')
        $('#toc a[href="' + link + '"]').addClass("active")
        document.querySelector("#comment p").innerHTML=quotes[Math.floor(Math.random() * quotes.length)]
    }
})
