// css
import styles from "./Landing.module.css"

const Landing = (): JSX.Element => {
  return (
    <main className={styles.container}>
      <div className={styles.HERO}>
        <img
          src="https://res.cloudinary.com/di6tvzeal/image/upload/v1686173788/rpLogo_eam1kq.jpg"
          alt="RP HERO"
        />
      </div>
      <div className={styles.ABOUT}>
        <h1>Ripe Potatoes</h1>
        <h2>Culturally relevant, critically irrelevant</h2>
        <p>
          Welcome to "Ripe Potatoes," the ultimate destination for honest and
          insightful reviews of movies that received a Rotten Tomatoes score of
          less than 60. <br></br>We provide a platform where films with lower
          scores can still find their audience, acknowledging that critical
          acclaim doesn't always align with personal taste.
        </p>
      </div>
      <div className={styles.team}>
        <h1>TEAM</h1>
        <div className={styles.teamSection}>
          <img
            src="https://res.cloudinary.com/di6tvzeal/image/upload/v1686172638/IMG_8592_jqw5oe.jpg"
            alt="Lizzie"
          />
          <h2>
            <a
              href="https://www.linkedin.com/in/lizzieheyboer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lizzie
            </a>
          </h2>
          <p>Founder & CEO</p>
        </div>
        <div className={styles.teamSection}>
          <img
            src="https://res.cloudinary.com/di6tvzeal/image/upload/v1686186144/jf_headshot-1mb_wfv1cg.jpg"
            alt="Julian"
          />
          <h2>
            <a
              href="https://github.com/jbot010"
              target="_blank"
              rel="noopener noreferrer"
            >
              Julian
            </a>
          </h2>
          <p>Full Stack Engineer</p>
        </div>
        <div className={styles.teamSection}>
          <img
            src="https://res.cloudinary.com/di6tvzeal/image/upload/v1686172068/233E0E19-9C51-4B0F-8CE7-2F17D9F65896_1_105_c_gfowwt.jpg"
            alt="Bowie"
          />
          <h2>Bowie</h2>
          <p>Office Manager</p>
        </div>
      </div>
    </main>
  )
}

export default Landing
