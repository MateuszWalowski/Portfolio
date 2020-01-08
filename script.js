var expandallcounter = 0

function expandall() {
        expandallcounter++;
        responsivecounter++;
        collectioncounter++;
        prototypecounter++;
        sprintcounter++;
        javacontrolledcounter++;
        poolcounter++;
        onboardingcounter++;
        campaigncounter++;
        storyboardcounter++;
        pitchcounter++;

        if (expandallcounter == 1) {
                console.log("expandall " + expandallcounter);
                document.getElementById('responsive').style.display = "grid";
                document.getElementById('responsive').classList.add("slidefromtop");
                document.getElementById('responsive').classList.remove("slidetotop");
                var x = document.getElementById("responsiveheader").querySelectorAll(".leftarrow");
                x[0].style.transform = "rotate(180deg)";
                var y = document.getElementById("responsiveheader").querySelectorAll(".rightarrow");
                y[0].style.transform = "rotate(180deg)";
                document.getElementById('responsive').style.display = "grid";
                document.getElementById('responsive').classList.add("slidefromtop");
                document.getElementById('responsive').classList.remove("slidetotop");
                console.log("responsive" + responsivecounter);
                var x = document.getElementById("responsiveheader").querySelectorAll(".leftarrow");
                x[0].style.transform = "rotate(180deg)";
                var y = document.getElementById("responsiveheader").querySelectorAll(".rightarrow");
                y[0].style.transform = "rotate(180deg)";
                document.getElementById('collection').style.display = "grid";
                document.getElementById('collection').classList.add("slidefromtop");
                document.getElementById('collection').classList.remove("slidetotop");
                console.log("collection" + collectioncounter);
                var x = document.getElementById("collectionheader").querySelectorAll(".leftarrow");
                x[0].style.transform = "rotate(180deg)";
                var y = document.getElementById("collectionheader").querySelectorAll(".rightarrow");
                y[0].style.transform = "rotate(180deg)";
                document.getElementById('prototype').style.display = "grid";
                document.getElementById('prototype').classList.add("slidefromtop");
                document.getElementById('prototype').classList.remove("slidetotop");
                console.log("prototype" + prototypecounter);
                var x = document.getElementById("prototypeheader").querySelectorAll(".leftarrow");
                x[0].style.transform = "rotate(180deg)";
                var y = document.getElementById("prototypeheader").querySelectorAll(".rightarrow");
                y[0].style.transform = "rotate(180deg)";
                document.getElementById('sprint').style.display = "grid";
                document.getElementById('sprint').classList.add("slidefromtop");
                document.getElementById('sprint').classList.remove("slidetotop");
                console.log("sprint" + sprintcounter);
                var x = document.getElementById("sprintheader").querySelectorAll(".leftarrow");
                x[0].style.transform = "rotate(180deg)";
                var y = document.getElementById("sprintheader").querySelectorAll(".rightarrow");
                y[0].style.transform = "rotate(180deg)";

                document.getElementById('javacontrolled').style.display = "grid";
                document.getElementById('javacontrolled').classList.add("slidefromtop");
                document.getElementById('javacontrolled').classList.remove("slidetotop");
                console.log("javacontrolled" + javacontrolledcounter);
                var x = document.getElementById("javaheader").querySelectorAll(".leftarrow");
                x[0].style.transform = "rotate(180deg)";
                var y = document.getElementById("javaheader").querySelectorAll(".rightarrow");
                y[0].style.transform = "rotate(180deg)";
                document.getElementById('pool').style.display = "grid";
                document.getElementById('pool').classList.add("slidefromtop");
                document.getElementById('pool').classList.remove("slidetotop");
                console.log("pool" + poolcounter);
                var x = document.getElementById("poolheader").querySelectorAll(".leftarrow");
                x[0].style.transform = "rotate(180deg)";
                var y = document.getElementById("poolheader").querySelectorAll(".rightarrow");
                y[0].style.transform = "rotate(180deg)";
                document.getElementById('onboarding').style.display = "grid";
                document.getElementById('onboarding').classList.add("slidefromtop");
                document.getElementById('onboarding').classList.remove("slidetotop");
                console.log("onboarding" + onboardingcounter);
                var x = document.getElementById("onboardingheader").querySelectorAll(".leftarrow");
                x[0].style.transform = "rotate(180deg)";
                var y = document.getElementById("onboardingheader").querySelectorAll(".rightarrow");
                y[0].style.transform = "rotate(180deg)";
                document.getElementById('campaign').style.display = "grid";
                document.getElementById('campaign').classList.add("slidefromtop");
                document.getElementById('campaign').classList.remove("slidetotop");
                console.log("campaign" + campaigncounter);
                var x = document.getElementById("campaignheader").querySelectorAll(".leftarrow");
                x[0].style.transform = "rotate(180deg)";
                var y = document.getElementById("campaignheader").querySelectorAll(".rightarrow");
                y[0].style.transform = "rotate(180deg)";
                document.getElementById('storyboard').style.display = "grid";
                document.getElementById('storyboard').classList.add("slidefromtop");
                document.getElementById('storyboard').classList.remove("slidetotop");
                console.log("storyboard" + storyboardcounter);
                var x = document.getElementById("storyboardheader").querySelectorAll(".leftarrow");
                x[0].style.transform = "rotate(180deg)";
                var y = document.getElementById("storyboardheader").querySelectorAll(".rightarrow");
                y[0].style.transform = "rotate(180deg)";
                document.getElementById('pitch').style.display = "grid";
                document.getElementById('pitch').classList.add("slidefromtop");
                document.getElementById('pitch').classList.remove("slidetotop");
                console.log("pitch" + pitchcounter);
                var x = document.getElementById("pitchheader").querySelectorAll(".leftarrow");
                x[0].style.transform = "rotate(180deg)";
                var y = document.getElementById("pitchheader").querySelectorAll(".rightarrow");
                y[0].style.transform = "rotate(180deg)";



        }
        if (expandallcounter == 2) {
                expandallcounter = 0;
                responsivecounter = 0;
                document.getElementById('responsive').classList.add("slidetotop");
                document.getElementById('responsive').classList.remove("slidefromtop");
                setTimeout(function () {
                        document.getElementById('responsive').style.display = "none";
                }, 100);
                console.log("responsive" + responsivecounter);
                var x = document.getElementById("responsiveheader").querySelectorAll(".leftarrow")
                x[0].style.transform = "rotate(0)";
                var y = document.getElementById("responsiveheader").querySelectorAll(".rightarrow")
                y[0].style.transform = "rotate(0)";
                collectioncounter = 0;
                document.getElementById('collection').classList.add("slidetotop");
                document.getElementById('collection').classList.remove("slidefromtop");
                setTimeout(function () {
                        document.getElementById('collection').style.display = "none";
                }, 100);
                console.log("collection" + collectioncounter);
                var x = document.getElementById("collectionheader").querySelectorAll(".leftarrow")
                x[0].style.transform = "rotate(0)";
                var y = document.getElementById("collectionheader").querySelectorAll(".rightarrow")
                y[0].style.transform = "rotate(0)";
                prototypecounter = 0;
                document.getElementById('prototype').classList.add("slidetotop");
                document.getElementById('prototype').classList.remove("slidefromtop");
                setTimeout(function () {
                        document.getElementById('prototype').style.display = "none";
                }, 100);
                console.log("prototype" + prototypecounter);
                var x = document.getElementById("prototypeheader").querySelectorAll(".leftarrow")
                x[0].style.transform = "rotate(0)";
                var y = document.getElementById("prototypeheader").querySelectorAll(".rightarrow")
                y[0].style.transform = "rotate(0)";
                sprintcounter = 0;
                document.getElementById('sprint').classList.add("slidetotop");
                document.getElementById('sprint').classList.remove("slidefromtop");
                setTimeout(function () {
                        document.getElementById('sprint').style.display = "none";
                }, 100);
                console.log("sprint" + sprintcounter);
                var x = document.getElementById("sprintheader").querySelectorAll(".leftarrow")
                x[0].style.transform = "rotate(0)";
                var y = document.getElementById("sprintheader").querySelectorAll(".rightarrow")
                y[0].style.transform = "rotate(0)";

                javacontrolledcounter = 0;
                document.getElementById('javacontrolled').classList.add("slidetotop");
                document.getElementById('javacontrolled').classList.remove("slidefromtop");
                setTimeout(function () {
                        document.getElementById('javacontrolled').style.display = "none";
                }, 100);
                console.log("javacontrolled" + javacontrolledcounter);
                var x = document.getElementById("javaheader").querySelectorAll(".leftarrow")
                x[0].style.transform = "rotate(0)";
                var y = document.getElementById("javaheader").querySelectorAll(".rightarrow")
                y[0].style.transform = "rotate(0)";
                poolcounter = 0;
                document.getElementById('pool').classList.add("slidetotop");
                document.getElementById('pool').classList.remove("slidefromtop");
                setTimeout(function () {
                        document.getElementById('pool').style.display = "none";
                }, 100);
                console.log("pool" + poolcounter);
                var x = document.getElementById("poolheader").querySelectorAll(".leftarrow")
                x[0].style.transform = "rotate(0)";
                var y = document.getElementById("poolheader").querySelectorAll(".rightarrow")
                y[0].style.transform = "rotate(0)";
                onboardingcounter = 0;
                document.getElementById('onboarding').classList.add("slidetotop");
                document.getElementById('onboarding').classList.remove("slidefromtop");
                setTimeout(function () {
                        document.getElementById('onboarding').style.display = "none";
                }, 100);
                console.log("onboarding" + onboardingcounter);
                var x = document.getElementById("onboardingheader").querySelectorAll(".leftarrow")
                x[0].style.transform = "rotate(0)";
                var y = document.getElementById("onboardingheader").querySelectorAll(".rightarrow")
                y[0].style.transform = "rotate(0)";
                campaigncounter = 0;
                document.getElementById('campaign').classList.add("slidetotop");
                document.getElementById('campaign').classList.remove("slidefromtop");
                setTimeout(function () {
                        document.getElementById('campaign').style.display = "none";
                }, 100);
                console.log("campaign" + campaigncounter);
                var x = document.getElementById("campaignheader").querySelectorAll(".leftarrow")
                x[0].style.transform = "rotate(0)";
                var y = document.getElementById("campaignheader").querySelectorAll(".rightarrow")
                y[0].style.transform = "rotate(0)";
                storyboardcounter = 0;
                document.getElementById('storyboard').classList.add("slidetotop");
                document.getElementById('storyboard').classList.remove("slidefromtop");
                setTimeout(function () {
                        document.getElementById('storyboard').style.display = "none";
                }, 100);
                console.log("storyboard" + storyboardcounter);
                var x = document.getElementById("storyboardheader").querySelectorAll(".leftarrow")
                x[0].style.transform = "rotate(0)";
                var y = document.getElementById("storyboardheader").querySelectorAll(".rightarrow")
                y[0].style.transform = "rotate(0)";
                pitchcounter = 0;
                document.getElementById('pitch').classList.add("slidetotop");
                document.getElementById('pitch').classList.remove("slidefromtop");
                setTimeout(function () {
                        document.getElementById('pitch').style.display = "none";
                }, 100);
                console.log("pitch" + pitchcounter);
                var x = document.getElementById("pitchheader").querySelectorAll(".leftarrow")
                x[0].style.transform = "rotate(0)";
                var y = document.getElementById("pitchheader").querySelectorAll(".rightarrow")
                y[0].style.transform = "rotate(0)";

        }




}



