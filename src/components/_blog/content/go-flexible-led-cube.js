// This file was automatically generated 
export const data =
{
    "published": "Thu, 16 Aug 2018 15:03:42 GMT", 
    "src": "https://medium.com/@voltera/go-flex-ible-led-cube-6738c7f2e44?source=rss-14e37102160b------2", 
    "author": "Voltera", 
    "content": "<a href=\"https://medium.com/media/91dcc128041d3016d738c039815754da/href\">https://medium.com/media/91dcc128041d3016d738c039815754da/href</a><p>Did you know we have an in-house mad scientist here at Voltera?</p><p>Sherman Qiu (University of Waterloo, Mechatronics Engineering), has spent the summer here as our Hardware Designer co-op student. His job is to dream up exotic hardware he can build using the V-One and print his ideas into existence.</p><figure><img alt=\"\" src=\"https://cdn-images-1.medium.com/max/500/0*RpahhULNtl_06qOC\" /><figcaption>Sherman, heading into work every day for the job he loves.</figcaption></figure><p>Why does he spend his time printing any project that he and Alroy, our CEO, think is cool?</p><ul><li>It pushes the capabilities of the V-One by working on experimental use-cases and proving (or disproving) hypotheses about what's possible with the technology</li><li>He spends all day dogfooding the product, sending a pipeline of valuable insights to the development and support teams</li><li>It lets his wonderful personality shine through in the content we make about his inventions. He's basically a celebrity hardware engineer at this point.</li></ul><figure><img alt=\"\" src=\"https://cdn-images-1.medium.com/max/720/0*yfpwbQACRcjbwaey\" /><figcaption>Not this much of a celebrity.</figcaption></figure><p>The latest creation from Sherman's Lab<strong>(c)</strong> is an 8x8x8 LED cube with a twist: the LEDs are surface-mounted to a transparent, flexible PET substrate!</p><p>We've all seen cubes with through-hole LEDs soldered together, but if you want to use surface mount components then the substrate would block the light coming from each layer. Flex substrates are usually transparent, and while the V-One was not originally designed for flex prototyping this project led to a workflow and kit that makes it possible.</p><p>When asked about why he did this, he seemed a little confused by the question, then shrugged and said \"because I was pretty sure I could do it.\" Sherman is a real engineer.</p><h3>So Why Bother?</h3><p>Unlike rigid substrates like FR1 or FR4, flexible substrates like Polyimide (PI, aka Kapton) or polyethylene terephthalate (PET)<strong> </strong>can be repeatedly bent or twisted into difficult positions. This opens up a world of opportunities in electronics engineering that Sherman was really excited to investigate.</p><p>These boards are valuable in a host of industries, like automotive (where a board may need to be inside a soft car seat) or any industry where boards may need to be curved and bent. Compact environments as well, like inside wearables, are great candidates for flexible electronics. Embedded sensors, RFID tags, health and fitness tracking... The list goes on.</p><p>Beyond the form factor, flexible substrates are far lighter than their laminate counterparts. Any industry where weight is a factor would benefit from using flexible electronics. For instance, aerospace is an extremely weight-sensitive industry: inside a cube satellite every gram is expensive, and replacing a heavy rigid board with a printed flexible one can mean thousands of dollars in savings per launch.</p><p>Basically, if Sherman could make a working flexible circuit board on the V-One, it would be a big deal.</p><h3>Getting Started</h3><a href=\"https://medium.com/media/e1449c2d6ab40130ec174f9193063e91/href\">https://medium.com/media/e1449c2d6ab40130ec174f9193063e91/href</a><p>The first step was to start working with the flexible substrate. Given the experimental nature of the project, Sherman needed to begin with the hard part to give himself time to test and iterate. After some research he settled on a PET substrate and began building the matrices by drilling through-holes for the wires that would hold the cube together. He drilled in batches of four to save time, taping the substrates to the V-One bed to make sure the flexible layers stayed still during the process and that the holes lined up perfectly.</p><p>With the through holes finished, Sherman printed the traces using our specialized <a href=\"https://www.voltera.io/store/product/?productId=Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzk3NzExMzI0ODE=\">flexible conductive ink</a> and cured the layers with magnets holding them flat. This is crucial to avoid warping of the substrate during the heat cycle.</p><a href=\"https://medium.com/media/6178b595860ea6590b066776c66fa284/href\">https://medium.com/media/6178b595860ea6590b066776c66fa284/href</a><p>Next it was time to add the LEDs. At first this was business as usual, dispensing solder paste on the pads he had printed earlier and reflowing them in place. Again, magnets were used the hold each layer flat so that the components wouldn't slide around on a wrinkly substrate. However, once the the first test layer was finished, Sherman encountered a problem.</p><p>Surface-mount LEDs aren't designed to flex: when he would bend the board they would pop straight off the pads and soar through the air. This spoiled the benefits of the flexibility. To address this, Sherman encapsulated the LEDs in a clear epoxy compound and cured them under UV light. This process is fairly common in flex electronics.</p><p>With epoxy holding them to the board, he could twist and bend them to his heart's content. He added copper rivets to the through holes and soldered them in place, using a low iron temperature and plenty of flux to protect the heat-sensitive traces.</p><h3>Coming Together</h3><a href=\"https://medium.com/media/477415bad65f28b0b0d50b7cedf61598/href\">https://medium.com/media/477415bad65f28b0b0d50b7cedf61598/href</a><p>Next came board assembly. He made a jig using FR4 and cut wires to hold the matrices together. With the wires held in position by the jig, he gently nudged each flexible layer down the wire and into place before soldering them for an electromechanical connection.</p><a href=\"https://medium.com/media/7be0174f2e2f254db5aa346b30510509/href\">https://medium.com/media/7be0174f2e2f254db5aa346b30510509/href</a><p>Finally, it was time to make the control board for the cube. This part wasn't experimental: printing PCBs on rigid substrates is why the V-One was originally created, so this was Voltera 101. Sherman designed a custom board and printed it with some very fine and complex traces that showed off the resolution of the device, then cured them on the heated bed.</p><p>With the traces finished, he dispensed solder paste on the pads and placed components that he reflowed in position on the V-One. The board used a standard Atmel microcontroller, the ATMega 328, that he would use to create effects with the LEDs.</p><figure><img alt=\"\" src=\"https://cdn-images-1.medium.com/max/320/0*Mozp7-5TmFDHW97V\" /><figcaption>Et voila</figcaption></figure><p>With the control board finished, it was a simple matter of removing the jig and soldering the matrices to the control board and bingo: an 8x8x8 LED cube with flexible layers and surface-mounted components.</p><p>When we made the V-One, we were trying to solve a very focused problem: building hardware sucks and we wanted to make it easier. Getting custom circuit boards in the hands of designers and engineers as quickly and easily as possible was our start, and doing that meant learning everything we could about working with conductive ink.</p><p>In the five years since we've learned the power of printed electronics.</p><blockquote>Staggering technological possibilities open up when you trade rigid, copper-etched boards for circuits that live organically within a device as part of its design.</blockquote><p>We've broadened our view of what's possible with a PCB printer like the V-One, and with this simple project Sherman was able to demonstrate that printing on flex is not only possible but commercially viable.</p><p>Using everything we've learned over the past five years, we have big, big plans for where we're going next in the printed electronics space.</p><p>We hope you'll share with us what you create using your V-One by reaching out to Voltera on <a href=\"https://www.facebook.com/voltera.io/\">Facebook</a>, <a href=\"https://twitter.com/voltera_io?lang=en\">Twitter</a>, <a href=\"https://www.instagram.com/voltera.io/\">Instagram</a>, <a href=\"https://www.linkedin.com/company/voltera/\">LinkedIn</a> and <a href=\"https://www.youtube.com/channel/UCHANd33WPReNyQcsHPRgYjw\">YouTube</a> with #madewithvoltera.</p><img height=\"1\" src=\"https://medium.com/_/stat?event=post.clientViewed&amp;referrerSource=full_rss&amp;postId=6738c7f2e44\" width=\"1\" />", 
    "title": "Go Flex(ible LED Cube)"
}