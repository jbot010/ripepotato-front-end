// css
import styles from './Profiles.module.css'

// components
import ProfileCard from '../../components/ProfileCard/ProfileCard'

// types
import { Profile } from '../../types/models'

interface ProfilesProps {
  profiles: Profile[];
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { profiles } = props

  if (!profiles.length) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }

  return (
    <main className={styles.container}>
      {profiles.map((profile: Profile) =>
        <ProfileCard
          key={profile.id}
          profile={profile}
        />
      )}
    </main>
  )
}

export default Profiles
