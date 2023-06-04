// npm modules
// import { useState, useEffect } from 'react'

// services
// import * as profileService from '../../services/profileService'

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
  // const [profiles, setProfiles] = useState<Profile[]>([])

  // useEffect((): void => {
  //   const fetchProfiles = async (): Promise<void> => {
  //     try {
  //       const profileData: Profile[] = await profileService.getAllProfiles()
  //       setProfiles(profileData)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchProfiles()
  // }, [])

  if (!profiles.length) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }

  return (
    <main className='list'>
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
