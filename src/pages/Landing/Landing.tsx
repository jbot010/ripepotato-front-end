// css
import styles from "./Landing.module.css"
// types
import { User } from "../../types/models"

interface LandingProps {
  user: User | null
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  return (
    <main className={styles.container}>
      <div className={styles.HERO}>
        <img
          src="https://res.cloudinary.com/di6tvzeal/image/upload/v1686173788/rpLogo_eam1kq.jpg"
          alt="RP HERO"
        />
      </div>
      <div className={styles.ABOUT}>
        <h1>Ripe Potato</h1>
        <h2>Culturally relevant, critically irrelevant</h2>
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