var responsivecounter = 0

function responsive() {
        responsivecounter++;
        if (responsivecounter == 1) {
                document.getElementById('responsive').style.display = "grid";
                document.getElementById('responsive').classList.add("slidefromtop");
                document.getElementById('responsive').classList.remove("slidetotop");
                console.log("responsive" + responsivecounter);
                var x = document.getElementById("responsiveheader").querySelectorAll(".leftarrow");
                x[0].style.transform = "rotate(180deg)";
                var y = document.getElementById("responsiveheader").querySelectorAll(".rightarrow");
                y[0].style.transform = "rotate(180deg)"

        }
        if (responsivecounter == 2) {
                responsivecounter = 0;
                document.getElementById('responsive').classList.add("slidetotop");
                document.getElementById('responsive').classList.remove("slidefromtop");
                setTimeout(function () {
                        document.getElementById('responsive').style.display = "none";
                }, 100);
                console.log("responsive" + responsivecounter);
                var x = document.getElementById("responsiveheader").querySelectorAll(".leftarrow")
                x[0].style.transform = "rotate(0)";
                var y = document.getElementById("responsiveheader").querySelectorAll(".rightarrow")
                y[0].style.transform = "rotate(0)"

        }
}
var collectioncounter = 0

function collection() {
        collectioncounter++;
        if (collectioncounter == 1) {
                document.getElementById('collection').style.display = "grid";
                document.getElementById('collection').classList.add("slidefromtop");
                document.getElementById('collection').classList.remove("slidetotop");
                console.log("collection" + collectioncounter);
                var x = document.getElementById("collectionheader").querySelectorAll(".leftarrow");
                x[0].style.transform = "rotate(180deg)";
                var y = document.getElementById("collectionheader").querySelectorAll(".rightarrow");
                y[0].style.transform = "rotate(180deg)"
        }
        if (collectioncounter == 2) {
                collectioncounter = 0;
                document.getElementById('collection').classList.add("slidetotop");
                document.getElementById('collection').classList.remove("slidefromtop");
                setTimeout(function () {
                        document.getElementById('collection').style.display = "none";
                }, 100);
                console.log("collection" + collectioncounter);
                var x = document.getElementById("collectionheader").querySelectorAll(".leftarrow")
                x[0].style.transform = "rotate(0)";
                var y = document.getElementById("collectionheader").querySelectorAll(".rightarrow")
                y[0].style.transform = "rotate(0)"
        }
}
var prototypecounter = 0

