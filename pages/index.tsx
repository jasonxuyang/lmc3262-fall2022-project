/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>How the radio shaped youth music culture in the 1950s</title>
        <meta
          name="description"
          content="Innovation of radio and its impact on youth music culture."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <section className={styles.hero}>
          <h1>How the radio shaped youth music culture in the 1950s.</h1>
          <p>
            Technology plays such an important role in the way we consume music.
            In the present time, ubiquitous music platforms like Spotify and
            Apple Music shape our music listening behaviors. Before those
            platforms existed, people listened to music on the radio. We wanted
            to explore how the development of the transistor radio impacted
            music listening behavior in the 1950s, and draw parallels with the
            role technology plays today in defining the music we listen to.
          </p>
          <div className={styles.contents}>
            <a href="#section1">A Brief History on Radio</a>/
            <a href="#section2">The Transistor Radio and Youth Culture</a>/
            <a href="#section3">Music Streaming Services Today</a>
          </div>
        </section>

        <section id="section1">
          <div className={styles.containerOneColumn}>
            <h2>Radio and the Rise of Youth Culture</h2>
            <p>
              The world’s youth became one of the fastest growing demographics
              in music consumption during the 1950s, which was made possible
              thanks to the introduction of the transistor radio, a
              revolutionary piece of technology that mobilized the
              radio-listening experience. However, there were many adjacent
              societal factors in the prior decade that cultivated the perfect
              environment for the success of the transistor radio.
            </p>
          </div>
          <div className={styles.containerTwoColumn}>
            <div>
              <h4>1 - Radio as a social experiment</h4>
              <p>
                Commercial radio itself is not a new phenomenon; in fact, radio
                technology has been used since the early 1900s, especially by
                amateur enthusiasts. Though in the decades that followed, the
                user demographics and purpose of radio widened to encompass
                music as well as mass media. Prior to radio, the primary mediums
                used to listen to music were through live performance and the
                phonograph. Radio sought to combine the best of both worlds:
                deliver the communal aspect of music from live performance while
                doing so from the comfort of their own homes like the
                phonograph. This culminated in a sort of shared social
                experiment where “the workman, the alderman, and the captain of
                industry could all share in the same experience simply by tuning
                in”; “listeners might enjoy a symphony, a radio drama, updates
                on the latest news, an educational lecture, or a sales pitch
                from the local department store”{" "}
                <a href="https://www.meiea.org/Journal/Vol14/Guthrie">
                  (Guthrie 284)
                </a>
                . One of the main concerns about radio was the quality of music
                when compared to the phonograph. As radio became commodified and
                spread to households across the country, audiences were willing
                to tolerate the lower quality of music and radio content because
                of the higher social status that came with owning a radio{" "}
                <a href="https://www.meiea.org/Journal/Vol14/Guthrie">
                  (Guthrie 284)
                </a>
                . However, the invention of FM radio in the 1930s solved the
                audio quality issue. The shared listening experience of radio
                would soon be available to the youth of nation through the
                transistor radio.
              </p>
            </div>
            <img
              src="https://images.nypl.org/index.php?id=1800852&t=w"
              alt=""
            />
          </div>
          <div className={styles.containerOneColumn}>
            <h4>2 - Expansion of Radio Audiences</h4>
            <p>
              In 1947, just after the end of World War II, the Federal
              Communications Commission (FCC) enforced new regulations that
              would vastly increase the number of station licenses in the United
              States: “fewer than 1,000 radio stations were broadcasting in 1945
              in the US but grew to 2000 in 1950, 3500 in 1960 and 4000 in 1965”{" "}
              <a href="https://books.google.com/books/about/Radio_Reader.html?id=iSJTLDDg0XEC">
                (Radio Reader 371)
              </a>
              . The steep increase in radio stations leads to competition among
              stations over listeners, forcing stations to diversify and find
              their own niches in the radio scene. Eventually, radio stations
              began to narrow their music choices to establish their “core
              audiences” and create their own brand around it. This shift was
              also replicated through the dispersion of audiences across the
              wide selection of radio stations. Because each radio station
              started to solidify their audiences under a shared interest or
              niche, radio programmers were now able to “reduce the uncertainty
              of their programming decisions and attract advertisers seeking
              specific groups of consumers”, producing a “fragmented and
              pluralistic culture” of radio{" "}
              <a href="https://books.google.com/books/about/Radio_Reader.html?id=iSJTLDDg0XEC">
                (Radio Reader 379)
              </a>
              . These consumer groups can refer to many demographics such as
              specific races, religions, or age ranges.
            </p>
          </div>
          <div className={styles.containerOneColumn}>
            <h4>3 - Minority Radio</h4>
            <p>
              World War II significantly changed the economic lifestyle of
              minorities in the US for the better. Even though the income of
              Black Americans “continued to lag far behind that of whites,
              studies indicate that it grew at a faster rate between 1940 and
              1954 than at any previous time in American history”{" "}
              <a href="https://books.google.com/books/about/Radio_Reader.html?id=iSJTLDDg0XEC">
                (Radio Reader 372)
              </a>
              . As minority communities started to earn more money, they were
              able to economically participate in mainstream American culture,
              which included the radio. As radio stations diversified in their
              broadcast content, minority radio stations began to form starting
              in 1947. Some of the first stations included WDIA in Memphis for
              Black audiences and KCOR in San Antonio for Hispanic audiences.
              However, the stations behind minority radio were still subject to
              discrimination. Most minority stations in the US “rarely were
              owned by nonwhites” and some advertisers refused to hire black
              permanent employees or contractors. Despite the discrimination,
              minority radio was still “a sense of pride to the communities they
              served”{" "}
              <a href="https://books.google.com/books/about/Radio_Reader.html?id=iSJTLDDg0XEC">
                (Radio Reader 373)
              </a>
              . Minority radio is a prime example of how the diversification of
              radio stations led to broadcasts catering to certain groups of
              people.
            </p>
          </div>
          <div className={styles.containerTwoColumn}>
            <div>
              <h4>4 - Radio in Families</h4>
              <p>
                As families purchased and installed radios in their homes, radio
                became a significant part of the daily American lifestyle.
                However, radio listening as an activity started to change the
                family dynamic when it comes to entertainment and music. Like
                television, listening to the radio was a “home-based leisure”
                before the introduction to the transistor radio, as opposed to
                activities outside the household, like going to the movies,
                which accounted for most entertainment . Along with television,
                the rise of in-home entertainment “entered into families like
                intruders”, invading households. Though some saw radio as
                intrusive media, others claim that “radio and television were an
                element of familial cohesion which allowed for the improvement
                of child-parent dialogues, particularly important during the
                difficult period of adolescence”{" "}
                <a href="https://doi.org/10.1080/00309230.2017.1359190">
                  (Di Spurio)
                </a>
                . In addition, radio music habits and preferences became
                individualized and can cause disagreements among family members
                on which radio stations to tune in to.
              </p>
            </div>
            <img
              src="https://www.census.gov/library/photos/radio-in-the-1930s/_jcr_content/root/responsivegrid/embeddableimage1736.coreimg.jpeg/1550271245229/radio.jpeg"
              alt=""
            />
          </div>
          <div className={styles.containerOneColumn}>
            <h4>5 - Teenage Expression</h4>
            <p>
              Though brief, it is also worth mentioning the teenage movement in
              music post-World-War-II. Teenagers and young adults were finding
              their “need for physical expression” through dance and music.
              Young white audiences were drawn to R&B and music of black
              audiences for their love of rhythm in music{" "}
              <a href="https://doi.org/10.1080/00309230.2017.1359190">
                (Di Spurio)
              </a>
              . Given R&B’s heavy influence in the future rise of rock-n-roll,
              young audiences will be a key target demographic for new radio
              stations.
            </p>
          </div>
          <div className={styles.containerTwoColumn}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/7Y39ciIxWZQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div>
              <h4>The Transistor Radio</h4>
              <p>
                The transistor radio’s core component was the transistor,
                invented during World War II. In December 1947, engineers John
                Bardeen, Walter Brattain, and William Shockley discovered the
                transistor effect, where transistors were much smaller, less
                fragile, and operable at lower voltages. Transistors are “the
                building block for all modern electronic devices” and the three
                engineers responsible for its invention were awarded the 1956
                Nobel Prize in Physics. In 1951, Texas Instruments supplied
                transistors to Idea Inc. who collaborated to design and produce
                the Regency TR-1, the first transistor radio, released in
                November 1954. The Regency TR-1 was only a few inches tall and
                encased in red plastic, but notably, retailed for $50,
                equivalent roughly $400 today{" "}
                <a href="https://www.smithsonianmag.com/smithsonian-institution/sixty-years-ago-the-regency-TR-1-Transistor-Radio-Was-the-New-It-Gift-For-the-Holiday-Season-180953345/">
                  (Smithsonian Magazine)
                </a>
                .
              </p>
            </div>
          </div>
          <p>
            Transistor radios changed how music was physically represented and
            the listening habits of the public, especially on adolescents. Due
            to the relatively affordable price of the Regency TR-1 other and
            transistor radios, transistor radios were heavily marketed to
            teenagers, promoting individualistic listening habits and
            preferences. In fact, they became “a sort of material rite of
            passage for teenagers; for example, they became common communion
            gifts”{" "}
            <a href="https://doi.org/10.1080/00309230.2017.1359190">
              (Di Spurio)
            </a>
            . Transistor radios were able to “provide peace within the family
            unit; parents and children now did not have to fight over the
            programme to which they each wanted to listen”{" "}
            <a href="https://doi.org/10.1080/00309230.2017.1359190">
              (Di Spurio)
            </a>
            . However, those who owned and used transistor radios were not
            representative of the public. “Teenagers from rural areas … rarely
            possessed their own transistor radios”, so social class played a
            part in the public’s use of this new technology. In addition, there
            was a gender bias also at play. Girls often were more likely to
            listen to the radio with family, while boys listened to radio
            outside of the home, usually on their transistor radios{" "}
            <a href="https://doi.org/10.1080/00309230.2017.1359190">
              (Di Spurio)
            </a>
            .
          </p>
        </section>

        <section id="section2">
          <div className={styles.containerOneColumn}>
            <h2>The Transistor Radio and Youth Culture</h2>
            <p>
              The invention of the transistor radio coincided with many other
              broad societal changes in music society during the 1950s. We
              discuss in the following sections how teens interacted with the
              radio, how communities are built around the radio, the rise of
              disc jockeys, and emergence of rock and roll, and offer commentary
              about how these factors all interact with each other to form a new
              youth culture that was disseminated through the transistor radio.
            </p>
          </div>
          <div className={styles.containerOneColumn}>
            <h4>How Teens Interact with the Radio</h4>
            <p>
              Radio and music were a driving force in the emergence of “youth
              culture” in the mid-1950s. Di Spurio in his paper,{" "}
              <a href="https://doi.org/10.1080/00309230.2017.1359190">
                Radiorrhea
              </a>
              , discusses two primary factors that hypothesize why radio had
              such an impact on teens during this time: the need for background
              noise and the need to escape their reality. According to Di
              Spurio, teenagers exhibited a need for a “constant flow of sound
              and music”. Teenagers were described as more “hearing” music
              rather than “listening” to it, a form of passive listening.
              Teenagers were not so much“listening to” as much as “feeling” the
              music, what they claimed to be searching for were “sensations”,
              and what Di Spurio describes as a “need for dance” and a “love for
              rhythm”. Oftentimes, teens would listen to the radio in the
              background while doing other activities, such as their homework.
              Di Spurio claims that this type of background presence became
              something that adolescents were addicted to, which could also be
              related to a fear of emptiness and an inability to cope with
              solitude. As Di Spurio quotes “the radio rather acts as a stopgap
              of the empty space of life or as a way to create a background
              music to the principal activity”.
            </p>
          </div>
          <div className={styles.containerOneColumn}>
            <h4>How Radio Creates Communities</h4>
            <p>
              Transistor radios allowed teenagers to listen to music on their
              own, turning this listening into a personal experience. While the
              transistor radio took away from the traditional prominent family
              activity of sitting in the living room and listening to the radio,
              another culture emerged in the form of teenagers meeting, and
              gathering around a portable radio to listen to music together{" "}
              <a href="https://link.springer.com/book/10.1007/978-3-319-49088-5">
                (J.B. Williams)
              </a>
              .{" "}
              <a href="https://www.jstor.org/stable/30217121#metadata_info_tab_contents">
                McLuhan
              </a>{" "}
              compares the impact of radio on teens to the role of a drum in
              tribal communities, claiming that the radio gives individuals the
              privacy of their own experience, while also connecting them to the
              larger “central nervous system” of the “common market of song and
              resonance”. McLuhan explains that the radio has a “native power”
              to involve people in one another. In this way, the communities
              built around the radio are similar to that of a tribal culture,
              which he defines as a culture built upon the “transmission of its
              attitudes upon the collective or mass medium of speech”. As teens
              all tune into the same channel, they are connecting into this
              nervous system, and become a part of a community where they all
              listen in to a shared experience. The radio was a vehicle which
              allowed teens to withdraw from their local shared familial
              community and into their own more private listening experience
              with the radio, while also connecting the larger community of a
              shared tribal-like community. This point is further evident by the
              prominence of disc-jockey cults during this time period.
            </p>
          </div>
          <div className={styles.containerOneColumn}>
            <h4>The Rise of Disc Jockeys</h4>
            <p>
              Radio programming during this time became more catered towards the
              newly founded teen audience. In an article published in the{" "}
              <a href="https://www.jstor.org/stable/852886#metadata_info_tab_contents">
                Cambridge University Press
              </a>
              , Peterson describes the change of the role of the “functionary
              position of radio announcer” into the ‘showman-entrepreneur dj”,
              defining a new genre of radio called “personality radio”. The
              personality radio disc jockey would engage conversationally with
              their audience, and would even take phone call song requests. Disc
              jockeys would even participate in local community functions or
              visit high schools in the area to promote their channel. According
              to{" "}
              <a href="https://www.sciencedirect.com/science/article/pii/S0040162506001491?ref=pdf_download&fr=RR-2&rr=77a479942da62449">
                Geels
              </a>
              , disc jockey’s close “user-producer” interaction gave them
              valuable feedback when it came to determining which songs to play,
              which further enabled them to better identify hit songs that would
              appeal to their teenage audience.
            </p>
          </div>
          <div className={styles.containerOneColumn}>
            <h4>Rock and Roll and Teens</h4>
            <p>
              With the emergence of a new profitable teen audience founded by
              the development of the transistor radio, along came the rise of
              Rock and Roll. According to{" "}
              <a href="https://www.jstor.org/stable/852886#metadata_info_tab_contents">
                Geels
              </a>
              , Rock and Rolls' new sound utilizing electric guitars and amps
              focused more on beat and rhythm rather than pleasant harmonies
              that are characteristic of pop. This type of music highly appealed
              to this new Teen audience, who primarily listen to music on the
              radio to feel “sensations” and desire a “constant flow of sound
              and music” as mentioned previously. Additionally the themes
              present in these Rock and Roll songs coincides with a lot of the
              sentiments of the youth during this time period. The transistor
              radio was an avenue for increased independence and freedom, and
              Rock and Roll “signaled rebellion to authority from parents,
              school teachers, church and state”{" "}
              <a href="https://www.jstor.org/stable/852886#metadata_info_tab_contents">
                (Geels)
              </a>
              . The black leather jackets and greased up hair went directly
              against the “social rigidity and conformity in high schools and
              families”{" "}
              <a href="https://www.jstor.org/stable/852886#metadata_info_tab_contents">
                (Geels)
              </a>
              .
            </p>
          </div>
          <div className={styles.containerOneColumn}>
            <p>
              The transistor radio allowed teens to listen to radio programming
              independently of their parents. With this new freedom, they
              listened to new types of music and programming, typically newfound
              disc jockeys. A case can be made that without the development of
              the electric guitar and rock and roll, teens would not have
              purchased transistor radios. Yet, a case can also be made that
              rock and roll may have not had the success it had without the
              distribution power of the transistor radio and disc jockeys.
              Additionally, one can argue that it was because of the charismatic
              programming of disc jockeys that teens began listening to rock and
              roll, and that led to the success of the music genre and the
              development of a youth music culture. Maybe radio jockeys were
              only popular because they played rock and roll?
            </p>
            <p>
              While it is difficult to isolate the exact effects the transistor
              radio had on the rise of youth culture and new listening habits
              from other transitions during this time such as the rise of disc
              jockeys and the emergence of rock and roll, the fact is that radio
              during the 1950’s played an essential role in the development of a
              new youth culture. Many teenagers during this time period listened
              to the radio and found a new community in Rock and Roll and disc
              jockeys. As{" "}
              <a href="https://www.jstor.org/stable/852886#metadata_info_tab_contents">
                Geels
              </a>{" "}
              concludes in his paper on the breakthrough or rock and roll, the
              broad transformations occurring in the music industry, musical
              instruments, recording technology, audience, radio programming,
              and music styles set the foundation for the emergence of this new
              youth culture, and one of the key distribution channels for this
              culture was the transistor radio. While, the importance and impact
              the transistor radio had can seem understated at times, as it
              oftentimes served as the background track for everyday life, many
              former-teens look fondly back at the times they carried around a
              portable radio.
            </p>
            <p>
              As Fisher states in his book,{" "}
              <a href="https://books.google.com/books?id=KLNVmbXDZIcC&printsec=copyright#v=onepage&q&f=false">
                Something in the Air
              </a>
              , “Nobody talked much about the radio then; it was just there. The
              songs and jingles embedded themselves in our memories, linking to
              moments magical and painful, connecting to events, places, and
              people.”
            </p>
          </div>
        </section>

        <section id="section3">
          <div className={styles.containerOneColumn}>
            <h2>Music Streaming Services as the Modern Radio</h2>
            <p>
              Patterns in music trends have always been impacted by new emerging
              technology, and music has always had a way of influencing and
              shaping society; these facts are no different today. So far, only
              the transistor radio and the impact of its vogue on teenage
              culture has been discussed. However, in this section, the impacts
              of new and different technologies on youth culture and musical
              trends in teenagers, as well as the similarities and differences
              between music patterns in teenagers now with music streaming
              services versus the time of the transistor radio, will be
              explored.
            </p>
          </div>
          <div className={styles.containerOneColumn}>
            <p>
              One of the most influential impacts the transistor radio brought
              to teen culture was the ability for teenagers to independently
              develop their own musical taste by allowing them to tune into a
              station of their choice at a time of their choice. Streaming
              services offer listeners that same luxury. On the surface, both
              modes of music-sharing seem very similar because listeners get
              easy access to music they want to hear whenever they want.
              However, there is a slight difference in the effects streaming
              services have on their audience: streaming services encourage
              their audiences to indulge in binge-listening. Sidney Eve Matrix,
              a professor of Film at Queen’s University and Author, wrote a
              paper titled{" "}
              <a href="https://sites.pitt.edu/~nancyp/uhc-1510/TeensAndBingeWatching.pdf">
                “The Netflix Effect”
              </a>{" "}
              on media streaming services and their impact on teenagers.
              Although the paper mostly looks into On-Demand television
              streaming, she notes that the patterns seen in teens streaming
              television shows is highly comparable to the patterns seen in
              teens streaming music on services such as Spotify.
            </p>
            <div className={styles.quote}>
              Matrix says, “Video on demand, or the Netflix effect, is ushering
              in a mediated culture of instant gratification, infinite
              entertainment choices, and immersive experiences in televisual
              fantasies that combine drama and realism in irresistibly
              fascinating and spectacular ways… This ‘all the TV you can watch’
              flat-fee model of media consumption can be compared to the “all
              you can listen to” streaming music service on Spotify… This
              ‘Netflixification’ of media forms encourages consumers to binge
              watch (or listen, game, or read), to discover and explore new
              digital cultural productions, and to share the experience online
              with all their iFriends.” (133-134).
            </div>{" "}
            <p>
              Here, Matrix digs into the already proven addictive nature
              streaming services and on-demand media have on audiences of all
              kinds. She also notes that because of the accessibility of music
              via streaming services, there is now a new “peer pressure” to
              consume the same media and music everyone else is consuming in
              order to stay “in the loop” and be able to participate in
              conversations about pop culture. Matrix terms this phenomenon the
              “water cooler effect.” Ultimately, music consumption has been
              driven forward and is reaching new peaks because of the addictive
              structure and accessibility of streaming services, which is an
              event we have seen before with the transistor radio.
            </p>
          </div>
          <div className={styles.containerOneColumn}>
            <p>
              From close up it’s easy to see that teenage music consumption
              behavior has been affected by new technologies, but if you take a
              step back and see things from a wider angle, it is clear that the
              internet as a whole heavily impacts music trends. In an article
              written by previous University of the Pacific student Ailey Butler
              titled{" "}
              <a href="https://scholarlycommons.pacific.edu/cgi/viewcontent.cgi?article=1044&amp;context=backstage-pass">
                “Why Streaming is a Good Thing for the Music Industry”
              </a>
              , Butler briefly touches on the fact that individuals tend to have
              a more diverse taste in music now that it’s more accessible.
            </p>
            <div className={styles.quote}>
              She says, “In the same vein, music streaming also makes it easier
              for us to discover new music and lesser known artists because
              anyone can put music onto streaming platforms. Distributing music
              online is much less complicated and requires fewer resources than
              distributing physical product[s].”
            </div>
            <p>
              In the days of the transistor radio, listeners were only able to
              listen to whatever the disc jockeys would play, which, in most
              cases, was just any song in the Top 40. People then didn’t have
              the option or luxury we do now of tapping a few buttons in order
              to branch out their music taste and listen to songs and artists
              they had never heard of. She notes that because of this, there is
              a smaller likelihood of a group of artists having a monopoly over
              the music industry. To clarify, this is not to say that it is
              impossible for one or a few artists to have a monopoly. To
              summarize Butler’s words, musical trends have become more diverse.
              However, we can’t simply credit this to streaming services only.
              Social media, namely a new internet fad called TikTok, has taken
              over 21st century teenagers and is one of the biggest game
              changers when it comes to musical trends today. In a University of
              Colorado article written by Media Relations Associate Ally Dever,
              it is pointed out that “Among TikTok’s now 1 billion monthly
              active users, there is an entire music industry—where users
              preview albums to gauge consumer interest, create trends to new
              songs and even pay influencers to market those songs. Artists can
              effectively promote on TikTok in part by doing the things that the
              site’s algorithms prefer in order to reach more users… TikTok is
              basically a site where musicians work to add to their fanbase who
              hopefully will then go to other (monetized) sites to stream their
              music, like Spotify or YouTube.” Many of today's new artists that
              are popular among the youth can credit the timing of their
              popularity to TikTok. For example, rapper and singer Doja Cat
              quickly rose to fame in 2020 because a new dance trend to her song
              “Say So” went viral. Because of how often new trends go viral on
              TikTok, musical trends within the app are constantly changing,
              meaning teenagers, which are the app’s main audience, are
              constantly being exposed to new music.
            </p>
          </div>
          <div className={styles.containerOneColumn}>
            <p>
              In the end, there are parallels that can be drawn between
              streaming services and the transistor radio: both were able to
              boost music consumption in teenagers. However, the impact of
              today's technology on youth culture and music trends is arguably
              incomparable to the impact of the transistor radio because of how
              much more dramatic the increase in music consumption that was
              brought by music streaming services was. This is because the
              accessibility on-demand media brings to users allows them to
              binge-listen to music. On top of that, social media apps that are
              mainly used by teenagers are constantly cycling through new trends
              and introducing watchers and listeners to new music everyday,
              which diversifies teenagers music tastes. Ultimately, today’s
              technology is unmatched to the transistor radio.
            </p>
          </div>
        </section>
        <footer>
          <div>
            <h3>LMC 3263</h3>
            <p>For Georgia Tech's LMC 3263: History of Music Class</p>
            <p>Built in Fall 2022</p>
          </div>
          <div>
            <h3>Team Members</h3>
            <p>Jason Yang - Development, Research, and Content</p>
            <p>Esha Singh - Research and Content</p>
            <p>Karthik Varadharajan - Research and Content</p>
          </div>
        </footer>
      </main>
    </>
  );
}
