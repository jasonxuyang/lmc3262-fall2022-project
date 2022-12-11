import Head from "next/head";
import Image from "next/image";
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
            <a href="#section1">Section 1: A Brief History on Radio</a>
            <a href="#section1">Section 2: A Brief History on Radio</a>
            <a href="#section1">Section 3: A Brief History on Radio</a>
          </div>
        </section>

        <section id="section1">
          <div>
            <div className={styles.containerOneColumn}>
              <h2>The Rise of the Transistor Radio</h2>
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
            <div className={styles.containerOneColumn}>
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
                from the local department store” (Guthrie 284). One of the main
                concerns about radio was the quality of music when compared to
                the phonograph. As radio became commodified and spread to
                households across the country, audiences were willing to
                tolerate the lower quality of music and radio content because of
                the higher social status that came with owning a radio (Guthrie
                284). However, the invention of FM radio in the 1930s solved the
                audio quality issue. The shared listening experience of radio
                would soon be available to the youth of nation through the
                transistor radio.
              </p>
            </div>
            <div className={styles.containerOneColumn}>
              <h4>2 - Expansion of Radio Audiences</h4>
              <p>
                In 1947, just after the end of World War II, the Federal
                Communications Commission (FCC) enforced new regulations that
                would vastly increase the number of station licenses in the
                United States: “fewer than 1,000 radio stations were
                broadcasting in 1945 in the US but grew to 2000 in 1950, 3500 in
                1960 and 4000 in 1965” (Radio Reader 371). The steep increase in
                radio stations leads to competition among stations over
                listeners, forcing stations to diversify and find their own
                niches in the radio scene. Eventually, radio stations began to
                narrow their music choices to establish their “core audiences”
                and create their own brand around it. This shift was also
                replicated through the dispersion of audiences across the wide
                selection of radio stations. Because each radio station started
                to solidify their audiences under a shared interest or niche,
                radio programmers were now able to “reduce the uncertainty of
                their programming decisions and attract advertisers seeking
                specific groups of consumers”, producing a “fragmented and
                pluralistic culture” of radio (Radio Reader 379). These consumer
                groups can refer to many demographics such as specific races,
                religions, or age ranges.
              </p>
            </div>
            <div className={styles.containerOneColumn}>
              <h4>3 - Minority Radio</h4>
              <p>
                World War II significantly changed the economic lifestyle of
                minorities in the US for the better. Even though the income of
                Black Americans “continued to lag far behind that of whites,
                studies indicate that it grew at a faster rate between 1940 and
                1954 than at any previous time in American history” (Radio
                Reader 372). As minority communities started to earn more money,
                they were able to economically participate in mainstream
                American culture, which included the radio. As radio stations
                diversified in their broadcast content, minority radio stations
                began to form starting in 1947. Some of the first stations
                included WDIA in Memphis for Black audiences and KCOR in San
                Antonio for Hispanic audiences. However, the stations behind
                minority radio were still subject to discrimination. Most
                minority stations in the US “rarely were owned by nonwhites” and
                some advertisers refused to hire black permanent employees or
                contractors. Despite the discrimination, minority radio was
                still “a sense of pride to the communities they served” (Radio
                Reader 373). Minority radio is a prime example of how the
                diversification of radio stations led to broadcasts catering to
                certain groups of people.
              </p>
            </div>
            <div className={styles.containerOneColumn}>
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
                difficult period of adolescence” (Di Spurio). In addition, radio
                music habits and preferences became individualized and can cause
                disagreements among family members on which radio stations to
                tune in to.
              </p>
            </div>
            <div className={styles.containerOneColumn}>
              <h4>5 - Teenage Expression</h4>
              <p>
                Though brief, it is also worth mentioning the teenage movement
                in music post-World-War-II. Teenagers and young adults were
                finding their “need for physical expression” through dance and
                music. Young white audiences were drawn to R&B and music of
                black audiences for their love of rhythm in music (Di Spurio).
                Given R&B’s heavy influence in the future rise of rock-n-roll,
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
                frameBorder="0"
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
                  building block for all modern electronic devices” and the
                  three engineers responsible for its invention were awarded the
                  1956 Nobel Prize in Physics. In 1951, Texas Instruments
                  supplied transistors to Idea Inc. who collaborated to design
                  and produce the Regency TR-1, the first transistor radio,
                  released in November 1954. The Regency TR-1 was only a few
                  inches tall and encased in red plastic, but notably, retailed
                  for $50, equivalent roughly $400 today (Smithsonian Magazine).
                </p>
                <p>
                  Transistor radios changed how music was physically represented
                  and the listening habits of the public, especially on
                  adolescents. Due to the relatively affordable price of the
                  Regency TR-1 other and transistor radios, transistor radios
                  were heavily marketed to teenagers, promoting individualistic
                  listening habits and preferences. In fact, they became “a sort
                  of material rite of passage for teenagers; for example, they
                  became common communion gifts” (Di Spurio). Transistor radios
                  were able to “provide peace within the family unit; parents
                  and children now did not have to fight over the programme to
                  which they each wanted to listen” (Di Spurio). However, those
                  who owned and used transistor radios were not representative
                  of the public. “Teenagers from rural areas … rarely possessed
                  their own transistor radios”, so social class played a part in
                  the public’s use of this new technology. In addition, there
                  was a gender bias also at play. Girls often were more likely
                  to listen to the radio with family, while boys listened to
                  radio outside of the home, usually on their transistor radios
                  (Di Spurio).
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