function prototype() {
        prototypecounter++;
        if (prototypecounter == 1) {
                document.getElementById('prototype').style.display = "grid";
                document.getElementById('prototype').classList.add("slidefromtop");
                document.getElementById('prototype').classList.remove("slidetotop");
                console.log("prototype" + prototypecounter);
                var x = document.getElementById("prototypeheader").querySelectorAll(".leftarrow");
                x[0].style.transform = "rotate(180deg)";
                var y = document.getElementById("prototypeheader").querySelectorAll(".rightarrow");
                y[0].style.transform = "rotate(180deg)"
        }
        if (prototypecounter == 2) {
                prototypecounter = 0;
                document.getElementById('prototype').classList.add("slidetotop");
                document.getElementById('prototype').classList.remove("slidefromtop");
                setTimeout(function () {
                        document.getElementById('prototype').style.display = "none";
                }, 100);
                console.log("prototype" + prototypecounter);
                var x = document.getElementById("prototypeheader").querySelectorAll(".leftarrow")
                x[0].style.transform = "rotate(0)";
                var y = document.getElementById("prototypeheader").querySelectorAll(".rightarrow")
                y[0].style.transform = "rotate(0)"
        }
}
var sprintcounter = 0

function sprint() {
        sprintcounter++;
        if (sprintcounter == 1) {
                document.getElementById('sprint').style.display = "grid";
                document.getElementById('sprint').classList.add("slidefromtop");
                document.getElementById('sprint').classList.remove("slidetotop");
                console.log("sprint" + sprintcounter);
                var x = document.getElementById("sprintheader").querySelectorAll(".leftarrow");
                x[0].style.transform = "rotate(180deg)";
                var y = document.getElementById("sprintheader").querySelectorAll(".rightarrow");
                y[0].style.transform = "rotate(180deg)"
        }
        if (sprintcounter == 2) {
                sprintcounter = 0;
                document.getElementById('sprint').classList.add("slidetotop");
                document.getElementById('sprint').classList.remove("slidefromtop");
                setTimeout(function () {
                        document.getElementById('sprint').style.display = "none";
                }, 100);
                console.log("sprint" + sprintcounter);
                var x = document.getElementById("sprintheader").querySelectorAll(".leftarrow")
                x[0].style.transform = "rotate(0)";
                var y = document.getElementById("sprintheader").querySelectorAll(".rightarrow")
                y[0].style.transform = "rotate(0)"
        }
}
var javacontrolledcounter = 0

function javacontrolled() {
        javacontrolledcounter++;
        if (javacontrolledcounter == 1) {
                document.getElementById('javacontrolled').style.display = "grid";
                document.getElementById('javacontrolled').classList.add("slidefromtop");
                document.getElementById('javacontrolled').classList.remove("slidetotop");
                console.log("javacontrolled" + javacontrolledcounter);
                var x = document.getElementById("javaheader").querySelectorAll(".leftarrow");
                x[0].style.transform = "rotate(180deg)";
                var y = document.getElementById("javaheader").querySelectorAll(".rightarrow");
                y[0].style.transform = "rotate(180deg)"
        }
        if (javacontrolledcounter == 2) {
                javacontrolledcounter = 0;
                document.getElementById('javacontrolled').classList.add("slidetotop");
                document.getElementById('javacontrolled').classList.remove("slidefromtop");
                setTimeout(function () {
                        document.getElementById('javacontrolled').style.display = "none";
                }, 100);
                console.log("javacontrolled" + javacontrolledcounter);
                var x = document.getElementById("javaheader").querySelectorAll(".leftarrow")
                x[0].style.transform = "rotate(0)";
                var y = document.getElementById("javaheader").querySelectorAll(".rightarrow")
                y[0].style.transform = "rotate(0)"
        }
}
var poolcounter = 0

function pool() {
        poolcounter++;
        if (poolcounter == 1) {
                document.getElementById('pool').style.display = "grid";
                document.getElementById('pool').classList.add("slidefromtop");
                document.getElementById('pool').classList.remove("slidetotop");
                console.log("pool" + poolcounter);
                var x = document.getElementById("poolheader").querySelectorAll(".leftarrow");
                x[0].style.transform = "rotate(180deg)";
                var y = document.getElementById("poolheader").querySelectorAll(".rightarrow");
                y[0].style.transform = "rotate(180deg)"
        }
        if (poolcounter == 2) {
                poolcounter = 0;
                document.getElementById('pool').classList.add("slidetotop");
                document.getElementById('pool').classList.remove("slidefromtop");
                setTimeout(function () {
                        document.getElementById('pool').style.display = "none";
                }, 100);
                console.log("pool" + poolcounter);
                var x = document.getElementById("poolheader").querySelectorAll(".leftarrow")
                x[0].style.transform = "rotate(0)";
                var y = document.getElementById("poolheader").querySelectorAll(".rightarrow")
                y[0].style.transform = "rotate(0)"
        }
}
var onboardingcounter = 0

function onboarding() {
        onboardingcounter++;
        if (onboardingcounter == 1) {
                document.getElementById('onboarding').style.display = "grid";
                document.getElementById('onboarding').classList.add("slidefromtop");
                document.getElementById('onboarding').classList.remove("slidetotop");
                console.log("onboarding" + onboardingcounter);
                var x = document.getElementById("onboardingheader").querySelectorAll(".leftarrow");
                x[0].style.transform = "rotate(180deg)";
                var y = document.getElementById("onboardingheader").querySelectorAll(".rightarrow");
                y[0].style.transform = "rotate(180deg)"
        }
        if (onboardingcounter == 2) {
                onboardingcounter = 0;
                document.getElementById('onboarding').classList.add("slidetotop");
                document.getElementById('onboarding').classList.remove("slidefromtop");
                setTimeout(function () {
                        document.getElementById('onboarding').style.display = "none";
                }, 100);
                console.log("onboarding" + onboardingcounter);
                var x = document.getElementById("onboardingheader").querySelectorAll(".leftarrow")
                x[0].style.transform = "rotate(0)";
                var y = document.getElementById("onboardingheader").querySelectorAll(".rightarrow")
                y[0].style.transform = "rotate(0)"
        }
}
var campaigncounter = 0

function campaign() {
        campaigncounter++;
        if (campaigncounter == 1) {
                document.getElementById('campaign').style.display = "grid";
                document.getElementById('campaign').classList.add("slidefromtop");
                document.getElementById('campaign').classList.remove("slidetotop");
                console.log("campaign" + campaigncounter);
                var x = document.getElementById("campaignheader").querySelectorAll(".leftarrow");
                x[0].style.transform = "rotate(180deg)";
                var y = document.getElementById("campaignheader").querySelectorAll(".rightarrow");
                y[0].style.transform = "rotate(180deg)"
        }
        if (campaigncounter == 2) {
                campaigncounter = 0;
                document.getElementById('campaign').classList.add("slidetotop");
                document.getElementById('campaign').classList.remove("slidefromtop");
                setTimeout(function () {
                        document.getElementById('campaign').style.display = "none";
                }, 100);
                console.log("campaign" + campaigncounter);
                var x = document.getElementById("campaignheader").querySelectorAll(".leftarrow")
                x[0].style.transform = "rotate(0)";
                var y = document.getElementById("campaignheader").querySelectorAll(".rightarrow")
                y[0].style.transform = "rotate(0)"
        }
}
var storyboardcounter = 0

function storyboard() {
        storyboardcounter++;
        if (storyboardcounter == 1) {
                document.getElementById('storyboard').style.display = "grid";
                document.getElementById('storyboard').classList.add("slidefromtop");
                document.getElementById('storyboard').classList.remove("slidetotop");
                console.log("storyboard" + storyboardcounter);
                var x = document.getElementById("storyboardheader").querySelectorAll(".leftarrow");
                x[0].style.transform = "rotate(180deg)";
                var y = document.getElementById("storyboardheader").querySelectorAll(".rightarrow");
                y[0].style.transform = "rotate(180deg)"
        }
        if (storyboardcounter == 2) {
                storyboardcounter = 0;
                document.getElementById('storyboard').classList.add("slidetotop");
                document.getElementById('storyboard').classList.remove("slidefromtop");
                setTimeout(function () {
                        document.getElementById('storyboard').style.display = "none";
                }, 100);
                console.log("storyboard" + storyboardcounter);
                var x = document.getElementById("storyboardheader").querySelectorAll(".leftarrow")
                x[0].style.transform = "rotate(0)";
                var y = document.getElementById("storyboardheader").querySelectorAll(".rightarrow")
                y[0].style.transform = "rotate(0)"
        }
}
var pitchcounter = 0

function pitch() {
        pitchcounter++;
        if (pitchcounter == 1) {
                document.getElementById('pitch').style.display = "grid";
                document.getElementById('pitch').classList.add("slidefromtop");
                document.getElementById('pitch').classList.remove("slidetotop");
                console.log("pitch" + pitchcounter);
                var x = document.getElementById("pitchheader").querySelectorAll(".leftarrow");
                x[0].style.transform = "rotate(180deg)";
                var y = document.getElementById("pitchheader").querySelectorAll(".rightarrow");
                y[0].style.transform = "rotate(180deg)"
        }
        if (pitchcounter == 2) {
                pitchcounter = 0;
                document.getElementById('pitch').classList.add("slidetotop");
                document.getElementById('pitch').classList.remove("slidefromtop");
                setTimeout(function () {
                        document.getElementById('pitch').style.display = "none";
                }, 100);
                console.log("pitch" + pitchcounter);
                var x = document.getElementById("pitchheader").querySelectorAll(".leftarrow")
                x[0].style.transform = "rotate(0)";
                var y = document.getElementById("pitchheader").querySelectorAll(".rightarrow")
                y[0].style.transform = "rotate(0)"
        }
}


var burgercounter = 0

function burgermenu() {
        burgercounter++;
        if (burgercounter == 1) {
                document.getElementById('navigation').style.display = "grid";
                document.getElementById('navigation').classList.add("slidefromtop");
                document.getElementById('navigation').classList.remove("slidetotop");
                console.log("burger menu" + burgercounter);
        }

        if (burgercounter == 2) {
                burgercounter = 0;
                document.getElementById('navigation').classList.add("slidetotop");
                document.getElementById('navigation').classList.remove("slidefromtop");
                setTimeout(function () {
                        document.getElementById('navigation').style.display = "none";
                }, 100);
                console.log("burger menu" + burgercounter);

        }

}
